angular.module('navigation-modules', [])

.value('MODULES', {
  "sections": [
    {
      "path": "/core",
      "partial": "partials/modules/core/index.html",
      "name": "Core",
      "type": "Module",
      "pages": [
        {
          "path": "/core/Item",
          "partial": "partials/modules//core/Item/index.html",
          "name": "Item",
          "type": "Class",
          "pages": [
            {
              "path": "/core/Item#setName",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setName"
            },
            {
              "path": "/core/Item#getName",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getName"
            },
            {
              "path": "/core/Item#setCustomName",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setCustomName"
            },
            {
              "path": "/core/Item#getCustomName",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getCustomName"
            },
            {
              "path": "/core/Item#getValue",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getValue"
            },
            {
              "path": "/core/Item#setValue",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setValue"
            },
            {
              "path": "/core/Item#getKeepLoaded",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getKeepLoaded"
            },
            {
              "path": "/core/Item#setKeepLoaded",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setKeepLoaded"
            },
            {
              "path": "/core/Item#getType",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getType"
            },
            {
              "path": "/core/Item#getID",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getID"
            },
            {
              "path": "/core/Item#getSceneID",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getSceneID"
            },
            {
              "path": "/core/Item#toXML",
              "partial": "partials/modules//core/Item/index.html",
              "name": "toXML"
            },
            {
              "path": "/core/Item#isKeepAspectRatio",
              "partial": "partials/modules//core/Item/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/Item#isPositionLocked",
              "partial": "partials/modules//core/Item/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/Item#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/Item/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/Item#getPosition",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/Item#getRotateY",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/Item#getRotateX",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/Item#getRotateZ",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/Item#setKeepAspectRatio",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/Item#setPositionLocked",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/Item#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/Item#setPosition",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/Item#setRotateY",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/Item#setRotateX",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/Item#setRotateZ",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/Item#getCurrentSource",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getCurrentSource"
            }
          ]
        },
        {
          "path": "/core/KeyingType",
          "partial": "partials/modules//core/KeyingType/index.html",
          "name": "KeyingType",
          "type": "Enum",
          "pages": [
            {
              "path": "/core/KeyingType#LEGACY",
              "partial": "partials/modules//core/KeyingType/index.html",
              "name": "LEGACY"
            },
            {
              "path": "/core/KeyingType#COLORKEY",
              "partial": "partials/modules//core/KeyingType/index.html",
              "name": "COLORKEY"
            },
            {
              "path": "/core/KeyingType#RGBKEY",
              "partial": "partials/modules//core/KeyingType/index.html",
              "name": "RGBKEY"
            }
          ]
        },
        {
          "path": "/core/ChromaPrimaryColors",
          "partial": "partials/modules//core/ChromaPrimaryColors/index.html",
          "name": "ChromaPrimaryColors",
          "type": "Enum",
          "pages": [
            {
              "path": "/core/ChromaPrimaryColors#RED",
              "partial": "partials/modules//core/ChromaPrimaryColors/index.html",
              "name": "RED"
            },
            {
              "path": "/core/ChromaPrimaryColors#GREEN",
              "partial": "partials/modules//core/ChromaPrimaryColors/index.html",
              "name": "GREEN"
            },
            {
              "path": "/core/ChromaPrimaryColors#BLUE",
              "partial": "partials/modules//core/ChromaPrimaryColors/index.html",
              "name": "BLUE"
            }
          ]
        },
        {
          "path": "/core/ChromaAntiAliasLevel",
          "partial": "partials/modules//core/ChromaAntiAliasLevel/index.html",
          "name": "ChromaAntiAliasLevel",
          "type": "Enum",
          "pages": [
            {
              "path": "/core/ChromaAntiAliasLevel#NONE",
              "partial": "partials/modules//core/ChromaAntiAliasLevel/index.html",
              "name": "NONE"
            },
            {
              "path": "/core/ChromaAntiAliasLevel#LOW",
              "partial": "partials/modules//core/ChromaAntiAliasLevel/index.html",
              "name": "LOW"
            },
            {
              "path": "/core/ChromaAntiAliasLevel#HIGH",
              "partial": "partials/modules//core/ChromaAntiAliasLevel/index.html",
              "name": "HIGH"
            }
          ]
        },
        {
          "path": "/core/Environment",
          "partial": "partials/modules//core/Environment/index.html",
          "name": "Environment",
          "type": "Class",
          "pages": [
            {
              "path": "/core/Environment#initialize",
              "partial": "partials/modules//core/Environment/index.html",
              "name": "initialize"
            },
            {
              "path": "/core/Environment#isSourcePlugin",
              "partial": "partials/modules//core/Environment/index.html",
              "name": "isSourcePlugin"
            },
            {
              "path": "/core/Environment#isSourceConfig",
              "partial": "partials/modules//core/Environment/index.html",
              "name": "isSourceConfig"
            },
            {
              "path": "/core/Environment#isExtension",
              "partial": "partials/modules//core/Environment/index.html",
              "name": "isExtension"
            }
          ]
        },
        {
          "path": "/core/App",
          "partial": "partials/modules//core/App/index.html",
          "name": "App",
          "type": "Class",
          "pages": [
            {
              "path": "/core/App#getFrametime",
              "partial": "partials/modules//core/App/index.html",
              "name": "getFrametime"
            },
            {
              "path": "/core/App#getResolution",
              "partial": "partials/modules//core/App/index.html",
              "name": "getResolution"
            },
            {
              "path": "/core/App#getViewport",
              "partial": "partials/modules//core/App/index.html",
              "name": "getViewport"
            },
            {
              "path": "/core/App#getVersion",
              "partial": "partials/modules//core/App/index.html",
              "name": "getVersion"
            },
            {
              "path": "/core/App#getFramesRendered",
              "partial": "partials/modules//core/App/index.html",
              "name": "getFramesRendered"
            },
            {
              "path": "/core/App#getPrimaryMic",
              "partial": "partials/modules//core/App/index.html",
              "name": "getPrimaryMic"
            },
            {
              "path": "/core/App#getPrimarySpeaker",
              "partial": "partials/modules//core/App/index.html",
              "name": "getPrimarySpeaker"
            },
            {
              "path": "/core/App#setPrimaryMic",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimaryMic"
            },
            {
              "path": "/core/App#setPrimarySpeaker",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimarySpeaker"
            },
            {
              "path": "/core/App#isSilenceDetectionEnabled",
              "partial": "partials/modules//core/App/index.html",
              "name": "isSilenceDetectionEnabled"
            },
            {
              "path": "/core/App#enableSilenceDetection",
              "partial": "partials/modules//core/App/index.html",
              "name": "enableSilenceDetection"
            },
            {
              "path": "/core/App#getSilenceDetectionPeriod",
              "partial": "partials/modules//core/App/index.html",
              "name": "getSilenceDetectionPeriod"
            },
            {
              "path": "/core/App#setSilenceDetectionPeriod",
              "partial": "partials/modules//core/App/index.html",
              "name": "setSilenceDetectionPeriod"
            },
            {
              "path": "/core/App#getSilenceDetectionThreshold",
              "partial": "partials/modules//core/App/index.html",
              "name": "getSilenceDetectionThreshold"
            },
            {
              "path": "/core/App#setSilenceDetectionThreshold",
              "partial": "partials/modules//core/App/index.html",
              "name": "setSilenceDetectionThreshold"
            },
            {
              "path": "/core/App#getTransition",
              "partial": "partials/modules//core/App/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/App#setTransition",
              "partial": "partials/modules//core/App/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/App#getTransitionTime",
              "partial": "partials/modules//core/App/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/App#setTransitionTime",
              "partial": "partials/modules//core/App/index.html",
              "name": "setTransitionTime"
            },
            {
              "path": "/core/App#clearBrowserCookies",
              "partial": "partials/modules//core/App/index.html",
              "name": "clearBrowserCookies"
            }
          ]
        },
        {
          "path": "/core/Scene",
          "partial": "partials/modules//core/Scene/index.html",
          "name": "Scene",
          "type": "Class",
          "pages": [
            {
              "path": "/core/Scene#getSceneNumber",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "getSceneNumber"
            },
            {
              "path": "/core/Scene#getName",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "getName"
            },
            {
              "path": "/core/Scene#setName",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "setName"
            },
            {
              "path": "/core/Scene#getItems",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "getItems"
            },
            {
              "path": "/core/Scene#isEmpty",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "isEmpty"
            },
            {
              "path": "/core/Scene#setItemOrder",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "setItemOrder"
            },
            {
              "path": "/core/Scene#getById",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "getById"
            },
            {
              "path": "/core/Scene#getByName",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "getByName"
            },
            {
              "path": "/core/Scene#getActiveScene",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "getActiveScene"
            },
            {
              "path": "/core/Scene#setActiveScene",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "setActiveScene"
            },
            {
              "path": "/core/Scene#searchItemsById",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "searchItemsById"
            },
            {
              "path": "/core/Scene#searchScenesByItemId",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "searchScenesByItemId"
            },
            {
              "path": "/core/Scene#searchItemsByName",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "searchItemsByName"
            },
            {
              "path": "/core/Scene#filterItems",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "filterItems"
            },
            {
              "path": "/core/Scene#filterScenesByItems",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "filterScenesByItems"
            },
            {
              "path": "/core/Scene#initializeScenes",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "initializeScenes"
            }
          ]
        },
        {
          "path": "/core/Transition",
          "partial": "partials/modules//core/Transition/index.html",
          "name": "Transition",
          "type": "Class",
          "pages": [
            {
              "path": "/core/Transition#toString",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "toString"
            },
            {
              "path": "/core/Transition#toTransitionKey",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "toTransitionKey"
            },
            {
              "path": "/core/Transition#NONE",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "NONE"
            },
            {
              "path": "/core/Transition#CLOCK",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "CLOCK"
            },
            {
              "path": "/core/Transition#COLLAPSE",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "COLLAPSE"
            },
            {
              "path": "/core/Transition#FADE",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "FADE"
            },
            {
              "path": "/core/Transition#FAN",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "FAN"
            },
            {
              "path": "/core/Transition#HOLE",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "HOLE"
            },
            {
              "path": "/core/Transition#MOVE_BOTTOM",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "MOVE_BOTTOM"
            },
            {
              "path": "/core/Transition#MOVE_LEFT",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "MOVE_LEFT"
            },
            {
              "path": "/core/Transition#MOVE_LEFT_RIGHT",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "MOVE_LEFT_RIGHT"
            },
            {
              "path": "/core/Transition#MOVE_RIGHT",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "MOVE_RIGHT"
            },
            {
              "path": "/core/Transition#MOVE_TOP",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "MOVE_TOP"
            },
            {
              "path": "/core/Transition#MOVE_TOP_BOTTOM",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "MOVE_TOP_BOTTOM"
            },
            {
              "path": "/core/Transition#WAVE",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "WAVE"
            }
          ]
        },
        {
          "path": "/core/Channel",
          "partial": "partials/modules//core/Channel/index.html",
          "name": "Channel",
          "type": "Class",
          "pages": [
            {
              "path": "/core/Channel#getName",
              "partial": "partials/modules//core/Channel/index.html",
              "name": "getName"
            },
            {
              "path": "/core/Channel#getStreamDrops",
              "partial": "partials/modules//core/Channel/index.html",
              "name": "getStreamDrops"
            },
            {
              "path": "/core/Channel#getStreamRenderedFrames",
              "partial": "partials/modules//core/Channel/index.html",
              "name": "getStreamRenderedFrames"
            },
            {
              "path": "/core/Channel#getStreamTime",
              "partial": "partials/modules//core/Channel/index.html",
              "name": "getStreamTime"
            },
            {
              "path": "/core/Channel#getActiveStreamChannels",
              "partial": "partials/modules//core/Channel/index.html",
              "name": "getActiveStreamChannels"
            }
          ]
        },
        {
          "path": "/core/Dll",
          "partial": "partials/modules//core/Dll/index.html",
          "name": "Dll",
          "type": "Class",
          "pages": [
            {
              "path": "/core/Dll#callFunction",
              "partial": "partials/modules//core/Dll/index.html",
              "name": "callFunction"
            }
          ]
        },
        {
          "path": "/core/Extension",
          "partial": "partials/modules//core/Extension/index.html",
          "name": "Extension",
          "type": "Class",
          "pages": [
            {
              "path": "/core/Extension#saveConfig",
              "partial": "partials/modules//core/Extension/index.html",
              "name": "saveConfig"
            },
            {
              "path": "/core/Extension#loadConfig",
              "partial": "partials/modules//core/Extension/index.html",
              "name": "loadConfig"
            },
            {
              "path": "/core/Extension#getInstance",
              "partial": "partials/modules//core/Extension/index.html",
              "name": "getInstance"
            }
          ]
        },
        {
          "path": "/core/CameraItem",
          "partial": "partials/modules//core/CameraItem/index.html",
          "name": "CameraItem",
          "type": "Class",
          "pages": [
            {
              "path": "/core/CameraItem#getDeviceId",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getDeviceId"
            },
            {
              "path": "/core/CameraItem#isKeepAspectRatio",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/CameraItem#isPositionLocked",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/CameraItem#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/CameraItem#getPosition",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/CameraItem#getRotateY",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/CameraItem#getRotateX",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/CameraItem#getRotateZ",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/CameraItem#setKeepAspectRatio",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/CameraItem#setPositionLocked",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/CameraItem#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/CameraItem#setPosition",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/CameraItem#setRotateY",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/CameraItem#setRotateX",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/CameraItem#setRotateZ",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/CameraItem#getTransparency",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/CameraItem#getBrightness",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/CameraItem#getContrast",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/CameraItem#getHue",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/CameraItem#getSaturation",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/CameraItem#getBorderColor",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/CameraItem#setTransparency",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/CameraItem#setBrightness",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/CameraItem#setContrast",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/CameraItem#setHue",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/CameraItem#setSaturation",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/CameraItem#setBorderColor",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/CameraItem#setColorOptionsPinned",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setColorOptionsPinned"
            },
            {
              "path": "/core/CameraItem#getColorOptionsPinned",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getColorOptionsPinned"
            },
            {
              "path": "/core/CameraItem#isChromaEnabled",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/CameraItem#setChromaEnabled",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/CameraItem#getKeyingType",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/CameraItem#setKeyingType",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/CameraItem#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/CameraItem#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/CameraItem#getChromaLegacyBrightness",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/CameraItem#setChromaLegacyBrightness",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/CameraItem#getChromaLegacySaturation",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/CameraItem#setChromaLegacySaturation",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/CameraItem#getChromaLegacyHue",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/CameraItem#setChromaLegacyHue",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/CameraItem#getChromaLegacyThreshold",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/CameraItem#setChromaLegacyThreshold",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/CameraItem#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/CameraItem#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/CameraItem#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/CameraItem#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/CameraItem#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/CameraItem#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/CameraItem#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/CameraItem#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/CameraItem#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/CameraItem#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/CameraItem#getChromaColorKeyExposure",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/CameraItem#setChromaColorKeyExposure",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/CameraItem#getChromaColorKeyColor",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/CameraItem#setChromaColorKeyColor",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/CameraItem#setKeyingOptionsPinned",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setKeyingOptionsPinned"
            },
            {
              "path": "/core/CameraItem#getKeyingOptionsPinned",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getKeyingOptionsPinned"
            },
            {
              "path": "/core/CameraItem#isVisible",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/CameraItem#setVisible",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/CameraItem#getTransition",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/CameraItem#setTransition",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/CameraItem#getTransitionTime",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/CameraItem#setTransitionTime",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setTransitionTime"
            }
          ]
        },
        {
          "path": "/core/GameItem",
          "partial": "partials/modules//core/GameItem/index.html",
          "name": "GameItem",
          "type": "Class",
          "pages": [
            {
              "path": "/core/GameItem#isSpecialOptimizationEnabled",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "isSpecialOptimizationEnabled"
            },
            {
              "path": "/core/GameItem#setSpecialOptimizationEnabled",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setSpecialOptimizationEnabled"
            },
            {
              "path": "/core/GameItem#isShowMouseEnabled",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "isShowMouseEnabled"
            },
            {
              "path": "/core/GameItem#setShowMouseEnabled",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setShowMouseEnabled"
            },
            {
              "path": "/core/GameItem#setOfflineImage",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setOfflineImage"
            },
            {
              "path": "/core/GameItem#getOfflineImage",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getOfflineImage"
            },
            {
              "path": "/core/GameItem#isKeepAspectRatio",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/GameItem#isPositionLocked",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/GameItem#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/GameItem#getPosition",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/GameItem#getRotateY",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/GameItem#getRotateX",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/GameItem#getRotateZ",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/GameItem#setKeepAspectRatio",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/GameItem#setPositionLocked",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/GameItem#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/GameItem#setPosition",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/GameItem#setRotateY",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/GameItem#setRotateX",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/GameItem#setRotateZ",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/GameItem#getTransparency",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/GameItem#getBrightness",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/GameItem#getContrast",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/GameItem#getHue",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/GameItem#getSaturation",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/GameItem#getBorderColor",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/GameItem#setTransparency",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/GameItem#setBrightness",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/GameItem#setContrast",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/GameItem#setHue",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/GameItem#setSaturation",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/GameItem#setBorderColor",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/GameItem#isChromaEnabled",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/GameItem#setChromaEnabled",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/GameItem#getKeyingType",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/GameItem#setKeyingType",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/GameItem#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/GameItem#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/GameItem#getChromaLegacyBrightness",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/GameItem#setChromaLegacyBrightness",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/GameItem#getChromaLegacySaturation",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/GameItem#setChromaLegacySaturation",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/GameItem#getChromaLegacyHue",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/GameItem#setChromaLegacyHue",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/GameItem#getChromaLegacyThreshold",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/GameItem#setChromaLegacyThreshold",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/GameItem#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/GameItem#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/GameItem#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/GameItem#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/GameItem#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/GameItem#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/GameItem#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/GameItem#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/GameItem#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/GameItem#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/GameItem#getChromaColorKeyExposure",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/GameItem#setChromaColorKeyExposure",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/GameItem#getChromaColorKeyColor",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/GameItem#setChromaColorKeyColor",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/GameItem#isVisible",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/GameItem#setVisible",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/GameItem#getTransition",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/GameItem#setTransition",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/GameItem#getTransitionTime",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/GameItem#setTransitionTime",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setTransitionTime"
            }
          ]
        },
        {
          "path": "/core/AudioItem",
          "partial": "partials/modules//core/AudioItem/index.html",
          "name": "AudioItem",
          "type": "Class",
          "pages": [
            {
              "path": "/core/AudioItem#isSilenceDetectionEnabled",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "isSilenceDetectionEnabled"
            },
            {
              "path": "/core/AudioItem#setSilenceDetectionEnabled",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "setSilenceDetectionEnabled"
            },
            {
              "path": "/core/AudioItem#getSilenceThreshold",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "getSilenceThreshold"
            },
            {
              "path": "/core/AudioItem#setSilenceThreshold",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "setSilenceThreshold"
            },
            {
              "path": "/core/AudioItem#getSilencePeriod",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "getSilencePeriod"
            },
            {
              "path": "/core/AudioItem#setSilencePeriod",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "setSilencePeriod"
            },
            {
              "path": "/core/AudioItem#getVolume",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/AudioItem#isMute",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/AudioItem#setVolume",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/AudioItem#setMute",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/AudioItem#getAudioOffset",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "getAudioOffset"
            },
            {
              "path": "/core/AudioItem#setAudioOffset",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "setAudioOffset"
            },
            {
              "path": "/core/AudioItem#isStreamOnlyEnabled",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "isStreamOnlyEnabled"
            },
            {
              "path": "/core/AudioItem#setStreamOnlyEnabled",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "setStreamOnlyEnabled"
            }
          ]
        },
        {
          "path": "/core/HTMLItem",
          "partial": "partials/modules//core/HTMLItem/index.html",
          "name": "HTMLItem",
          "type": "Class",
          "pages": [
            {
              "path": "/core/HTMLItem#getURL",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getURL"
            },
            {
              "path": "/core/HTMLItem#setURL",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setURL"
            },
            {
              "path": "/core/HTMLItem#getBrowserJS",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getBrowserJS"
            },
            {
              "path": "/core/HTMLItem#setBrowserJS",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setBrowserJS"
            },
            {
              "path": "/core/HTMLItem#isBrowserJSEnabled",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "isBrowserJSEnabled"
            },
            {
              "path": "/core/HTMLItem#enableBrowserJS",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "enableBrowserJS"
            },
            {
              "path": "/core/HTMLItem#getCustomCSS",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getCustomCSS"
            },
            {
              "path": "/core/HTMLItem#setCustomCSS",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setCustomCSS"
            },
            {
              "path": "/core/HTMLItem#isCustomCSSEnabled",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "isCustomCSSEnabled"
            },
            {
              "path": "/core/HTMLItem#enableCustomCSS",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "enableCustomCSS"
            },
            {
              "path": "/core/HTMLItem#isBrowserTransparent",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "isBrowserTransparent"
            },
            {
              "path": "/core/HTMLItem#enableBrowserTransparency",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "enableBrowserTransparency"
            },
            {
              "path": "/core/HTMLItem#getBrowserCustomSize",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getBrowserCustomSize"
            },
            {
              "path": "/core/HTMLItem#setBrowserCustomSize",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setBrowserCustomSize"
            },
            {
              "path": "/core/HTMLItem#isKeepAspectRatio",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/HTMLItem#isPositionLocked",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/HTMLItem#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/HTMLItem#getPosition",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/HTMLItem#getRotateY",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/HTMLItem#getRotateX",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/HTMLItem#getRotateZ",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/HTMLItem#setKeepAspectRatio",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/HTMLItem#setPositionLocked",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/HTMLItem#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/HTMLItem#setPosition",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/HTMLItem#setRotateY",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/HTMLItem#setRotateX",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/HTMLItem#setRotateZ",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/HTMLItem#getTransparency",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/HTMLItem#getBrightness",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/HTMLItem#getContrast",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/HTMLItem#getHue",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/HTMLItem#getSaturation",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/HTMLItem#getBorderColor",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/HTMLItem#setTransparency",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/HTMLItem#setBrightness",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/HTMLItem#setContrast",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/HTMLItem#setHue",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/HTMLItem#setSaturation",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/HTMLItem#setBorderColor",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/HTMLItem#isChromaEnabled",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/HTMLItem#setChromaEnabled",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/HTMLItem#getKeyingType",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/HTMLItem#setKeyingType",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/HTMLItem#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/HTMLItem#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/HTMLItem#getChromaLegacyBrightness",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/HTMLItem#setChromaLegacyBrightness",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/HTMLItem#getChromaLegacySaturation",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/HTMLItem#setChromaLegacySaturation",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/HTMLItem#getChromaLegacyHue",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/HTMLItem#setChromaLegacyHue",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/HTMLItem#getChromaLegacyThreshold",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/HTMLItem#setChromaLegacyThreshold",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/HTMLItem#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/HTMLItem#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/HTMLItem#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/HTMLItem#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/HTMLItem#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/HTMLItem#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/HTMLItem#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/HTMLItem#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/HTMLItem#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/HTMLItem#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/HTMLItem#getChromaColorKeyExposure",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/HTMLItem#setChromaColorKeyExposure",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/HTMLItem#getChromaColorKeyColor",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/HTMLItem#setChromaColorKeyColor",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/HTMLItem#isVisible",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/HTMLItem#setVisible",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/HTMLItem#getTransition",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/HTMLItem#setTransition",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/HTMLItem#getTransitionTime",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/HTMLItem#setTransitionTime",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "setTransitionTime"
            },
            {
              "path": "/core/HTMLItem#loadConfig",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "loadConfig"
            },
            {
              "path": "/core/HTMLItem#saveConfig",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "saveConfig"
            },
            {
              "path": "/core/HTMLItem#requestSaveConfig",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "requestSaveConfig"
            },
            {
              "path": "/core/HTMLItem#applyConfig",
              "partial": "partials/modules//core/HTMLItem/index.html",
              "name": "applyConfig"
            }
          ]
        },
        {
          "path": "/core/FlashItem",
          "partial": "partials/modules//core/FlashItem/index.html",
          "name": "FlashItem",
          "type": "Class",
          "pages": [
            {
              "path": "/core/FlashItem#getCustomResolution",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getCustomResolution"
            },
            {
              "path": "/core/FlashItem#setCustomResolution",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setCustomResolution"
            },
            {
              "path": "/core/FlashItem#isKeepAspectRatio",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/FlashItem#isPositionLocked",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/FlashItem#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/FlashItem#getPosition",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/FlashItem#getRotateY",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/FlashItem#getRotateX",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/FlashItem#getRotateZ",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/FlashItem#setKeepAspectRatio",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/FlashItem#setPositionLocked",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/FlashItem#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/FlashItem#setPosition",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/FlashItem#setRotateY",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/FlashItem#setRotateX",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/FlashItem#setRotateZ",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/FlashItem#getTransparency",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/FlashItem#getBrightness",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/FlashItem#getContrast",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/FlashItem#getHue",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/FlashItem#getSaturation",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/FlashItem#getBorderColor",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/FlashItem#setTransparency",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/FlashItem#setBrightness",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/FlashItem#setContrast",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/FlashItem#setHue",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/FlashItem#setSaturation",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/FlashItem#setBorderColor",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/FlashItem#isChromaEnabled",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/FlashItem#setChromaEnabled",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/FlashItem#getKeyingType",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/FlashItem#setKeyingType",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/FlashItem#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/FlashItem#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/FlashItem#getChromaLegacyBrightness",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/FlashItem#setChromaLegacyBrightness",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/FlashItem#getChromaLegacySaturation",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/FlashItem#setChromaLegacySaturation",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/FlashItem#getChromaLegacyHue",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/FlashItem#setChromaLegacyHue",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/FlashItem#getChromaLegacyThreshold",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/FlashItem#setChromaLegacyThreshold",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/FlashItem#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/FlashItem#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/FlashItem#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/FlashItem#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/FlashItem#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/FlashItem#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/FlashItem#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/FlashItem#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/FlashItem#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/FlashItem#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/FlashItem#getChromaColorKeyExposure",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/FlashItem#setChromaColorKeyExposure",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/FlashItem#getChromaColorKeyColor",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/FlashItem#setChromaColorKeyColor",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/FlashItem#isVisible",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/FlashItem#setVisible",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/FlashItem#getTransition",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/FlashItem#setTransition",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/FlashItem#getTransitionTime",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/FlashItem#setTransitionTime",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setTransitionTime"
            }
          ]
        },
        {
          "path": "/core/ScreenItem",
          "partial": "partials/modules//core/ScreenItem/index.html",
          "name": "ScreenItem",
          "type": "Class",
          "pages": [
            {
              "path": "/core/ScreenItem#getCaptureArea",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getCaptureArea"
            },
            {
              "path": "/core/ScreenItem#setCaptureArea",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setCaptureArea"
            },
            {
              "path": "/core/ScreenItem#isClientArea",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "isClientArea"
            },
            {
              "path": "/core/ScreenItem#setClientArea",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setClientArea"
            },
            {
              "path": "/core/ScreenItem#isStickToTitle",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "isStickToTitle"
            },
            {
              "path": "/core/ScreenItem#setStickToTitle",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setStickToTitle"
            },
            {
              "path": "/core/ScreenItem#isKeepAspectRatio",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/ScreenItem#isPositionLocked",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/ScreenItem#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/ScreenItem#getPosition",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/ScreenItem#getRotateY",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/ScreenItem#getRotateX",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/ScreenItem#getRotateZ",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/ScreenItem#setKeepAspectRatio",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/ScreenItem#setPositionLocked",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/ScreenItem#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/ScreenItem#setPosition",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/ScreenItem#setRotateY",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/ScreenItem#setRotateX",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/ScreenItem#setRotateZ",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/ScreenItem#getTransparency",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/ScreenItem#getBrightness",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/ScreenItem#getContrast",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/ScreenItem#getHue",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/ScreenItem#getSaturation",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/ScreenItem#getBorderColor",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/ScreenItem#setTransparency",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/ScreenItem#setBrightness",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/ScreenItem#setContrast",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/ScreenItem#setHue",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/ScreenItem#setSaturation",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/ScreenItem#setBorderColor",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/ScreenItem#isChromaEnabled",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/ScreenItem#setChromaEnabled",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/ScreenItem#getKeyingType",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/ScreenItem#setKeyingType",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/ScreenItem#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/ScreenItem#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/ScreenItem#getChromaLegacyBrightness",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/ScreenItem#setChromaLegacyBrightness",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/ScreenItem#getChromaLegacySaturation",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/ScreenItem#setChromaLegacySaturation",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/ScreenItem#getChromaLegacyHue",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/ScreenItem#setChromaLegacyHue",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/ScreenItem#getChromaLegacyThreshold",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/ScreenItem#setChromaLegacyThreshold",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/ScreenItem#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/ScreenItem#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/ScreenItem#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/ScreenItem#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/ScreenItem#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/ScreenItem#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/ScreenItem#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/ScreenItem#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/ScreenItem#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/ScreenItem#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/ScreenItem#getChromaColorKeyExposure",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/ScreenItem#setChromaColorKeyExposure",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/ScreenItem#getChromaColorKeyColor",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/ScreenItem#setChromaColorKeyColor",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/ScreenItem#isVisible",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/ScreenItem#setVisible",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/ScreenItem#getTransition",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/ScreenItem#setTransition",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/ScreenItem#getTransitionTime",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/ScreenItem#setTransitionTime",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setTransitionTime"
            }
          ]
        },
        {
          "path": "/core/ImageItem",
          "partial": "partials/modules//core/ImageItem/index.html",
          "name": "ImageItem",
          "type": "Class",
          "pages": [
            {
              "path": "/core/ImageItem#isKeepAspectRatio",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/ImageItem#isPositionLocked",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/ImageItem#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/ImageItem#getPosition",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/ImageItem#getRotateY",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/ImageItem#getRotateX",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/ImageItem#getRotateZ",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/ImageItem#setKeepAspectRatio",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/ImageItem#setPositionLocked",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/ImageItem#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/ImageItem#setPosition",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/ImageItem#setRotateY",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/ImageItem#setRotateX",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/ImageItem#setRotateZ",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/ImageItem#getTransparency",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/ImageItem#getBrightness",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/ImageItem#getContrast",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/ImageItem#getHue",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/ImageItem#getSaturation",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/ImageItem#getBorderColor",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/ImageItem#setTransparency",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/ImageItem#setBrightness",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/ImageItem#setContrast",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/ImageItem#setHue",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/ImageItem#setSaturation",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/ImageItem#setBorderColor",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/ImageItem#isChromaEnabled",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/ImageItem#setChromaEnabled",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/ImageItem#getKeyingType",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/ImageItem#setKeyingType",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/ImageItem#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/ImageItem#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/ImageItem#getChromaLegacyBrightness",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/ImageItem#setChromaLegacyBrightness",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/ImageItem#getChromaLegacySaturation",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/ImageItem#setChromaLegacySaturation",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/ImageItem#getChromaLegacyHue",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/ImageItem#setChromaLegacyHue",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/ImageItem#getChromaLegacyThreshold",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/ImageItem#setChromaLegacyThreshold",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/ImageItem#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/ImageItem#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/ImageItem#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/ImageItem#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/ImageItem#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/ImageItem#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/ImageItem#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/ImageItem#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/ImageItem#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/ImageItem#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/ImageItem#getChromaColorKeyExposure",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/ImageItem#setChromaColorKeyExposure",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/ImageItem#getChromaColorKeyColor",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/ImageItem#setChromaColorKeyColor",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/ImageItem#isVisible",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/ImageItem#setVisible",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/ImageItem#getTransition",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/ImageItem#setTransition",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/ImageItem#getTransitionTime",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/ImageItem#setTransitionTime",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setTransitionTime"
            }
          ]
        },
        {
          "path": "/core/MediaItem",
          "partial": "partials/modules//core/MediaItem/index.html",
          "name": "MediaItem",
          "type": "Class",
          "pages": [
            {
              "path": "/core/MediaItem#isKeepAspectRatio",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/MediaItem#isPositionLocked",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/MediaItem#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/MediaItem#getPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/MediaItem#getRotateY",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/MediaItem#getRotateX",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/MediaItem#getRotateZ",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/MediaItem#setKeepAspectRatio",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/MediaItem#setPositionLocked",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/MediaItem#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/MediaItem#setPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/MediaItem#setRotateY",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/MediaItem#setRotateX",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/MediaItem#setRotateZ",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/MediaItem#getTransparency",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/MediaItem#getBrightness",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/MediaItem#getContrast",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/MediaItem#getHue",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/MediaItem#getSaturation",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/MediaItem#getBorderColor",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/MediaItem#setTransparency",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/MediaItem#setBrightness",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/MediaItem#setContrast",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/MediaItem#setHue",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/MediaItem#setSaturation",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/MediaItem#setBorderColor",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/MediaItem#isChromaEnabled",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/MediaItem#setChromaEnabled",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/MediaItem#getKeyingType",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/MediaItem#setKeyingType",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/MediaItem#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/MediaItem#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/MediaItem#getChromaLegacyBrightness",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/MediaItem#setChromaLegacyBrightness",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/MediaItem#getChromaLegacySaturation",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/MediaItem#setChromaLegacySaturation",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/MediaItem#getChromaLegacyHue",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/MediaItem#setChromaLegacyHue",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/MediaItem#getChromaLegacyThreshold",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/MediaItem#setChromaLegacyThreshold",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/MediaItem#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/MediaItem#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/MediaItem#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/MediaItem#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/MediaItem#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/MediaItem#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/MediaItem#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/MediaItem#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/MediaItem#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/MediaItem#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/MediaItem#getChromaColorKeyExposure",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/MediaItem#setChromaColorKeyExposure",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/MediaItem#getChromaColorKeyColor",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/MediaItem#setChromaColorKeyColor",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/MediaItem#isVisible",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/MediaItem#setVisible",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/MediaItem#getTransition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/MediaItem#setTransition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/MediaItem#getTransitionTime",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/MediaItem#setTransitionTime",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setTransitionTime"
            }
          ]
        }
      ]
    },
    {
      "path": "/system",
      "partial": "partials/modules/system/index.html",
      "name": "System",
      "type": "Module",
      "pages": [
        {
          "path": "/system/AudioDeviceDataflow",
          "partial": "partials/modules//system/AudioDeviceDataflow/index.html",
          "name": "AudioDeviceDataflow",
          "type": "Enum",
          "pages": [
            {
              "path": "/system/AudioDeviceDataflow#RENDER",
              "partial": "partials/modules//system/AudioDeviceDataflow/index.html",
              "name": "RENDER"
            },
            {
              "path": "/system/AudioDeviceDataflow#CAPTURE",
              "partial": "partials/modules//system/AudioDeviceDataflow/index.html",
              "name": "CAPTURE"
            },
            {
              "path": "/system/AudioDeviceDataflow#ALL",
              "partial": "partials/modules//system/AudioDeviceDataflow/index.html",
              "name": "ALL"
            }
          ]
        },
        {
          "path": "/system/AudioDeviceState",
          "partial": "partials/modules//system/AudioDeviceState/index.html",
          "name": "AudioDeviceState",
          "type": "Enum",
          "pages": [
            {
              "path": "/system/AudioDeviceState#ACTIVE",
              "partial": "partials/modules//system/AudioDeviceState/index.html",
              "name": "ACTIVE"
            },
            {
              "path": "/system/AudioDeviceState#DISABLED",
              "partial": "partials/modules//system/AudioDeviceState/index.html",
              "name": "DISABLED"
            },
            {
              "path": "/system/AudioDeviceState#UNPLUGGED",
              "partial": "partials/modules//system/AudioDeviceState/index.html",
              "name": "UNPLUGGED"
            },
            {
              "path": "/system/AudioDeviceState#NOTPRESENT",
              "partial": "partials/modules//system/AudioDeviceState/index.html",
              "name": "NOTPRESENT"
            },
            {
              "path": "/system/AudioDeviceState#ALL",
              "partial": "partials/modules//system/AudioDeviceState/index.html",
              "name": "ALL"
            }
          ]
        },
        {
          "path": "/system/System",
          "partial": "partials/modules//system/System/index.html",
          "name": "System",
          "type": "Class",
          "pages": [
            {
              "path": "/system/System#getAudioDevices",
              "partial": "partials/modules//system/System/index.html",
              "name": "getAudioDevices"
            },
            {
              "path": "/system/System#getCameraDevices",
              "partial": "partials/modules//system/System/index.html",
              "name": "getCameraDevices"
            },
            {
              "path": "/system/System#getGames",
              "partial": "partials/modules//system/System/index.html",
              "name": "getGames"
            },
            {
              "path": "/system/System#getMicrophones",
              "partial": "partials/modules//system/System/index.html",
              "name": "getMicrophones"
            },
            {
              "path": "/system/System#getFonts",
              "partial": "partials/modules//system/System/index.html",
              "name": "getFonts"
            },
            {
              "path": "/system/System#getCursorPosition",
              "partial": "partials/modules//system/System/index.html",
              "name": "getCursorPosition"
            },
            {
              "path": "/system/System#setCursorPosition",
              "partial": "partials/modules//system/System/index.html",
              "name": "setCursorPosition"
            }
          ]
        },
        {
          "path": "/system/AudioDevice",
          "partial": "partials/modules//system/AudioDevice/index.html",
          "name": "AudioDevice",
          "type": "Class",
          "pages": [
            {
              "path": "/system/AudioDevice#getId",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "getId"
            },
            {
              "path": "/system/AudioDevice#getName",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "getName"
            },
            {
              "path": "/system/AudioDevice#getDataFlow",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "getDataFlow"
            },
            {
              "path": "/system/AudioDevice#isDefaultDevice",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "isDefaultDevice"
            },
            {
              "path": "/system/AudioDevice#getLevel",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "getLevel"
            },
            {
              "path": "/system/AudioDevice#setLevel",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "setLevel"
            },
            {
              "path": "/system/AudioDevice#isEnabled",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "isEnabled"
            },
            {
              "path": "/system/AudioDevice#setEnabled",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "setEnabled"
            },
            {
              "path": "/system/AudioDevice#getSystemLevel",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "getSystemLevel"
            },
            {
              "path": "/system/AudioDevice#setSystemLevel",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "setSystemLevel"
            },
            {
              "path": "/system/AudioDevice#getSystemEnabled",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "getSystemEnabled"
            },
            {
              "path": "/system/AudioDevice#setSystemEnabled",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "setSystemEnabled"
            },
            {
              "path": "/system/AudioDevice#getDelay",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "getDelay"
            },
            {
              "path": "/system/AudioDevice#setDelay",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "setDelay"
            },
            {
              "path": "/system/AudioDevice#toString",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "toString"
            },
            {
              "path": "/system/AudioDevice#STATE_ACTIVE",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "STATE_ACTIVE"
            },
            {
              "path": "/system/AudioDevice#DATAFLOW_RENDER",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "DATAFLOW_RENDER"
            },
            {
              "path": "/system/AudioDevice#DATAFLOW_CAPTURE",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "DATAFLOW_CAPTURE"
            },
            {
              "path": "/system/AudioDevice#SYSTEM_LEVEL_MUTE",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "SYSTEM_LEVEL_MUTE"
            },
            {
              "path": "/system/AudioDevice#SYSTEM_LEVEL_ENABLE",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "SYSTEM_LEVEL_ENABLE"
            },
            {
              "path": "/system/AudioDevice#SYSTEM_MUTE_CHANGE_NOT_ALLOWED",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "SYSTEM_MUTE_CHANGE_NOT_ALLOWED"
            },
            {
              "path": "/system/AudioDevice#parse",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "parse"
            }
          ]
        },
        {
          "path": "/system/CameraDevice",
          "partial": "partials/modules//system/CameraDevice/index.html",
          "name": "CameraDevice",
          "type": "Class",
          "pages": [
            {
              "path": "/system/CameraDevice#getId",
              "partial": "partials/modules//system/CameraDevice/index.html",
              "name": "getId"
            },
            {
              "path": "/system/CameraDevice#getName",
              "partial": "partials/modules//system/CameraDevice/index.html",
              "name": "getName"
            },
            {
              "path": "/system/CameraDevice#toXML",
              "partial": "partials/modules//system/CameraDevice/index.html",
              "name": "toXML"
            },
            {
              "path": "/system/CameraDevice#addToScene",
              "partial": "partials/modules//system/CameraDevice/index.html",
              "name": "addToScene"
            },
            {
              "path": "/system/CameraDevice#parse",
              "partial": "partials/modules//system/CameraDevice/index.html",
              "name": "parse"
            }
          ]
        },
        {
          "path": "/system/Game",
          "partial": "partials/modules//system/Game/index.html",
          "name": "Game",
          "type": "Class",
          "pages": [
            {
              "path": "/system/Game#getPid",
              "partial": "partials/modules//system/Game/index.html",
              "name": "getPid"
            },
            {
              "path": "/system/Game#getHandle",
              "partial": "partials/modules//system/Game/index.html",
              "name": "getHandle"
            },
            {
              "path": "/system/Game#getWindowHandle",
              "partial": "partials/modules//system/Game/index.html",
              "name": "getWindowHandle"
            },
            {
              "path": "/system/Game#getGapiType",
              "partial": "partials/modules//system/Game/index.html",
              "name": "getGapiType"
            },
            {
              "path": "/system/Game#getResolution",
              "partial": "partials/modules//system/Game/index.html",
              "name": "getResolution"
            },
            {
              "path": "/system/Game#isFullscreen",
              "partial": "partials/modules//system/Game/index.html",
              "name": "isFullscreen"
            },
            {
              "path": "/system/Game#getWindowName",
              "partial": "partials/modules//system/Game/index.html",
              "name": "getWindowName"
            },
            {
              "path": "/system/Game#getLastFrameTimestamp",
              "partial": "partials/modules//system/Game/index.html",
              "name": "getLastFrameTimestamp"
            },
            {
              "path": "/system/Game#getFpsRender",
              "partial": "partials/modules//system/Game/index.html",
              "name": "getFpsRender"
            },
            {
              "path": "/system/Game#getFpsCapture",
              "partial": "partials/modules//system/Game/index.html",
              "name": "getFpsCapture"
            },
            {
              "path": "/system/Game#getImageName",
              "partial": "partials/modules//system/Game/index.html",
              "name": "getImageName"
            },
            {
              "path": "/system/Game#getReplace",
              "partial": "partials/modules//system/Game/index.html",
              "name": "getReplace"
            },
            {
              "path": "/system/Game#toXML",
              "partial": "partials/modules//system/Game/index.html",
              "name": "toXML"
            },
            {
              "path": "/system/Game#addToScene",
              "partial": "partials/modules//system/Game/index.html",
              "name": "addToScene"
            },
            {
              "path": "/system/Game#parse",
              "partial": "partials/modules//system/Game/index.html",
              "name": "parse"
            }
          ]
        },
        {
          "path": "/system/MicrophoneDevice",
          "partial": "partials/modules//system/MicrophoneDevice/index.html",
          "name": "MicrophoneDevice",
          "type": "Class",
          "pages": [
            {
              "path": "/system/MicrophoneDevice#toXML",
              "partial": "partials/modules//system/MicrophoneDevice/index.html",
              "name": "toXML"
            },
            {
              "path": "/system/MicrophoneDevice#addToScene",
              "partial": "partials/modules//system/MicrophoneDevice/index.html",
              "name": "addToScene"
            },
            {
              "path": "/system/MicrophoneDevice#parse",
              "partial": "partials/modules//system/MicrophoneDevice/index.html",
              "name": "parse"
            }
          ]
        },
        {
          "path": "/system/Url",
          "partial": "partials/modules//system/Url/index.html",
          "name": "Url",
          "type": "Class",
          "pages": [
            {
              "path": "/system/Url#addToScene",
              "partial": "partials/modules//system/Url/index.html",
              "name": "addToScene"
            }
          ]
        }
      ]
    },
    {
      "path": "/util",
      "partial": "partials/modules/util/index.html",
      "name": "Util",
      "type": "Module",
      "pages": [
        {
          "path": "/util/Color",
          "partial": "partials/modules//util/Color/index.html",
          "name": "Color",
          "type": "Class",
          "pages": [
            {
              "path": "/util/Color#getRgb",
              "partial": "partials/modules//util/Color/index.html",
              "name": "getRgb"
            },
            {
              "path": "/util/Color#setRgb",
              "partial": "partials/modules//util/Color/index.html",
              "name": "setRgb"
            },
            {
              "path": "/util/Color#getBgr",
              "partial": "partials/modules//util/Color/index.html",
              "name": "getBgr"
            },
            {
              "path": "/util/Color#setBgr",
              "partial": "partials/modules//util/Color/index.html",
              "name": "setBgr"
            },
            {
              "path": "/util/Color#getIrgb",
              "partial": "partials/modules//util/Color/index.html",
              "name": "getIrgb"
            },
            {
              "path": "/util/Color#setIrgb",
              "partial": "partials/modules//util/Color/index.html",
              "name": "setIrgb"
            },
            {
              "path": "/util/Color#getIbgr",
              "partial": "partials/modules//util/Color/index.html",
              "name": "getIbgr"
            },
            {
              "path": "/util/Color#setIbgr",
              "partial": "partials/modules//util/Color/index.html",
              "name": "setIbgr"
            },
            {
              "path": "/util/Color#fromRGBString",
              "partial": "partials/modules//util/Color/index.html",
              "name": "fromRGBString"
            },
            {
              "path": "/util/Color#fromRGBInt",
              "partial": "partials/modules//util/Color/index.html",
              "name": "fromRGBInt"
            },
            {
              "path": "/util/Color#fromBGRString",
              "partial": "partials/modules//util/Color/index.html",
              "name": "fromBGRString"
            },
            {
              "path": "/util/Color#fromBGRInt",
              "partial": "partials/modules//util/Color/index.html",
              "name": "fromBGRInt"
            }
          ]
        },
        {
          "path": "/util/Rectangle",
          "partial": "partials/modules//util/Rectangle/index.html",
          "name": "Rectangle",
          "type": "Class",
          "pages": [
            {
              "path": "/util/Rectangle#getTop",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "getTop"
            },
            {
              "path": "/util/Rectangle#setTop",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "setTop"
            },
            {
              "path": "/util/Rectangle#getLeft",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "getLeft"
            },
            {
              "path": "/util/Rectangle#setLeft",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "setLeft"
            },
            {
              "path": "/util/Rectangle#getRight",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "getRight"
            },
            {
              "path": "/util/Rectangle#setRight",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "setRight"
            },
            {
              "path": "/util/Rectangle#getBottom",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "getBottom"
            },
            {
              "path": "/util/Rectangle#setBottom",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "setBottom"
            },
            {
              "path": "/util/Rectangle#getWidth",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "getWidth"
            },
            {
              "path": "/util/Rectangle#setWidth",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "setWidth"
            },
            {
              "path": "/util/Rectangle#getHeight",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "getHeight"
            },
            {
              "path": "/util/Rectangle#setHeight",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "setHeight"
            },
            {
              "path": "/util/Rectangle#toDimensionString",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "toDimensionString"
            },
            {
              "path": "/util/Rectangle#toCoordinateString",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "toCoordinateString"
            },
            {
              "path": "/util/Rectangle#toString",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "toString"
            },
            {
              "path": "/util/Rectangle#fromDimensions",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "fromDimensions"
            },
            {
              "path": "/util/Rectangle#fromCoordinates",
              "partial": "partials/modules//util/Rectangle/index.html",
              "name": "fromCoordinates"
            }
          ]
        },
        {
          "path": "/util/IO",
          "partial": "partials/modules//util/IO/index.html",
          "name": "IO",
          "type": "Class",
          "pages": [
            {
              "path": "/util/IO#getFileContent",
              "partial": "partials/modules//util/IO/index.html",
              "name": "getFileContent"
            },
            {
              "path": "/util/IO#getWebContent",
              "partial": "partials/modules//util/IO/index.html",
              "name": "getWebContent"
            },
            {
              "path": "/util/IO#openUrl",
              "partial": "partials/modules//util/IO/index.html",
              "name": "openUrl"
            },
            {
              "path": "/util/IO#openFileDialog",
              "partial": "partials/modules//util/IO/index.html",
              "name": "openFileDialog"
            }
          ]
        },
        {
          "path": "/util/EventEmitter",
          "partial": "partials/modules//util/EventEmitter/index.html",
          "name": "EventEmitter",
          "type": "Class",
          "pages": [
            {
              "path": "/util/EventEmitter#on",
              "partial": "partials/modules//util/EventEmitter/index.html",
              "name": "on"
            },
            {
              "path": "/util/EventEmitter#emit",
              "partial": "partials/modules//util/EventEmitter/index.html",
              "name": "emit"
            }
          ]
        }
      ]
    },
    {
      "path": "/window",
      "partial": "partials/modules/window/index.html",
      "name": "Window",
      "type": "Module",
      "pages": [
        {
          "path": "/window/SourceConfigWindow",
          "partial": "partials/modules//window/SourceConfigWindow/index.html",
          "name": "SourceConfigWindow",
          "type": "Class",
          "pages": [
            {
              "path": "/window/SourceConfigWindow#useFullWindow",
              "partial": "partials/modules//window/SourceConfigWindow/index.html",
              "name": "useFullWindow"
            },
            {
              "path": "/window/SourceConfigWindow#useTabbedWindow",
              "partial": "partials/modules//window/SourceConfigWindow/index.html",
              "name": "useTabbedWindow"
            },
            {
              "path": "/window/SourceConfigWindow#resizeConfig",
              "partial": "partials/modules//window/SourceConfigWindow/index.html",
              "name": "resizeConfig"
            },
            {
              "path": "/window/SourceConfigWindow#requestDialogTitleChange",
              "partial": "partials/modules//window/SourceConfigWindow/index.html",
              "name": "requestDialogTitleChange"
            },
            {
              "path": "/window/SourceConfigWindow#closeConfig",
              "partial": "partials/modules//window/SourceConfigWindow/index.html",
              "name": "closeConfig"
            },
            {
              "path": "/window/SourceConfigWindow#getInstance",
              "partial": "partials/modules//window/SourceConfigWindow/index.html",
              "name": "getInstance"
            }
          ]
        },
        {
          "path": "/window/SourcePluginWindow",
          "partial": "partials/modules//window/SourcePluginWindow/index.html",
          "name": "SourcePluginWindow",
          "type": "Class",
          "pages": [
            {
              "path": "/window/SourcePluginWindow#getInstance",
              "partial": "partials/modules//window/SourcePluginWindow/index.html",
              "name": "getInstance"
            }
          ]
        },
        {
          "path": "/window/ExtensionWindow",
          "partial": "partials/modules//window/ExtensionWindow/index.html",
          "name": "ExtensionWindow",
          "type": "Class",
          "pages": [
            {
              "path": "/window/ExtensionWindow#resize",
              "partial": "partials/modules//window/ExtensionWindow/index.html",
              "name": "resize"
            },
            {
              "path": "/window/ExtensionWindow#getInstance",
              "partial": "partials/modules//window/ExtensionWindow/index.html",
              "name": "getInstance"
            }
          ]
        },
        {
          "path": "/window/Dialog",
          "partial": "partials/modules//window/Dialog/index.html",
          "name": "Dialog",
          "type": "Class",
          "pages": [
            {
              "path": "/window/Dialog#setSize",
              "partial": "partials/modules//window/Dialog/index.html",
              "name": "setSize"
            },
            {
              "path": "/window/Dialog#setTitle",
              "partial": "partials/modules//window/Dialog/index.html",
              "name": "setTitle"
            },
            {
              "path": "/window/Dialog#setBorderOptions",
              "partial": "partials/modules//window/Dialog/index.html",
              "name": "setBorderOptions"
            },
            {
              "path": "/window/Dialog#setButtons",
              "partial": "partials/modules//window/Dialog/index.html",
              "name": "setButtons"
            },
            {
              "path": "/window/Dialog#show",
              "partial": "partials/modules//window/Dialog/index.html",
              "name": "show"
            },
            {
              "path": "/window/Dialog#getResult",
              "partial": "partials/modules//window/Dialog/index.html",
              "name": "getResult"
            },
            {
              "path": "/window/Dialog#close",
              "partial": "partials/modules//window/Dialog/index.html",
              "name": "close"
            },
            {
              "path": "/window/Dialog#createDialog",
              "partial": "partials/modules//window/Dialog/index.html",
              "name": "createDialog"
            },
            {
              "path": "/window/Dialog#createAutoDialog",
              "partial": "partials/modules//window/Dialog/index.html",
              "name": "createAutoDialog"
            },
            {
              "path": "/window/Dialog#return",
              "partial": "partials/modules//window/Dialog/index.html",
              "name": "return"
            }
          ]
        }
      ]
    }
  ]
});