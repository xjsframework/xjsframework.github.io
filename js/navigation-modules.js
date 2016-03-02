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
          "path": "/core/Source",
          "partial": "partials/modules//core/Source/index.html",
          "name": "Source",
          "type": "Class",
          "pages": [
            {
              "path": "/core/Source#setName",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setName"
            },
            {
              "path": "/core/Source#getName",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getName"
            },
            {
              "path": "/core/Source#setCustomName",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setCustomName"
            },
            {
              "path": "/core/Source#getCustomName",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getCustomName"
            },
            {
              "path": "/core/Source#getValue",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getValue"
            },
            {
              "path": "/core/Source#setValue",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setValue"
            },
            {
              "path": "/core/Source#getKeepLoaded",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getKeepLoaded"
            },
            {
              "path": "/core/Source#setKeepLoaded",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setKeepLoaded"
            },
            {
              "path": "/core/Source#getType",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getType"
            },
            {
              "path": "/core/Source#getId",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getId"
            },
            {
              "path": "/core/Source#getSceneId",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getSceneId"
            },
            {
              "path": "/core/Source#getView",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getView"
            },
            {
              "path": "/core/Source#toXML",
              "partial": "partials/modules//core/Source/index.html",
              "name": "toXML"
            },
            {
              "path": "/core/Source#refresh",
              "partial": "partials/modules//core/Source/index.html",
              "name": "refresh"
            },
            {
              "path": "/core/Source#isKeepAspectRatio",
              "partial": "partials/modules//core/Source/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/Source#isPositionLocked",
              "partial": "partials/modules//core/Source/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/Source#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/Source/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/Source#getCanvasRotate",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/Source#getCropping",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/Source#getEnhancedRotate",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getEnhancedRotate"
            },
            {
              "path": "/core/Source#getPosition",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/Source#getRotateY",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/Source#getRotateX",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/Source#getRotateZ",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/Source#setCanvasRotate",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/Source#setCropping",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/Source#setCroppingEnhanced",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/Source#setEnhancedRotate",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setEnhancedRotate"
            },
            {
              "path": "/core/Source#setKeepAspectRatio",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/Source#setPositionLocked",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/Source#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/Source#setPosition",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/Source#setRotateY",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/Source#setRotateX",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/Source#setRotateZ",
              "partial": "partials/modules//core/Source/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/Source#getCurrentSource",
              "partial": "partials/modules//core/Source/index.html",
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
          "path": "/core/ActionAfterPlayback",
          "partial": "partials/modules//core/ActionAfterPlayback/index.html",
          "name": "ActionAfterPlayback",
          "type": "Enum",
          "pages": [
            {
              "path": "/core/ActionAfterPlayback#NONE",
              "partial": "partials/modules//core/ActionAfterPlayback/index.html",
              "name": "NONE"
            },
            {
              "path": "/core/ActionAfterPlayback#REWIND",
              "partial": "partials/modules//core/ActionAfterPlayback/index.html",
              "name": "REWIND"
            },
            {
              "path": "/core/ActionAfterPlayback#LOOP",
              "partial": "partials/modules//core/ActionAfterPlayback/index.html",
              "name": "LOOP"
            },
            {
              "path": "/core/ActionAfterPlayback#TRANSPARENT",
              "partial": "partials/modules//core/ActionAfterPlayback/index.html",
              "name": "TRANSPARENT"
            },
            {
              "path": "/core/ActionAfterPlayback#HIDE",
              "partial": "partials/modules//core/ActionAfterPlayback/index.html",
              "name": "HIDE"
            }
          ]
        },
        {
          "path": "/core/CuePoint",
          "partial": "partials/modules//core/CuePoint/index.html",
          "name": "CuePoint",
          "type": "Class",
          "pages": [
            {
              "path": "/core/CuePoint#toString",
              "partial": "partials/modules//core/CuePoint/index.html",
              "name": "toString"
            },
            {
              "path": "/core/CuePoint#setTime",
              "partial": "partials/modules//core/CuePoint/index.html",
              "name": "setTime"
            },
            {
              "path": "/core/CuePoint#setAction",
              "partial": "partials/modules//core/CuePoint/index.html",
              "name": "setAction"
            },
            {
              "path": "/core/CuePoint#getTime",
              "partial": "partials/modules//core/CuePoint/index.html",
              "name": "getTime"
            },
            {
              "path": "/core/CuePoint#getAction",
              "partial": "partials/modules//core/CuePoint/index.html",
              "name": "getAction"
            },
            {
              "path": "/core/CuePoint#PAUSE",
              "partial": "partials/modules//core/CuePoint/index.html",
              "name": "PAUSE"
            },
            {
              "path": "/core/CuePoint#RESUME",
              "partial": "partials/modules//core/CuePoint/index.html",
              "name": "RESUME"
            },
            {
              "path": "/core/CuePoint#CUT",
              "partial": "partials/modules//core/CuePoint/index.html",
              "name": "CUT"
            }
          ]
        },
        {
          "path": "/core/IItemChroma",
          "partial": "partials/modules//core/IItemChroma/index.html",
          "name": "IItemChroma",
          "type": "Interface",
          "pages": [
            {
              "path": "/core/IItemChroma#isChromaEnabled",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/IItemChroma#setChromaEnabled",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/IItemChroma#getKeyingType",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/IItemChroma#setKeyingType",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/IItemChroma#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/IItemChroma#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/IItemChroma#getChromaLegacyBrightness",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/IItemChroma#setChromaLegacyBrightness",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/IItemChroma#getChromaLegacySaturation",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/IItemChroma#setChromaLegacySaturation",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/IItemChroma#getChromaLegacyHue",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/IItemChroma#setChromaLegacyHue",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/IItemChroma#getChromaLegacyThreshold",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/IItemChroma#setChromaLegacyThreshold",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/IItemChroma#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/IItemChroma#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/IItemChroma#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/IItemChroma#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/IItemChroma#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/IItemChroma#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/IItemChroma#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/IItemChroma#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/IItemChroma#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/IItemChroma#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/IItemChroma#getChromaColorKeyExposure",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/IItemChroma#setChromaColorKeyExposure",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/IItemChroma#getChromaColorKeyColor",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/IItemChroma#setChromaColorKeyColor",
              "partial": "partials/modules//core/IItemChroma/index.html",
              "name": "setChromaColorKeyColor"
            }
          ]
        },
        {
          "path": "/core/IItemColor",
          "partial": "partials/modules//core/IItemColor/index.html",
          "name": "IItemColor",
          "type": "Interface",
          "pages": [
            {
              "path": "/core/IItemColor#getTransparency",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/IItemColor#setTransparency",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/IItemColor#getBrightness",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/IItemColor#setBrightness",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/IItemColor#getContrast",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/IItemColor#setContrast",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/IItemColor#getHue",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/IItemColor#setHue",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/IItemColor#getSaturation",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/IItemColor#setSaturation",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/IItemColor#getBorderColor",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/IItemColor#setBorderColor",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/IItemColor#isFullDynamicColorRange",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "isFullDynamicColorRange"
            },
            {
              "path": "/core/IItemColor#setFullDynamicColorRange",
              "partial": "partials/modules//core/IItemColor/index.html",
              "name": "setFullDynamicColorRange"
            }
          ]
        },
        {
          "path": "/core/IItemLayout",
          "partial": "partials/modules//core/IItemLayout/index.html",
          "name": "IItemLayout",
          "type": "Interface",
          "pages": [
            {
              "path": "/core/IItemLayout#isKeepAspectRatio",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/IItemLayout#setKeepAspectRatio",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/IItemLayout#isPositionLocked",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/IItemLayout#setPositionLocked",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/IItemLayout#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/IItemLayout#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/IItemLayout#getPosition",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/IItemLayout#setPosition",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/IItemLayout#getRotateY",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/IItemLayout#setRotateY",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/IItemLayout#getRotateX",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/IItemLayout#setRotateX",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/IItemLayout#getRotateZ",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/IItemLayout#setRotateZ",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/IItemLayout#getCropping",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/IItemLayout#setCropping",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/IItemLayout#getCanvasRotate",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/IItemLayout#setCanvasRotate",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/IItemLayout#getEnhancedRotate",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "getEnhancedRotate"
            },
            {
              "path": "/core/IItemLayout#setEnhancedRotate",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "setEnhancedRotate"
            },
            {
              "path": "/core/IItemLayout#setCroppingEnhanced",
              "partial": "partials/modules//core/IItemLayout/index.html",
              "name": "setCroppingEnhanced"
            }
          ]
        },
        {
          "path": "/core/IItemTransition",
          "partial": "partials/modules//core/IItemTransition/index.html",
          "name": "IItemTransition",
          "type": "Interface",
          "pages": [
            {
              "path": "/core/IItemTransition#isVisible",
              "partial": "partials/modules//core/IItemTransition/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/IItemTransition#setVisible",
              "partial": "partials/modules//core/IItemTransition/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/IItemTransition#getTransition",
              "partial": "partials/modules//core/IItemTransition/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/IItemTransition#setTransition",
              "partial": "partials/modules//core/IItemTransition/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/IItemTransition#getTransitionTime",
              "partial": "partials/modules//core/IItemTransition/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/IItemTransition#setTransitionTime",
              "partial": "partials/modules//core/IItemTransition/index.html",
              "name": "setTransitionTime"
            }
          ]
        },
        {
          "path": "/core/IItemAudio",
          "partial": "partials/modules//core/IItemAudio/index.html",
          "name": "IItemAudio",
          "type": "Interface",
          "pages": [
            {
              "path": "/core/IItemAudio#getVolume",
              "partial": "partials/modules//core/IItemAudio/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/IItemAudio#setVolume",
              "partial": "partials/modules//core/IItemAudio/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/IItemAudio#isMute",
              "partial": "partials/modules//core/IItemAudio/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/IItemAudio#setMute",
              "partial": "partials/modules//core/IItemAudio/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/IItemAudio#isStreamOnlyAudio",
              "partial": "partials/modules//core/IItemAudio/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/IItemAudio#setStreamOnlyAudio",
              "partial": "partials/modules//core/IItemAudio/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/IItemAudio#isAudioAvailable",
              "partial": "partials/modules//core/IItemAudio/index.html",
              "name": "isAudioAvailable"
            }
          ]
        },
        {
          "path": "/core/IItemConfigurable",
          "partial": "partials/modules//core/IItemConfigurable/index.html",
          "name": "IItemConfigurable",
          "type": "Interface",
          "pages": [
            {
              "path": "/core/IItemConfigurable#loadConfig",
              "partial": "partials/modules//core/IItemConfigurable/index.html",
              "name": "loadConfig"
            },
            {
              "path": "/core/IItemConfigurable#saveConfig",
              "partial": "partials/modules//core/IItemConfigurable/index.html",
              "name": "saveConfig"
            },
            {
              "path": "/core/IItemConfigurable#requestSaveConfig",
              "partial": "partials/modules//core/IItemConfigurable/index.html",
              "name": "requestSaveConfig"
            },
            {
              "path": "/core/IItemConfigurable#applyConfig",
              "partial": "partials/modules//core/IItemConfigurable/index.html",
              "name": "applyConfig"
            }
          ]
        },
        {
          "path": "/core/IItemPlayback",
          "partial": "partials/modules//core/IItemPlayback/index.html",
          "name": "IItemPlayback",
          "type": "Interface",
          "pages": [
            {
              "path": "/core/IItemPlayback#isSeekable",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "isSeekable"
            },
            {
              "path": "/core/IItemPlayback#getPlaybackPosition",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "getPlaybackPosition"
            },
            {
              "path": "/core/IItemPlayback#setPlaybackPosition",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "setPlaybackPosition"
            },
            {
              "path": "/core/IItemPlayback#getPlaybackDuration",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "getPlaybackDuration"
            },
            {
              "path": "/core/IItemPlayback#isPlaying",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "isPlaying"
            },
            {
              "path": "/core/IItemPlayback#setPlaying",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "setPlaying"
            },
            {
              "path": "/core/IItemPlayback#getPlaybackStartPosition",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "getPlaybackStartPosition"
            },
            {
              "path": "/core/IItemPlayback#setPlaybackStartPosition",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "setPlaybackStartPosition"
            },
            {
              "path": "/core/IItemPlayback#getPlaybackEndPosition",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "getPlaybackEndPosition"
            },
            {
              "path": "/core/IItemPlayback#setPlaybackEndPosition",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "setPlaybackEndPosition"
            },
            {
              "path": "/core/IItemPlayback#getActionAfterPlayback",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "getActionAfterPlayback"
            },
            {
              "path": "/core/IItemPlayback#setActionAfterPlayback",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "setActionAfterPlayback"
            },
            {
              "path": "/core/IItemPlayback#isAutostartOnSceneLoad",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "isAutostartOnSceneLoad"
            },
            {
              "path": "/core/IItemPlayback#setAutostartOnSceneLoad",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "setAutostartOnSceneLoad"
            },
            {
              "path": "/core/IItemPlayback#isForceDeinterlace",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "isForceDeinterlace"
            },
            {
              "path": "/core/IItemPlayback#setForceDeinterlace",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "setForceDeinterlace"
            },
            {
              "path": "/core/IItemPlayback#isRememberingPlaybackPosition",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "isRememberingPlaybackPosition"
            },
            {
              "path": "/core/IItemPlayback#setRememberingPlaybackPosition",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "setRememberingPlaybackPosition"
            },
            {
              "path": "/core/IItemPlayback#isShowingPlaybackPosition",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "isShowingPlaybackPosition"
            },
            {
              "path": "/core/IItemPlayback#setShowingPlaybackPosition",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "setShowingPlaybackPosition"
            },
            {
              "path": "/core/IItemPlayback#getCuePoints",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "getCuePoints"
            },
            {
              "path": "/core/IItemPlayback#setCuePoints",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "setCuePoints"
            },
            {
              "path": "/core/IItemPlayback#getValue",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "getValue"
            },
            {
              "path": "/core/IItemPlayback#setValue",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "setValue"
            },
            {
              "path": "/core/IItemPlayback#isAudio",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "isAudio"
            },
            {
              "path": "/core/IItemPlayback#isVideo",
              "partial": "partials/modules//core/IItemPlayback/index.html",
              "name": "isVideo"
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
              "path": "/core/Environment#isSourceProps",
              "partial": "partials/modules//core/Environment/index.html",
              "name": "isSourceProps"
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
              "path": "/core/App#setPrimaryMicLevel",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimaryMicLevel"
            },
            {
              "path": "/core/App#setPrimaryMicEnabled",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimaryMicEnabled"
            },
            {
              "path": "/core/App#setPrimaryMicSystemLevel",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimaryMicSystemLevel"
            },
            {
              "path": "/core/App#setPrimaryMicSystemEnabled",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimaryMicSystemEnabled"
            },
            {
              "path": "/core/App#setPrimaryMicDelay",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimaryMicDelay"
            },
            {
              "path": "/core/App#setPrimarySpeakerLevel",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimarySpeakerLevel"
            },
            {
              "path": "/core/App#setPrimarySpeakerEnabled",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimarySpeakerEnabled"
            },
            {
              "path": "/core/App#setPrimarySpeakerSystemLevel",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimarySpeakerSystemLevel"
            },
            {
              "path": "/core/App#setPrimarySpeakerSystemEnabled",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimarySpeakerSystemEnabled"
            },
            {
              "path": "/core/App#setPrimarySpeakerDelay",
              "partial": "partials/modules//core/App/index.html",
              "name": "setPrimarySpeakerDelay"
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
            },
            {
              "path": "/core/App#getUserIdHash",
              "partial": "partials/modules//core/App/index.html",
              "name": "getUserIdHash"
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
              "path": "/core/Scene#getSources",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "getSources"
            },
            {
              "path": "/core/Scene#isEmpty",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "isEmpty"
            },
            {
              "path": "/core/Scene#setSourceOrder",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "setSourceOrder"
            },
            {
              "path": "/core/Scene#getById",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "getById"
            },
            {
              "path": "/core/Scene#getByIdAsync",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "getByIdAsync"
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
              "path": "/core/Scene#searchSourcesById",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "searchSourcesById"
            },
            {
              "path": "/core/Scene#searchScenesBySourceId",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "searchScenesBySourceId"
            },
            {
              "path": "/core/Scene#searchSourcesByName",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "searchSourcesByName"
            },
            {
              "path": "/core/Scene#filterSources",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "filterSources"
            },
            {
              "path": "/core/Scene#filterScenesBySources",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "filterScenesBySources"
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
            },
            {
              "path": "/core/Transition#getSceneTransitions",
              "partial": "partials/modules//core/Transition/index.html",
              "name": "getSceneTransitions"
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
              "path": "/core/Dll#load",
              "partial": "partials/modules//core/Dll/index.html",
              "name": "load"
            },
            {
              "path": "/core/Dll#emit",
              "partial": "partials/modules//core/Dll/index.html",
              "name": "emit"
            },
            {
              "path": "/core/Dll#on",
              "partial": "partials/modules//core/Dll/index.html",
              "name": "on"
            },
            {
              "path": "/core/Dll#call",
              "partial": "partials/modules//core/Dll/index.html",
              "name": "call"
            },
            {
              "path": "/core/Dll#callEx",
              "partial": "partials/modules//core/Dll/index.html",
              "name": "callEx"
            },
            {
              "path": "/core/Dll#isAccessGranted",
              "partial": "partials/modules//core/Dll/index.html",
              "name": "isAccessGranted"
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
          "path": "/core/CameraSource",
          "partial": "partials/modules//core/CameraSource/index.html",
          "name": "CameraSource",
          "type": "Class",
          "pages": [
            {
              "path": "/core/CameraSource#getDeviceId",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getDeviceId"
            },
            {
              "path": "/core/CameraSource#isStreamPaused",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isStreamPaused"
            },
            {
              "path": "/core/CameraSource#setStreamPaused",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setStreamPaused"
            },
            {
              "path": "/core/CameraSource#isHardwareEncoder",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isHardwareEncoder"
            },
            {
              "path": "/core/CameraSource#isActive",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isActive"
            },
            {
              "path": "/core/CameraSource#getDelay",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getDelay"
            },
            {
              "path": "/core/CameraSource#setDelay",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setDelay"
            },
            {
              "path": "/core/CameraSource#getAudioOffset",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getAudioOffset"
            },
            {
              "path": "/core/CameraSource#setAudioOffset",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setAudioOffset"
            },
            {
              "path": "/core/CameraSource#getAudioInput",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getAudioInput"
            },
            {
              "path": "/core/CameraSource#setAudioInput",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setAudioInput"
            },
            {
              "path": "/core/CameraSource#isForceDeinterlace",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isForceDeinterlace"
            },
            {
              "path": "/core/CameraSource#setForceDeinterlace",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setForceDeinterlace"
            },
            {
              "path": "/core/CameraSource#isKeepAspectRatio",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/CameraSource#isPositionLocked",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/CameraSource#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/CameraSource#getCanvasRotate",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/CameraSource#getCropping",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/CameraSource#getEnhancedRotate",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getEnhancedRotate"
            },
            {
              "path": "/core/CameraSource#getPosition",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/CameraSource#getRotateY",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/CameraSource#getRotateX",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/CameraSource#getRotateZ",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/CameraSource#setCanvasRotate",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/CameraSource#setCropping",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/CameraSource#setCroppingEnhanced",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/CameraSource#setEnhancedRotate",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setEnhancedRotate"
            },
            {
              "path": "/core/CameraSource#setKeepAspectRatio",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/CameraSource#setPositionLocked",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/CameraSource#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/CameraSource#setPosition",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/CameraSource#setRotateY",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/CameraSource#setRotateX",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/CameraSource#setRotateZ",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/CameraSource#getTransparency",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/CameraSource#getBrightness",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/CameraSource#getContrast",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/CameraSource#getHue",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/CameraSource#getSaturation",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/CameraSource#getBorderColor",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/CameraSource#isFullDynamicColorRange",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isFullDynamicColorRange"
            },
            {
              "path": "/core/CameraSource#setTransparency",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/CameraSource#setBrightness",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/CameraSource#setContrast",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/CameraSource#setHue",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/CameraSource#setSaturation",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/CameraSource#setBorderColor",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/CameraSource#setFullDynamicColorRange",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setFullDynamicColorRange"
            },
            {
              "path": "/core/CameraSource#setColorOptionsPinned",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setColorOptionsPinned"
            },
            {
              "path": "/core/CameraSource#getColorOptionsPinned",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getColorOptionsPinned"
            },
            {
              "path": "/core/CameraSource#isChromaEnabled",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/CameraSource#setChromaEnabled",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/CameraSource#getKeyingType",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/CameraSource#setKeyingType",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/CameraSource#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/CameraSource#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/CameraSource#getChromaLegacyBrightness",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/CameraSource#setChromaLegacyBrightness",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/CameraSource#getChromaLegacySaturation",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/CameraSource#setChromaLegacySaturation",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/CameraSource#getChromaLegacyHue",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/CameraSource#setChromaLegacyHue",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/CameraSource#getChromaLegacyThreshold",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/CameraSource#setChromaLegacyThreshold",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/CameraSource#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/CameraSource#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/CameraSource#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/CameraSource#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/CameraSource#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/CameraSource#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/CameraSource#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/CameraSource#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/CameraSource#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/CameraSource#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/CameraSource#getChromaColorKeyExposure",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/CameraSource#setChromaColorKeyExposure",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/CameraSource#getChromaColorKeyColor",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/CameraSource#setChromaColorKeyColor",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/CameraSource#setKeyingOptionsPinned",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setKeyingOptionsPinned"
            },
            {
              "path": "/core/CameraSource#getKeyingOptionsPinned",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getKeyingOptionsPinned"
            },
            {
              "path": "/core/CameraSource#isVisible",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/CameraSource#setVisible",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/CameraSource#getTransition",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/CameraSource#setTransition",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/CameraSource#getTransitionTime",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/CameraSource#setTransitionTime",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setTransitionTime"
            },
            {
              "path": "/core/CameraSource#getVolume",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/CameraSource#isMute",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/CameraSource#setVolume",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/CameraSource#setMute",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/CameraSource#isStreamOnlyAudio",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/CameraSource#setStreamOnlyAudio",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/CameraSource#isAudioAvailable",
              "partial": "partials/modules//core/CameraSource/index.html",
              "name": "isAudioAvailable"
            }
          ]
        },
        {
          "path": "/core/GameSource",
          "partial": "partials/modules//core/GameSource/index.html",
          "name": "GameSource",
          "type": "Class",
          "pages": [
            {
              "path": "/core/GameSource#isSpecialOptimizationEnabled",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "isSpecialOptimizationEnabled"
            },
            {
              "path": "/core/GameSource#setSpecialOptimizationEnabled",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setSpecialOptimizationEnabled"
            },
            {
              "path": "/core/GameSource#isShowMouseEnabled",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "isShowMouseEnabled"
            },
            {
              "path": "/core/GameSource#setShowMouseEnabled",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setShowMouseEnabled"
            },
            {
              "path": "/core/GameSource#setOfflineImage",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setOfflineImage"
            },
            {
              "path": "/core/GameSource#getOfflineImage",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getOfflineImage"
            },
            {
              "path": "/core/GameSource#isKeepAspectRatio",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/GameSource#isPositionLocked",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/GameSource#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/GameSource#getCanvasRotate",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/GameSource#getCropping",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/GameSource#getEnhancedRotate",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getEnhancedRotate"
            },
            {
              "path": "/core/GameSource#getPosition",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/GameSource#getRotateY",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/GameSource#getRotateX",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/GameSource#getRotateZ",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/GameSource#setCanvasRotate",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/GameSource#setCropping",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/GameSource#setCroppingEnhanced",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/GameSource#setEnhancedRotate",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setEnhancedRotate"
            },
            {
              "path": "/core/GameSource#setKeepAspectRatio",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/GameSource#setPositionLocked",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/GameSource#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/GameSource#setPosition",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/GameSource#setRotateY",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/GameSource#setRotateX",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/GameSource#setRotateZ",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/GameSource#getTransparency",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/GameSource#getBrightness",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/GameSource#getContrast",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/GameSource#getHue",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/GameSource#getSaturation",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/GameSource#getBorderColor",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/GameSource#isFullDynamicColorRange",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "isFullDynamicColorRange"
            },
            {
              "path": "/core/GameSource#setTransparency",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/GameSource#setBrightness",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/GameSource#setContrast",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/GameSource#setHue",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/GameSource#setSaturation",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/GameSource#setBorderColor",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/GameSource#setFullDynamicColorRange",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setFullDynamicColorRange"
            },
            {
              "path": "/core/GameSource#isChromaEnabled",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/GameSource#setChromaEnabled",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/GameSource#getKeyingType",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/GameSource#setKeyingType",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/GameSource#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/GameSource#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/GameSource#getChromaLegacyBrightness",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/GameSource#setChromaLegacyBrightness",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/GameSource#getChromaLegacySaturation",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/GameSource#setChromaLegacySaturation",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/GameSource#getChromaLegacyHue",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/GameSource#setChromaLegacyHue",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/GameSource#getChromaLegacyThreshold",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/GameSource#setChromaLegacyThreshold",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/GameSource#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/GameSource#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/GameSource#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/GameSource#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/GameSource#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/GameSource#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/GameSource#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/GameSource#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/GameSource#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/GameSource#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/GameSource#getChromaColorKeyExposure",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/GameSource#setChromaColorKeyExposure",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/GameSource#getChromaColorKeyColor",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/GameSource#setChromaColorKeyColor",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/GameSource#isVisible",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/GameSource#setVisible",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/GameSource#getTransition",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/GameSource#setTransition",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/GameSource#getTransitionTime",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/GameSource#setTransitionTime",
              "partial": "partials/modules//core/GameSource/index.html",
              "name": "setTransitionTime"
            }
          ]
        },
        {
          "path": "/core/AudioSource",
          "partial": "partials/modules//core/AudioSource/index.html",
          "name": "AudioSource",
          "type": "Class",
          "pages": [
            {
              "path": "/core/AudioSource#isSilenceDetectionEnabled",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "isSilenceDetectionEnabled"
            },
            {
              "path": "/core/AudioSource#setSilenceDetectionEnabled",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "setSilenceDetectionEnabled"
            },
            {
              "path": "/core/AudioSource#getSilenceThreshold",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "getSilenceThreshold"
            },
            {
              "path": "/core/AudioSource#setSilenceThreshold",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "setSilenceThreshold"
            },
            {
              "path": "/core/AudioSource#getSilencePeriod",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "getSilencePeriod"
            },
            {
              "path": "/core/AudioSource#setSilencePeriod",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "setSilencePeriod"
            },
            {
              "path": "/core/AudioSource#getAudioOffset",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "getAudioOffset"
            },
            {
              "path": "/core/AudioSource#setAudioOffset",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "setAudioOffset"
            },
            {
              "path": "/core/AudioSource#getVolume",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/AudioSource#isMute",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/AudioSource#setVolume",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/AudioSource#setMute",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/AudioSource#isStreamOnlyAudio",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/AudioSource#setStreamOnlyAudio",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/AudioSource#isAudioAvailable",
              "partial": "partials/modules//core/AudioSource/index.html",
              "name": "isAudioAvailable"
            }
          ]
        },
        {
          "path": "/core/HtmlSource",
          "partial": "partials/modules//core/HtmlSource/index.html",
          "name": "HtmlSource",
          "type": "Class",
          "pages": [
            {
              "path": "/core/HtmlSource#getURL",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getURL"
            },
            {
              "path": "/core/HtmlSource#setURL",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setURL"
            },
            {
              "path": "/core/HtmlSource#getBrowserJS",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getBrowserJS"
            },
            {
              "path": "/core/HtmlSource#setBrowserJS",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setBrowserJS"
            },
            {
              "path": "/core/HtmlSource#isBrowserJSEnabled",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isBrowserJSEnabled"
            },
            {
              "path": "/core/HtmlSource#enableBrowserJS",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "enableBrowserJS"
            },
            {
              "path": "/core/HtmlSource#getCustomCSS",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getCustomCSS"
            },
            {
              "path": "/core/HtmlSource#setCustomCSS",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setCustomCSS"
            },
            {
              "path": "/core/HtmlSource#isCustomCSSEnabled",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isCustomCSSEnabled"
            },
            {
              "path": "/core/HtmlSource#enableCustomCSS",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "enableCustomCSS"
            },
            {
              "path": "/core/HtmlSource#isBrowserTransparent",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isBrowserTransparent"
            },
            {
              "path": "/core/HtmlSource#enableBrowserTransparency",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "enableBrowserTransparency"
            },
            {
              "path": "/core/HtmlSource#getBrowserCustomSize",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getBrowserCustomSize"
            },
            {
              "path": "/core/HtmlSource#setBrowserCustomSize",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setBrowserCustomSize"
            },
            {
              "path": "/core/HtmlSource#getAllowRightClick",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getAllowRightClick"
            },
            {
              "path": "/core/HtmlSource#setAllowRightClick",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setAllowRightClick"
            },
            {
              "path": "/core/HtmlSource#isKeepAspectRatio",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/HtmlSource#isPositionLocked",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/HtmlSource#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/HtmlSource#getCanvasRotate",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/HtmlSource#getCropping",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/HtmlSource#getEnhancedRotate",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getEnhancedRotate"
            },
            {
              "path": "/core/HtmlSource#getPosition",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/HtmlSource#getRotateY",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/HtmlSource#getRotateX",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/HtmlSource#getRotateZ",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/HtmlSource#setCanvasRotate",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/HtmlSource#setCropping",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/HtmlSource#setCroppingEnhanced",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/HtmlSource#setEnhancedRotate",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setEnhancedRotate"
            },
            {
              "path": "/core/HtmlSource#setKeepAspectRatio",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/HtmlSource#setPositionLocked",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/HtmlSource#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/HtmlSource#setPosition",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/HtmlSource#setRotateY",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/HtmlSource#setRotateX",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/HtmlSource#setRotateZ",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/HtmlSource#getTransparency",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/HtmlSource#getBrightness",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/HtmlSource#getContrast",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/HtmlSource#getHue",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/HtmlSource#getSaturation",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/HtmlSource#getBorderColor",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/HtmlSource#isFullDynamicColorRange",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isFullDynamicColorRange"
            },
            {
              "path": "/core/HtmlSource#setTransparency",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/HtmlSource#setBrightness",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/HtmlSource#setContrast",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/HtmlSource#setHue",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/HtmlSource#setSaturation",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/HtmlSource#setBorderColor",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/HtmlSource#setFullDynamicColorRange",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setFullDynamicColorRange"
            },
            {
              "path": "/core/HtmlSource#isChromaEnabled",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/HtmlSource#setChromaEnabled",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/HtmlSource#getKeyingType",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/HtmlSource#setKeyingType",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/HtmlSource#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/HtmlSource#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/HtmlSource#getChromaLegacyBrightness",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/HtmlSource#setChromaLegacyBrightness",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/HtmlSource#getChromaLegacySaturation",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/HtmlSource#setChromaLegacySaturation",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/HtmlSource#getChromaLegacyHue",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/HtmlSource#setChromaLegacyHue",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/HtmlSource#getChromaLegacyThreshold",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/HtmlSource#setChromaLegacyThreshold",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/HtmlSource#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/HtmlSource#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/HtmlSource#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/HtmlSource#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/HtmlSource#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/HtmlSource#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/HtmlSource#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/HtmlSource#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/HtmlSource#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/HtmlSource#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/HtmlSource#getChromaColorKeyExposure",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/HtmlSource#setChromaColorKeyExposure",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/HtmlSource#getChromaColorKeyColor",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/HtmlSource#setChromaColorKeyColor",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/HtmlSource#isVisible",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/HtmlSource#setVisible",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/HtmlSource#getTransition",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/HtmlSource#setTransition",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/HtmlSource#getTransitionTime",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/HtmlSource#setTransitionTime",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setTransitionTime"
            },
            {
              "path": "/core/HtmlSource#loadConfig",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "loadConfig"
            },
            {
              "path": "/core/HtmlSource#saveConfig",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "saveConfig"
            },
            {
              "path": "/core/HtmlSource#requestSaveConfig",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "requestSaveConfig"
            },
            {
              "path": "/core/HtmlSource#applyConfig",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "applyConfig"
            },
            {
              "path": "/core/HtmlSource#getVolume",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/HtmlSource#isMute",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/HtmlSource#setVolume",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/HtmlSource#setMute",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/HtmlSource#isStreamOnlyAudio",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/HtmlSource#setStreamOnlyAudio",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/HtmlSource#isAudioAvailable",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isAudioAvailable"
            }
          ]
        },
        {
          "path": "/core/FlashSource",
          "partial": "partials/modules//core/FlashSource/index.html",
          "name": "FlashSource",
          "type": "Class",
          "pages": [
            {
              "path": "/core/FlashSource#getCustomResolution",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getCustomResolution"
            },
            {
              "path": "/core/FlashSource#setCustomResolution",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setCustomResolution"
            },
            {
              "path": "/core/FlashSource#getAllowRightClick",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getAllowRightClick"
            },
            {
              "path": "/core/FlashSource#setAllowRightClick",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setAllowRightClick"
            },
            {
              "path": "/core/FlashSource#isKeepAspectRatio",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/FlashSource#isPositionLocked",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/FlashSource#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/FlashSource#getCanvasRotate",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/FlashSource#getCropping",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/FlashSource#getEnhancedRotate",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getEnhancedRotate"
            },
            {
              "path": "/core/FlashSource#getPosition",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/FlashSource#getRotateY",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/FlashSource#getRotateX",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/FlashSource#getRotateZ",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/FlashSource#setCanvasRotate",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/FlashSource#setCropping",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/FlashSource#setCroppingEnhanced",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/FlashSource#setEnhancedRotate",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setEnhancedRotate"
            },
            {
              "path": "/core/FlashSource#setKeepAspectRatio",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/FlashSource#setPositionLocked",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/FlashSource#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/FlashSource#setPosition",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/FlashSource#setRotateY",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/FlashSource#setRotateX",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/FlashSource#setRotateZ",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/FlashSource#getTransparency",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/FlashSource#getBrightness",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/FlashSource#getContrast",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/FlashSource#getHue",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/FlashSource#getSaturation",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/FlashSource#getBorderColor",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/FlashSource#isFullDynamicColorRange",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "isFullDynamicColorRange"
            },
            {
              "path": "/core/FlashSource#setTransparency",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/FlashSource#setBrightness",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/FlashSource#setContrast",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/FlashSource#setHue",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/FlashSource#setSaturation",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/FlashSource#setBorderColor",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/FlashSource#setFullDynamicColorRange",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setFullDynamicColorRange"
            },
            {
              "path": "/core/FlashSource#isChromaEnabled",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/FlashSource#setChromaEnabled",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/FlashSource#getKeyingType",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/FlashSource#setKeyingType",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/FlashSource#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/FlashSource#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/FlashSource#getChromaLegacyBrightness",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/FlashSource#setChromaLegacyBrightness",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/FlashSource#getChromaLegacySaturation",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/FlashSource#setChromaLegacySaturation",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/FlashSource#getChromaLegacyHue",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/FlashSource#setChromaLegacyHue",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/FlashSource#getChromaLegacyThreshold",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/FlashSource#setChromaLegacyThreshold",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/FlashSource#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/FlashSource#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/FlashSource#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/FlashSource#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/FlashSource#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/FlashSource#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/FlashSource#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/FlashSource#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/FlashSource#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/FlashSource#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/FlashSource#getChromaColorKeyExposure",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/FlashSource#setChromaColorKeyExposure",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/FlashSource#getChromaColorKeyColor",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/FlashSource#setChromaColorKeyColor",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/FlashSource#isVisible",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/FlashSource#setVisible",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/FlashSource#getTransition",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/FlashSource#setTransition",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/FlashSource#getTransitionTime",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/FlashSource#setTransitionTime",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setTransitionTime"
            },
            {
              "path": "/core/FlashSource#getVolume",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/FlashSource#isMute",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/FlashSource#setVolume",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/FlashSource#setMute",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/FlashSource#isStreamOnlyAudio",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/FlashSource#setStreamOnlyAudio",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/FlashSource#isAudioAvailable",
              "partial": "partials/modules//core/FlashSource/index.html",
              "name": "isAudioAvailable"
            }
          ]
        },
        {
          "path": "/core/ScreenSource",
          "partial": "partials/modules//core/ScreenSource/index.html",
          "name": "ScreenSource",
          "type": "Class",
          "pages": [
            {
              "path": "/core/ScreenSource#getCaptureArea",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getCaptureArea"
            },
            {
              "path": "/core/ScreenSource#setCaptureArea",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setCaptureArea"
            },
            {
              "path": "/core/ScreenSource#isClientArea",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "isClientArea"
            },
            {
              "path": "/core/ScreenSource#setClientArea",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setClientArea"
            },
            {
              "path": "/core/ScreenSource#isStickToTitle",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "isStickToTitle"
            },
            {
              "path": "/core/ScreenSource#setStickToTitle",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setStickToTitle"
            },
            {
              "path": "/core/ScreenSource#isKeepAspectRatio",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/ScreenSource#isPositionLocked",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/ScreenSource#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/ScreenSource#getCanvasRotate",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/ScreenSource#getCropping",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/ScreenSource#getEnhancedRotate",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getEnhancedRotate"
            },
            {
              "path": "/core/ScreenSource#getPosition",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/ScreenSource#getRotateY",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/ScreenSource#getRotateX",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/ScreenSource#getRotateZ",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/ScreenSource#setCanvasRotate",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/ScreenSource#setCropping",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/ScreenSource#setCroppingEnhanced",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/ScreenSource#setEnhancedRotate",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setEnhancedRotate"
            },
            {
              "path": "/core/ScreenSource#setKeepAspectRatio",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/ScreenSource#setPositionLocked",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/ScreenSource#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/ScreenSource#setPosition",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/ScreenSource#setRotateY",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/ScreenSource#setRotateX",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/ScreenSource#setRotateZ",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/ScreenSource#getTransparency",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/ScreenSource#getBrightness",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/ScreenSource#getContrast",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/ScreenSource#getHue",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/ScreenSource#getSaturation",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/ScreenSource#getBorderColor",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/ScreenSource#isFullDynamicColorRange",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "isFullDynamicColorRange"
            },
            {
              "path": "/core/ScreenSource#setTransparency",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/ScreenSource#setBrightness",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/ScreenSource#setContrast",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/ScreenSource#setHue",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/ScreenSource#setSaturation",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/ScreenSource#setBorderColor",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/ScreenSource#setFullDynamicColorRange",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setFullDynamicColorRange"
            },
            {
              "path": "/core/ScreenSource#isChromaEnabled",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/ScreenSource#setChromaEnabled",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/ScreenSource#getKeyingType",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/ScreenSource#setKeyingType",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/ScreenSource#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/ScreenSource#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/ScreenSource#getChromaLegacyBrightness",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/ScreenSource#setChromaLegacyBrightness",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/ScreenSource#getChromaLegacySaturation",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/ScreenSource#setChromaLegacySaturation",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/ScreenSource#getChromaLegacyHue",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/ScreenSource#setChromaLegacyHue",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/ScreenSource#getChromaLegacyThreshold",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/ScreenSource#setChromaLegacyThreshold",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/ScreenSource#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/ScreenSource#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/ScreenSource#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/ScreenSource#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/ScreenSource#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/ScreenSource#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/ScreenSource#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/ScreenSource#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/ScreenSource#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/ScreenSource#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/ScreenSource#getChromaColorKeyExposure",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/ScreenSource#setChromaColorKeyExposure",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/ScreenSource#getChromaColorKeyColor",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/ScreenSource#setChromaColorKeyColor",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/ScreenSource#isVisible",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/ScreenSource#setVisible",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/ScreenSource#getTransition",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/ScreenSource#setTransition",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/ScreenSource#getTransitionTime",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/ScreenSource#setTransitionTime",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setTransitionTime"
            }
          ]
        },
        {
          "path": "/core/ImageSource",
          "partial": "partials/modules//core/ImageSource/index.html",
          "name": "ImageSource",
          "type": "Class",
          "pages": [
            {
              "path": "/core/ImageSource#isKeepAspectRatio",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/ImageSource#isPositionLocked",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/ImageSource#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/ImageSource#getCanvasRotate",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/ImageSource#getCropping",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/ImageSource#getEnhancedRotate",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getEnhancedRotate"
            },
            {
              "path": "/core/ImageSource#getPosition",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/ImageSource#getRotateY",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/ImageSource#getRotateX",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/ImageSource#getRotateZ",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/ImageSource#setCanvasRotate",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/ImageSource#setCropping",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/ImageSource#setCroppingEnhanced",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/ImageSource#setEnhancedRotate",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setEnhancedRotate"
            },
            {
              "path": "/core/ImageSource#setKeepAspectRatio",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/ImageSource#setPositionLocked",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/ImageSource#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/ImageSource#setPosition",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/ImageSource#setRotateY",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/ImageSource#setRotateX",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/ImageSource#setRotateZ",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/ImageSource#getTransparency",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/ImageSource#getBrightness",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/ImageSource#getContrast",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/ImageSource#getHue",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/ImageSource#getSaturation",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/ImageSource#getBorderColor",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/ImageSource#isFullDynamicColorRange",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "isFullDynamicColorRange"
            },
            {
              "path": "/core/ImageSource#setTransparency",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/ImageSource#setBrightness",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/ImageSource#setContrast",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/ImageSource#setHue",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/ImageSource#setSaturation",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/ImageSource#setBorderColor",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/ImageSource#setFullDynamicColorRange",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setFullDynamicColorRange"
            },
            {
              "path": "/core/ImageSource#isChromaEnabled",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/ImageSource#setChromaEnabled",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/ImageSource#getKeyingType",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/ImageSource#setKeyingType",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/ImageSource#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/ImageSource#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/ImageSource#getChromaLegacyBrightness",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/ImageSource#setChromaLegacyBrightness",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/ImageSource#getChromaLegacySaturation",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/ImageSource#setChromaLegacySaturation",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/ImageSource#getChromaLegacyHue",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/ImageSource#setChromaLegacyHue",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/ImageSource#getChromaLegacyThreshold",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/ImageSource#setChromaLegacyThreshold",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/ImageSource#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/ImageSource#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/ImageSource#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/ImageSource#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/ImageSource#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/ImageSource#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/ImageSource#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/ImageSource#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/ImageSource#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/ImageSource#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/ImageSource#getChromaColorKeyExposure",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/ImageSource#setChromaColorKeyExposure",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/ImageSource#getChromaColorKeyColor",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/ImageSource#setChromaColorKeyColor",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/ImageSource#isVisible",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/ImageSource#setVisible",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/ImageSource#getTransition",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/ImageSource#setTransition",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/ImageSource#getTransitionTime",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/ImageSource#setTransitionTime",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setTransitionTime"
            }
          ]
        },
        {
          "path": "/core/MediaSource",
          "partial": "partials/modules//core/MediaSource/index.html",
          "name": "MediaSource",
          "type": "Class",
          "pages": [
            {
              "path": "/core/MediaSource#getFileInfo",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getFileInfo"
            },
            {
              "path": "/core/MediaSource#isKeepAspectRatio",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/MediaSource#isPositionLocked",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/MediaSource#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/MediaSource#getCanvasRotate",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/MediaSource#getCropping",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/MediaSource#getEnhancedRotate",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getEnhancedRotate"
            },
            {
              "path": "/core/MediaSource#getPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/MediaSource#getRotateY",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/MediaSource#getRotateX",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/MediaSource#getRotateZ",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/MediaSource#setCanvasRotate",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/MediaSource#setCropping",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/MediaSource#setCroppingEnhanced",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/MediaSource#setEnhancedRotate",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setEnhancedRotate"
            },
            {
              "path": "/core/MediaSource#setKeepAspectRatio",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/MediaSource#setPositionLocked",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/MediaSource#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/MediaSource#setPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/MediaSource#setRotateY",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/MediaSource#setRotateX",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/MediaSource#setRotateZ",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/MediaSource#getTransparency",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/MediaSource#getBrightness",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/MediaSource#getContrast",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/MediaSource#getHue",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/MediaSource#getSaturation",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/MediaSource#getBorderColor",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/MediaSource#isFullDynamicColorRange",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isFullDynamicColorRange"
            },
            {
              "path": "/core/MediaSource#setTransparency",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/MediaSource#setBrightness",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/MediaSource#setContrast",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/MediaSource#setHue",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/MediaSource#setSaturation",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/MediaSource#setBorderColor",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/MediaSource#setFullDynamicColorRange",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setFullDynamicColorRange"
            },
            {
              "path": "/core/MediaSource#isChromaEnabled",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/MediaSource#setChromaEnabled",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/MediaSource#getKeyingType",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/MediaSource#setKeyingType",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/MediaSource#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/MediaSource#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/MediaSource#getChromaLegacyBrightness",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/MediaSource#setChromaLegacyBrightness",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/MediaSource#getChromaLegacySaturation",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/MediaSource#setChromaLegacySaturation",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/MediaSource#getChromaLegacyHue",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/MediaSource#setChromaLegacyHue",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/MediaSource#getChromaLegacyThreshold",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/MediaSource#setChromaLegacyThreshold",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/MediaSource#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/MediaSource#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/MediaSource#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/MediaSource#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/MediaSource#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/MediaSource#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/MediaSource#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/MediaSource#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/MediaSource#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/MediaSource#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/MediaSource#getChromaColorKeyExposure",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/MediaSource#setChromaColorKeyExposure",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/MediaSource#getChromaColorKeyColor",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/MediaSource#setChromaColorKeyColor",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/MediaSource#isVisible",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/MediaSource#setVisible",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/MediaSource#getTransition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/MediaSource#setTransition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/MediaSource#getTransitionTime",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/MediaSource#setTransitionTime",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setTransitionTime"
            },
            {
              "path": "/core/MediaSource#isSeekable",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isSeekable"
            },
            {
              "path": "/core/MediaSource#getPlaybackPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getPlaybackPosition"
            },
            {
              "path": "/core/MediaSource#setPlaybackPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setPlaybackPosition"
            },
            {
              "path": "/core/MediaSource#getPlaybackDuration",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getPlaybackDuration"
            },
            {
              "path": "/core/MediaSource#isPlaying",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isPlaying"
            },
            {
              "path": "/core/MediaSource#setPlaying",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setPlaying"
            },
            {
              "path": "/core/MediaSource#getPlaybackStartPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getPlaybackStartPosition"
            },
            {
              "path": "/core/MediaSource#setPlaybackStartPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setPlaybackStartPosition"
            },
            {
              "path": "/core/MediaSource#getPlaybackEndPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getPlaybackEndPosition"
            },
            {
              "path": "/core/MediaSource#setPlaybackEndPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setPlaybackEndPosition"
            },
            {
              "path": "/core/MediaSource#getActionAfterPlayback",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getActionAfterPlayback"
            },
            {
              "path": "/core/MediaSource#setActionAfterPlayback",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setActionAfterPlayback"
            },
            {
              "path": "/core/MediaSource#isAutostartOnSceneLoad",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isAutostartOnSceneLoad"
            },
            {
              "path": "/core/MediaSource#setAutostartOnSceneLoad",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setAutostartOnSceneLoad"
            },
            {
              "path": "/core/MediaSource#isForceDeinterlace",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isForceDeinterlace"
            },
            {
              "path": "/core/MediaSource#setForceDeinterlace",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setForceDeinterlace"
            },
            {
              "path": "/core/MediaSource#isRememberingPlaybackPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isRememberingPlaybackPosition"
            },
            {
              "path": "/core/MediaSource#setRememberingPlaybackPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setRememberingPlaybackPosition"
            },
            {
              "path": "/core/MediaSource#isShowingPlaybackPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isShowingPlaybackPosition"
            },
            {
              "path": "/core/MediaSource#setShowingPlaybackPosition",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setShowingPlaybackPosition"
            },
            {
              "path": "/core/MediaSource#getCuePoints",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getCuePoints"
            },
            {
              "path": "/core/MediaSource#setCuePoints",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setCuePoints"
            },
            {
              "path": "/core/MediaSource#isAudio",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isAudio"
            },
            {
              "path": "/core/MediaSource#isVideo",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isVideo"
            },
            {
              "path": "/core/MediaSource#getVolume",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/MediaSource#isMute",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/MediaSource#setVolume",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/MediaSource#setMute",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/MediaSource#isStreamOnlyAudio",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/MediaSource#setStreamOnlyAudio",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/MediaSource#isAudioAvailable",
              "partial": "partials/modules//core/MediaSource/index.html",
              "name": "isAudioAvailable"
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
              "path": "/system/AudioDevice#isEnabled",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "isEnabled"
            },
            {
              "path": "/system/AudioDevice#getSystemLevel",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "getSystemLevel"
            },
            {
              "path": "/system/AudioDevice#getSystemEnabled",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "getSystemEnabled"
            },
            {
              "path": "/system/AudioDevice#getDelay",
              "partial": "partials/modules//system/AudioDevice/index.html",
              "name": "getDelay"
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
            },
            {
              "path": "/system/Game#autoDetect",
              "partial": "partials/modules//system/Game/index.html",
              "name": "autoDetect"
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
              "path": "/system/MicrophoneDevice#getDisplayId",
              "partial": "partials/modules//system/MicrophoneDevice/index.html",
              "name": "getDisplayId"
            },
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
        },
        {
          "path": "/system/Screen",
          "partial": "partials/modules//system/Screen/index.html",
          "name": "Screen",
          "type": "Class",
          "pages": [
            {
              "path": "/system/Screen#addToScene",
              "partial": "partials/modules//system/Screen/index.html",
              "name": "addToScene"
            }
          ]
        },
        {
          "path": "/system/File",
          "partial": "partials/modules//system/File/index.html",
          "name": "File",
          "type": "Class",
          "pages": [
            {
              "path": "/system/File#addToScene",
              "partial": "partials/modules//system/File/index.html",
              "name": "addToScene"
            }
          ]
        },
        {
          "path": "/system/VideoPlaylist",
          "partial": "partials/modules//system/VideoPlaylist/index.html",
          "name": "VideoPlaylist",
          "type": "Class",
          "pages": [
            {
              "path": "/system/VideoPlaylist#toXML",
              "partial": "partials/modules//system/VideoPlaylist/index.html",
              "name": "toXML"
            },
            {
              "path": "/system/VideoPlaylist#addToScene",
              "partial": "partials/modules//system/VideoPlaylist/index.html",
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
            },
            {
              "path": "/util/IO#getVideoDuration",
              "partial": "partials/modules//util/IO/index.html",
              "name": "getVideoDuration"
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
          "path": "/window/SourcePropsWindow",
          "partial": "partials/modules//window/SourcePropsWindow/index.html",
          "name": "SourcePropsWindow",
          "type": "Class",
          "pages": [
            {
              "path": "/window/SourcePropsWindow#useFullWindow",
              "partial": "partials/modules//window/SourcePropsWindow/index.html",
              "name": "useFullWindow"
            },
            {
              "path": "/window/SourcePropsWindow#useTabbedWindow",
              "partial": "partials/modules//window/SourcePropsWindow/index.html",
              "name": "useTabbedWindow"
            },
            {
              "path": "/window/SourcePropsWindow#resize",
              "partial": "partials/modules//window/SourcePropsWindow/index.html",
              "name": "resize"
            },
            {
              "path": "/window/SourcePropsWindow#requestDialogTitleChange",
              "partial": "partials/modules//window/SourcePropsWindow/index.html",
              "name": "requestDialogTitleChange"
            },
            {
              "path": "/window/SourcePropsWindow#close",
              "partial": "partials/modules//window/SourcePropsWindow/index.html",
              "name": "close"
            },
            {
              "path": "/window/SourcePropsWindow#getInstance",
              "partial": "partials/modules//window/SourcePropsWindow/index.html",
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