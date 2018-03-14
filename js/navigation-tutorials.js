angular.module('navigation-tutorials', [])

.value('TUTS', {
  "pages": [
    {
      "path": "types",
      "partial": "tutorials/types/",
      "name": "Types of Plugins"
    },
    {
      "path": "advancedxjs",
      "partial": "tutorials/advancedxjs/",
      "name": "Installing XJS - Advanced"
    },
    {
      "path": "sourceplugins",
      "partial": "tutorials/sourceplugins/",
      "name": "Developing Source Plugins"
    },
    {
      "path": "sourceconfig",
      "partial": "tutorials/sourceconfig/",
      "name": "Developing the Source Properties Window"
    },
    {
      "path": "extensions",
      "partial": "tutorials/extensions/",
      "name": "Developing Extension Plugins"
    },
    {
      "path": "advancedplugins",
      "partial": "tutorials/advancedplugins/",
      "name": "Advanced Plugins"
    },
    {
      "path": "debugging",
      "partial": "tutorials/debugging/",
      "name": "Debugging Your Plugins"
    },
    {
      "path": "es6",
      "partial": "tutorials/es6/",
      "name": "Developing with ES2015"
    },
    {
      "path": "linkedsources",
      "partial": "tutorials/linkedsources/",
      "name": "Linked Sources"
    },
    {
      "path": "broadcastcontrol",
      "partial": "tutorials/broadcastcontrol/",
      "name": "Start/Stop Broadcast"
    },
    {
      "path": "errors",
      "partial": "tutorials/errors/",
      "name": "Common Errors"
    },
    {
      "path": "authentication",
      "partial": "tutorials/authentication/",
      "name": "Authenticating to External Services"
    },
    {
      "path": "dll",
      "partial": "tutorials/dll/",
      "name": "Using DLLs for Extensibility"
    },
    {
      "path": "60fps",
      "partial": "tutorials/60fps/",
      "name": "60 FPS Browser Sources"
    },
    {
      "path": "remotexjs",
      "partial": "tutorials/remotexjs/",
      "name": "Remote XJS (BETA)"
    }
  ]
});
