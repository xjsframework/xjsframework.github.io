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
          "path": "core/Environment",
          "partial": "partials/modules/core/Environment/index.html",
          "name": "Environment",
          "type": "class"
        },
        {
          "path": "core/App",
          "partial": "partials/modules/core/App/index.html",
          "name": "App",
          "type": "class"
        },
        {
          "path": "core/Scene",
          "partial": "partials/modules/core/Scene/index.html",
          "name": "Scene",
          "type": "class"
        },
        {
          "path": "core/Transition",
          "partial": "partials/modules/core/Transition/index.html",
          "name": "Transition",
          "type": "class"
        },
        {
          "path": "core/ItemTypes",
          "partial": "partials/modules/core/ItemTypes/index.html",
          "name": "ItemTypes",
          "type": "enum"
        },
        {
          "path": "core/Item",
          "partial": "partials/modules/core/Item/index.html",
          "name": "Item",
          "type": "class"
        },
        {
          "path": "core/CameraItem",
          "partial": "partials/modules/core/CameraItem/index.html",
          "name": "CameraItem",
          "type": "class"
        },
        {
          "path": "core/GameItem",
          "partial": "partials/modules/core/GameItem/index.html",
          "name": "GameItem",
          "type": "class"
        },
        {
          "path": "core/AudioItem",
          "partial": "partials/modules/core/AudioItem/index.html",
          "name": "AudioItem",
          "type": "class"
        },
        {
          "path": "core/HTMLItem",
          "partial": "partials/modules/core/HTMLItem/index.html",
          "name": "HTMLItem",
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
        },
        {
          "path": "system/MicrophoneDevice",
          "partial": "partials/modules/system/MicrophoneDevice/index.html",
          "name": "MicrophoneDevice",
          "type": "class"
        }
      ]
    },
    {
      "path": "util",
      "partial": "partials/modules/util/index.html",
      "name": "util",
      "type": "module",
      "pages": [
        {
          "path": "util/Color",
          "partial": "partials/modules/util/Color/index.html",
          "name": "Color",
          "type": "class"
        },
        {
          "path": "util/Rectangle",
          "partial": "partials/modules/util/Rectangle/index.html",
          "name": "Rectangle",
          "type": "class"
        },
        {
          "path": "util/IO",
          "partial": "partials/modules/util/IO/index.html",
          "name": "IO",
          "type": "class"
        }
      ]
    }
  ]
});