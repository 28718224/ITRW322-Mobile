cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-fabric-plugin.FabricPlugin",
      "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.js",
      "pluginId": "cordova-fabric-plugin",
      "clobbers": [
        "window.fabric.core"
      ]
    },
    {
      "id": "cordova-fabric-plugin.FabricAnswersPlugin",
      "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.Answers.js",
      "pluginId": "cordova-fabric-plugin",
      "clobbers": [
        "window.fabric.Answers"
      ]
    },
    {
      "id": "cordova-fabric-plugin.FabricCrashlyticsPlugin",
      "file": "plugins/cordova-fabric-plugin/www/FabricPlugin.Crashlytics.js",
      "pluginId": "cordova-fabric-plugin",
      "clobbers": [
        "window.fabric.Crashlytics"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-fabric-plugin": "1.1.14-dev"
  };
});