<?php
/*
VideoWhisper 2 Way Video Chat (for Joomla):

Copyright (C) 2009  VideoWhisper.com

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

//don't allow other scripts to grab and execute our file
defined('_JEXEC') or die('Direct Access to this location is not allowed.');
 
 if (!file_exists('components/com_videowhisper_2wvc'))
 {
	 echo "This module requires VideoWhisper <a href='http://www.videowhisper.com/?p=Joomla+2+Way+Video+Chat+Component'>2 Way Video Chat component</a>.";
 }
 else
 {

   $cparams = &JComponentHelper::getParams( 'com_videowhisper_2wvc' );
   $VideoWhisper = $cparams->get( 'VideoWhisper' );
   $chatName = $cparams->get( 'chatName' );
		
	//tables
    $db = &JFactory::getDBO();	 
	$rtable = "#__v2wvc_rooms";
	$stable = "#__v2wvc_sessions";
	
	//get user info
	$user =& JFactory::getUser();	
	$username = $user->get('username');
	$email = $user->get('email');
	$user_id = $user->get('id');
	 
	 //module parameters
	 $pCount = $params->get('count');
	 $pShow = $params->get('show');
	 $pOnline = $params->get('online');
	 $pManage = $params->get('manage');

	//close expired sessions
	$exptime=time()-30;
	$sql="DELETE FROM `$stable` WHERE edate < $exptime";
    $db->setQuery( $sql );
  	$db->query();
	
     // get a list of rooms
	 $query = "SELECT r.room, r.`access`, (SELECT COUNT(s.id) FROM `$stable` s WHERE s.room=r.room) AS no, (SELECT MAX(s.`type`) FROM `$stable` s WHERE s.room=r.room) as rtype FROM `$rtable` r WHERE r.suspended=0 AND (r.replicate < 2) ";
	 //, 
	 
	 $grp="";
	 //$grp= "GROUP BY s.room";
	 $oc = "";
	 $oo = "no DESC,";
	 switch ($pOnline)
	 {
		case 'any':
		break;
		case 'none':
		$oc = "AND (SELECT COUNT(s.id) FROM `$stable` s WHERE s.room=r.room)=0";
		break;
		case 'one':
		$oc = "AND (SELECT COUNT(s.id) FROM `$stable` s WHERE s.room=r.room)=1";
		break;
		case 'yes':
		$oc = "AND (SELECT COUNT(s.id) FROM `$stable` s WHERE s.room=r.room)>0";
		break;
		case 'many':
		$oc = "AND (SELECT COUNT(s.id) FROM `$stable` s WHERE s.room=r.room)>1";
		break;
		case 'admin':
		$oc = "AND (SELECT MAX(s.`type`) FROM `$stable` s WHERE s.room=r.room) >= 2";
		break;
		case 'onlyadmin':
		$oc = "AND (SELECT MAX(s.`type`) FROM `$stable` s WHERE s.room=r.room) >= 2 AND (SELECT COUNT(s.id) FROM `$stable` s WHERE s.room=r.room)=1";
		break;
		case 'owner':
		$oc = "AND (SELECT MAX(s.`type`) FROM `$stable` s WHERE s.room=r.room) = 3";
		break;	
		case 'onlyowner':
		$oc = "AND (SELECT MAX(s.`type`) FROM `$stable` s WHERE s.room=r.room) = 3 AND (SELECT COUNT(s.id) FROM `$stable` s WHERE s.room=r.room)=1";
		break;				
	 }
	 
	 $filter=0;
	 $icount=0;
	 switch ($pShow)
	 {
		 case "public":
	     $query .= "AND r.`public`>=1  $grp ORDER BY r.`public` DESC, r.`timecreated` DESC LIMIT 0, $pCount";
		 break;
		 case "owned":
		 $cnd = "r.owner='$username'";
	     if ($email) $cnd .= ($cnd ? " OR " :"") . "r.owner='$email'";
		 if ($user_id) $cnd .= ($cnd ? " OR " :"") . "r.owner='$user_id'";
	     $query .= "AND ($cnd) $oc $grp ORDER BY r.`public` DESC, $oo r.`timecreated` DESC LIMIT 0, $pCount";
		 break;
		 case "private":
		 $query .= "AND r.`public`=0 $oc $grp ORDER BY $oo r.`timecreated` DESC";
		 $filter=1;
		 break;
		 case "featured":
		 $query .= "AND r.`public`=2 $oc $grp ORDER BY $oo r.`timecreated` DESC";
		 $filter=1;
		 break;
		 case "all":
		 $query .= "$oc $grp ORDER BY r.`public` DESC, $oo r.`timecreated` DESC";
		 $filter=1;
		 break;
	 }
	 
	 //echo $query;
	 //prepare filtering
	 if ($filter)
	 {
	//user details

		$usertype = $user->usertype;
		if ($user->usertype=="deprecated") $usertype = $user->groups[0]; //Joomla 1.6+
		$userlabel = $user->get($chatName);	
		
		//define user classes to retrieve rights
		$uclasses=array();
		
		if ($user_id) $uclasses[] = 'Members';
		else $uclasses[] = 'Guests';
		
		$uclasses[] = $username;
		$uclasses[] = $email;
		$uclasses[] = $user_id;
		$uclasses[] = $userlabel;		
		$uclasses[] = $usertype;
		
		//if ($room->owner) if ($room->owner == $user->get('username') || $room->owner == $user->get('email') || $room->owner == $user_id) $uclasses[] = "Admins"; //owner is also admin			
		if (in_array($usertype, array('Super Administrator', 'Administrator', 'Manager', 'Super Users'))) $uclasses[] = 'Admins';
	
		if ($user->usertype=="deprecated") if (is_array($user->groups)) foreach ($user->groups as $group=>$id) if ($group)  //joomla 1.6+
		{
		if (!in_array($group, $uclasses)) $uclasses[] = $group; 
		if (in_array($group, array('Super Administrator', 'Administrator', 'Manager', 'Super Users'))) if (!in_array('Admins', $uclasses)) $uclasses[] = 'Admins';
		}

		//jomsocial groups
		if (file_exists('components/com_community'))
		{
		$queryJS = 'SELECT `name` FROM `#__community_groups_members` gm, `#__community_groups` g WHERE gm.memberid=' . $user_id . ' AND g.id=gm.groupid';
      	$db->setQuery( $queryJS );
		$items = ($items = $db->loadObjectList())?$items:array();
		foreach ($items as $item) $uclasses[] =  $item->name;
		}
		
		//get rights function
		if (!function_exists('hasRights'))
		{
			function hasRights($uclasses, $groups)
			{
				if (trim($groups)=="None") return 0;
				
				$ugroups=explode(",",$groups);
												
				foreach ($ugroups as $ugroup) 
				{
				   if (trim($ugroup) == 'All') return 1;
				   if (trim($ugroup) == 'None') return 0;
				   foreach ($uclasses as $uclass) if (trim($uclass)==trim($ugroup)) return 1;
				}
				return 0;
			}
		}
	 }


    $db->setQuery($query);
    $items = ($items = $db->loadObjectList())?$items:array();

		echo "<ul>";
		if ($items)	
		foreach ($items as $item) 
		{
			//if filtering requires see if this user can access
			if ($filter) 
			{
			 $icount++;
			 $showThis = hasRights($uclasses, $item->access);
			 if ($item->owner) if (in_array("Admins", $uclasses)) if ($item->owner == $username || $item->owner == $email || $item->owner == $user_id)  $showThis = 1; //owner is also admin		 
			 if ($icount>$pCount) break; //manual limitation
			}
			
			$o="";
			if ($item->rtype==2) $o="<B title='Admin'>A</B>";
			if ($item->rtype==3) $o="<B title='Owner'>O</B>";
			
			if (!$filter||$showThis) echo "<li><IMG SRC='" .JURI::base(). "components/com_videowhisper_2wvc/templates/2wvc/webcam.png' width='18' align='absmiddle' border='0'> <a href='".JURI::root().'index.php?option=com_videowhisper_2wvc&view=vw2wvc&format=raw&room='.urlencode($item->room)."'>".$item->room."</a> <small>(".$item->no.") $o</small></li>";
		}
		else echo "<li>No video 2wvc rooms to show for current module settings (Room Type: $pShow, Users Online: $pOnline).</li>";
		echo "</ul>";
		
		if ($pManage)
		{
		echo "<IMG SRC='" .JURI::base(). "components/com_videowhisper_2wvc/templates/2wvc/next.png' width='24' align='absmiddle' border='0'> " . '<A HREF="' . JRoute::_( 'index.php?option=com_videowhisper_2wvc&view=create') . '">Create New Room</a>';
		echo "<BR><IMG SRC='" .JURI::base(). "components/com_videowhisper_2wvc/templates/2wvc/next_over.png' width='24' align='absmiddle' border='0'> " . '<A HREF="' . JRoute::_( 'index.php?option=com_videowhisper_2wvc&view=rooms') . '">Edit My Rooms</a>';
		}
		
		$state = 'block' ;
		if (!$VideoWhisper) $state = 'none';	
		echo '<div id="VideoWhisper" style="display: ' . $state . ';">Powered by VideoWhisper <a href="http://www.videowhisper.com/?p=Joomla+2+Way+Video+Chat+Component">P2P 1on1 Video Chat</a>.</div>';
		

 }
?>