import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommandsPage } from './commands';

@NgModule({
  declarations: [
    CommandsPage,
  ],
  imports: [
    IonicPageModule.forChild(CommandsPage),
  ],
  exports: [
    CommandsPage
  ]
})
export class CommandsPageModule {}
