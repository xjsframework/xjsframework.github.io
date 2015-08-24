angular.module('navigation-modules', [])

.value('MODULES', {
  "sections": [
    {
      "path": "core",
      "partial": "partials/modules/core/index.html",
      "name": "core",
      "type": "module",
      "pages": [
        {
          "path": "core/App",
          "partial": "partials/modules/core/App/index.html",
          "name": "App",
          "type": "class"
        }
      ]
    },
    {
      "path": "system",
      "partial": "partials/modules/system/index.html",
      "name": "system",
      "type": "module",
      "pages": [
        {
          "path": "system/AudioDeviceDataflow",
          "partial": "partials/modules/system/AudioDeviceDataflow/index.html",
          "name": "AudioDeviceDataflow",
          "type": "enum"
        },
        {
          "path": "system/AudioDeviceState",
          "partial": "partials/modules/system/AudioDeviceState/index.html",
          "name": "AudioDeviceState",
          "type": "enum"
        },
        {
          "path": "system/System",
          "partial": "partials/modules/system/System/index.html",
          "name": "System",
          "type": "class"
        },
        {
          "path": "system/AudioDevice",
          "partial": "partials/modules/system/AudioDevice/index.html",
          "name": "AudioDevice",
          "type": "class"
        },
        {
          "path": "system/CameraDevice",
          "partial": "partials/modules/system/CameraDevice/index.html",
          "name": "CameraDevice",
          "type": "class"
        },
        {
          "path": "system/Game",
          "partial": "partials/modules/system/Game/index.html",
          "name": "Game",
          "type": "class"
        }
      ]
    }
  ]
});