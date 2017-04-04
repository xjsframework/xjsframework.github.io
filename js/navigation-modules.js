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
              "path": "/core/Item#getId",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getId"
            },
            {
              "path": "/core/Item#getView",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getView"
            },
            {
              "path": "/core/Item#getSceneId",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getSceneId"
            },
            {
              "path": "/core/Item#toXML",
              "partial": "partials/modules//core/Item/index.html",
              "name": "toXML"
            },
            {
              "path": "/core/Item#duplicate",
              "partial": "partials/modules//core/Item/index.html",
              "name": "duplicate"
            },
            {
              "path": "/core/Item#unlink",
              "partial": "partials/modules//core/Item/index.html",
              "name": "unlink"
            },
            {
              "path": "/core/Item#getItemList",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getItemList"
            },
            {
              "path": "/core/Item#getSource",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getSource"
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
              "path": "/core/Item#getCanvasRotate",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/Item#getCropping",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/Item#getEnhancedRotate",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getEnhancedRotate"
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
              "path": "/core/Item#setCanvasRotate",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/Item#setCropping",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/Item#setCroppingEnhanced",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/Item#setEnhancedRotate",
              "partial": "partials/modules//core/Item/index.html",
              "name": "setEnhancedRotate"
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
              "path": "/core/Item#refresh",
              "partial": "partials/modules//core/Item/index.html",
              "name": "refresh"
            },
            {
              "path": "/core/Item#getType",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getType"
            },
            {
              "path": "/core/Item#getItemList",
              "partial": "partials/modules//core/Item/index.html",
              "name": "getItemList"
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
          "path": "/core/IItemEffect",
          "partial": "partials/modules//core/IItemEffect/index.html",
          "name": "IItemEffect",
          "type": "Interface",
          "pages": [
            {
              "path": "/core/IItemEffect#getMaskEffect",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "getMaskEffect"
            },
            {
              "path": "/core/IItemEffect#setMaskEffect",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "setMaskEffect"
            },
            {
              "path": "/core/IItemEffect#getBorderEffectRadius",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "getBorderEffectRadius"
            },
            {
              "path": "/core/IItemEffect#setBorderEffectRadius",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "setBorderEffectRadius"
            },
            {
              "path": "/core/IItemEffect#getBorderEffectThickness",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "getBorderEffectThickness"
            },
            {
              "path": "/core/IItemEffect#setBorderEffectThickness",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "setBorderEffectThickness"
            },
            {
              "path": "/core/IItemEffect#getBorderEffectOpacity",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "getBorderEffectOpacity"
            },
            {
              "path": "/core/IItemEffect#setBorderEffectOpacity",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "setBorderEffectOpacity"
            },
            {
              "path": "/core/IItemEffect#getBorderEffectColor",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "getBorderEffectColor"
            },
            {
              "path": "/core/IItemEffect#setBorderEffectColor",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "setBorderEffectColor"
            },
            {
              "path": "/core/IItemEffect#getShadowEffectThickness",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "getShadowEffectThickness"
            },
            {
              "path": "/core/IItemEffect#setShadowEffectThickness",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "setShadowEffectThickness"
            },
            {
              "path": "/core/IItemEffect#getShadowEffectBlur",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "getShadowEffectBlur"
            },
            {
              "path": "/core/IItemEffect#setShadowEffectBlur",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "setShadowEffectBlur"
            },
            {
              "path": "/core/IItemEffect#getShadowEffectOpacity",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "getShadowEffectOpacity"
            },
            {
              "path": "/core/IItemEffect#setShadowEffectOpacity",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "setShadowEffectOpacity"
            },
            {
              "path": "/core/IItemEffect#getShadowEffectOffsetX",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "getShadowEffectOffsetX"
            },
            {
              "path": "/core/IItemEffect#setShadowEffectOffsetX",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "setShadowEffectOffsetX"
            },
            {
              "path": "/core/IItemEffect#getShadowEffectOffsetY",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "getShadowEffectOffsetY"
            },
            {
              "path": "/core/IItemEffect#setShadowEffectOffsetY",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "setShadowEffectOffsetY"
            },
            {
              "path": "/core/IItemEffect#getFileMask",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "getFileMask"
            },
            {
              "path": "/core/IItemEffect#setFileMask",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "setFileMask"
            },
            {
              "path": "/core/IItemEffect#isFileMaskingGuideVisible",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "isFileMaskingGuideVisible"
            },
            {
              "path": "/core/IItemEffect#showFileMaskingGuide",
              "partial": "partials/modules//core/IItemEffect/index.html",
              "name": "showFileMaskingGuide"
            }
          ]
        },
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
              "path": "/core/Source#getId",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getId"
            },
            {
              "path": "/core/Source#getItemList",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getItemList"
            },
            {
              "path": "/core/Source#refresh",
              "partial": "partials/modules//core/Source/index.html",
              "name": "refresh"
            },
            {
              "path": "/core/Source#getType",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getType"
            },
            {
              "path": "/core/Source#getCurrentSource",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getCurrentSource"
            },
            {
              "path": "/core/Source#getItemList",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getItemList"
            },
            {
              "path": "/core/Source#getAllSources",
              "partial": "partials/modules//core/Source/index.html",
              "name": "getAllSources"
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
          "path": "/core/IAudio",
          "partial": "partials/modules//core/IAudio/index.html",
          "name": "IAudio",
          "type": "Interface",
          "pages": [
            {
              "path": "/core/IAudio#getVolume",
              "partial": "partials/modules//core/IAudio/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/IAudio#setVolume",
              "partial": "partials/modules//core/IAudio/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/IAudio#isMute",
              "partial": "partials/modules//core/IAudio/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/IAudio#setMute",
              "partial": "partials/modules//core/IAudio/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/IAudio#isStreamOnlyAudio",
              "partial": "partials/modules//core/IAudio/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/IAudio#setStreamOnlyAudio",
              "partial": "partials/modules//core/IAudio/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/IAudio#isAudioAvailable",
              "partial": "partials/modules//core/IAudio/index.html",
              "name": "isAudioAvailable"
            }
          ]
        },
        {
          "path": "/core/ISourceConfigurable",
          "partial": "partials/modules//core/ISourceConfigurable/index.html",
          "name": "ISourceConfigurable",
          "type": "Interface",
          "pages": [
            {
              "path": "/core/ISourceConfigurable#loadConfig",
              "partial": "partials/modules//core/ISourceConfigurable/index.html",
              "name": "loadConfig"
            },
            {
              "path": "/core/ISourceConfigurable#saveConfig",
              "partial": "partials/modules//core/ISourceConfigurable/index.html",
              "name": "saveConfig"
            },
            {
              "path": "/core/ISourceConfigurable#requestSaveConfig",
              "partial": "partials/modules//core/ISourceConfigurable/index.html",
              "name": "requestSaveConfig"
            },
            {
              "path": "/core/ISourceConfigurable#applyConfig",
              "partial": "partials/modules//core/ISourceConfigurable/index.html",
              "name": "applyConfig"
            }
          ]
        },
        {
          "path": "/core/ISourcePlayback",
          "partial": "partials/modules//core/ISourcePlayback/index.html",
          "name": "ISourcePlayback",
          "type": "Interface",
          "pages": [
            {
              "path": "/core/ISourcePlayback#isSeekable",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "isSeekable"
            },
            {
              "path": "/core/ISourcePlayback#getPlaybackPosition",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "getPlaybackPosition"
            },
            {
              "path": "/core/ISourcePlayback#setPlaybackPosition",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "setPlaybackPosition"
            },
            {
              "path": "/core/ISourcePlayback#getPlaybackDuration",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "getPlaybackDuration"
            },
            {
              "path": "/core/ISourcePlayback#isPlaying",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "isPlaying"
            },
            {
              "path": "/core/ISourcePlayback#setPlaying",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "setPlaying"
            },
            {
              "path": "/core/ISourcePlayback#getPlaybackStartPosition",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "getPlaybackStartPosition"
            },
            {
              "path": "/core/ISourcePlayback#setPlaybackStartPosition",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "setPlaybackStartPosition"
            },
            {
              "path": "/core/ISourcePlayback#getPlaybackEndPosition",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "getPlaybackEndPosition"
            },
            {
              "path": "/core/ISourcePlayback#setPlaybackEndPosition",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "setPlaybackEndPosition"
            },
            {
              "path": "/core/ISourcePlayback#getActionAfterPlayback",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "getActionAfterPlayback"
            },
            {
              "path": "/core/ISourcePlayback#setActionAfterPlayback",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "setActionAfterPlayback"
            },
            {
              "path": "/core/ISourcePlayback#isAutostartOnSceneLoad",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "isAutostartOnSceneLoad"
            },
            {
              "path": "/core/ISourcePlayback#setAutostartOnSceneLoad",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "setAutostartOnSceneLoad"
            },
            {
              "path": "/core/ISourcePlayback#isForceDeinterlace",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "isForceDeinterlace"
            },
            {
              "path": "/core/ISourcePlayback#setForceDeinterlace",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "setForceDeinterlace"
            },
            {
              "path": "/core/ISourcePlayback#isRememberingPlaybackPosition",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "isRememberingPlaybackPosition"
            },
            {
              "path": "/core/ISourcePlayback#setRememberingPlaybackPosition",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "setRememberingPlaybackPosition"
            },
            {
              "path": "/core/ISourcePlayback#isShowingPlaybackPosition",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "isShowingPlaybackPosition"
            },
            {
              "path": "/core/ISourcePlayback#setShowingPlaybackPosition",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "setShowingPlaybackPosition"
            },
            {
              "path": "/core/ISourcePlayback#getCuePoints",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "getCuePoints"
            },
            {
              "path": "/core/ISourcePlayback#setCuePoints",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "setCuePoints"
            },
            {
              "path": "/core/ISourcePlayback#getValue",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "getValue"
            },
            {
              "path": "/core/ISourcePlayback#setValue",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "setValue"
            },
            {
              "path": "/core/ISourcePlayback#isAudio",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "isAudio"
            },
            {
              "path": "/core/ISourcePlayback#isVideo",
              "partial": "partials/modules//core/ISourcePlayback/index.html",
              "name": "isVideo"
            }
          ]
        },
        {
          "path": "/core/ViewTypes",
          "partial": "partials/modules//core/ViewTypes/index.html",
          "name": "ViewTypes",
          "type": "Enum",
          "pages": [
            {
              "path": "/core/ViewTypes#MAIN",
              "partial": "partials/modules//core/ViewTypes/index.html",
              "name": "MAIN"
            },
            {
              "path": "/core/ViewTypes#PREVIEW",
              "partial": "partials/modules//core/ViewTypes/index.html",
              "name": "PREVIEW"
            },
            {
              "path": "/core/ViewTypes#THUMBNAIL",
              "partial": "partials/modules//core/ViewTypes/index.html",
              "name": "THUMBNAIL"
            }
          ]
        },
        {
          "path": "/core/ItemTypes",
          "partial": "partials/modules//core/ItemTypes/index.html",
          "name": "ItemTypes",
          "type": "Enum",
          "pages": [
            {
              "path": "/core/ItemTypes#UNDEFINED",
              "partial": "partials/modules//core/ItemTypes/index.html",
              "name": "UNDEFINED"
            },
            {
              "path": "/core/ItemTypes#FILE",
              "partial": "partials/modules//core/ItemTypes/index.html",
              "name": "FILE"
            },
            {
              "path": "/core/ItemTypes#LIVE",
              "partial": "partials/modules//core/ItemTypes/index.html",
              "name": "LIVE"
            },
            {
              "path": "/core/ItemTypes#TEXT",
              "partial": "partials/modules//core/ItemTypes/index.html",
              "name": "TEXT"
            },
            {
              "path": "/core/ItemTypes#BITMAP",
              "partial": "partials/modules//core/ItemTypes/index.html",
              "name": "BITMAP"
            },
            {
              "path": "/core/ItemTypes#SCREEN",
              "partial": "partials/modules//core/ItemTypes/index.html",
              "name": "SCREEN"
            },
            {
              "path": "/core/ItemTypes#FLASHFILE",
              "partial": "partials/modules//core/ItemTypes/index.html",
              "name": "FLASHFILE"
            },
            {
              "path": "/core/ItemTypes#GAMESOURCE",
              "partial": "partials/modules//core/ItemTypes/index.html",
              "name": "GAMESOURCE"
            },
            {
              "path": "/core/ItemTypes#HTML",
              "partial": "partials/modules//core/ItemTypes/index.html",
              "name": "HTML"
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
              "path": "/core/App#getFrameTime",
              "partial": "partials/modules//core/App/index.html",
              "name": "getFrameTime"
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
              "path": "/core/Scene#getSources",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "getSources"
            },
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
              "path": "/core/Scene#getSceneCount",
              "partial": "partials/modules//core/Scene/index.html",
              "name": "getSceneCount"
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
          "path": "/core/StreamInfo",
          "partial": "partials/modules//core/StreamInfo/index.html",
          "name": "StreamInfo",
          "type": "Class",
          "pages": [
            {
              "path": "/core/StreamInfo#getName",
              "partial": "partials/modules//core/StreamInfo/index.html",
              "name": "getName"
            },
            {
              "path": "/core/StreamInfo#getStreamDrops",
              "partial": "partials/modules//core/StreamInfo/index.html",
              "name": "getStreamDrops"
            },
            {
              "path": "/core/StreamInfo#getStreamRenderedFrames",
              "partial": "partials/modules//core/StreamInfo/index.html",
              "name": "getStreamRenderedFrames"
            },
            {
              "path": "/core/StreamInfo#getStreamTime",
              "partial": "partials/modules//core/StreamInfo/index.html",
              "name": "getStreamTime"
            },
            {
              "path": "/core/StreamInfo#getBandwidthUsage",
              "partial": "partials/modules//core/StreamInfo/index.html",
              "name": "getBandwidthUsage"
            },
            {
              "path": "/core/StreamInfo#getActiveStreamChannels",
              "partial": "partials/modules//core/StreamInfo/index.html",
              "name": "getActiveStreamChannels"
            }
          ]
        },
        {
          "path": "/core/ChannelManager",
          "partial": "partials/modules//core/ChannelManager/index.html",
          "name": "ChannelManager",
          "type": "Class",
          "pages": [
            {
              "path": "/core/ChannelManager#emit",
              "partial": "partials/modules//core/ChannelManager/index.html",
              "name": "emit"
            },
            {
              "path": "/core/ChannelManager#on",
              "partial": "partials/modules//core/ChannelManager/index.html",
              "name": "on"
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
              "path": "/core/Dll#on",
              "partial": "partials/modules//core/Dll/index.html",
              "name": "on"
            },
            {
              "path": "/core/Dll#emit",
              "partial": "partials/modules//core/Dll/index.html",
              "name": "emit"
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
              "path": "/core/Extension#getId",
              "partial": "partials/modules//core/Extension/index.html",
              "name": "getId"
            },
            {
              "path": "/core/Extension#getInstance",
              "partial": "partials/modules//core/Extension/index.html",
              "name": "getInstance"
            },
            {
              "path": "/core/Extension#finalCallback",
              "partial": "partials/modules//core/Extension/index.html",
              "name": "finalCallback"
            }
          ]
        },
        {
          "path": "/core/Output",
          "partial": "partials/modules//core/Output/index.html",
          "name": "Output",
          "type": "Class",
          "pages": [
            {
              "path": "/core/Output#getName",
              "partial": "partials/modules//core/Output/index.html",
              "name": "getName"
            },
            {
              "path": "/core/Output#startBroadcast",
              "partial": "partials/modules//core/Output/index.html",
              "name": "startBroadcast"
            },
            {
              "path": "/core/Output#stopBroadcast",
              "partial": "partials/modules//core/Output/index.html",
              "name": "stopBroadcast"
            },
            {
              "path": "/core/Output#pauseLocalRecording",
              "partial": "partials/modules//core/Output/index.html",
              "name": "pauseLocalRecording"
            },
            {
              "path": "/core/Output#unpauseLocalRecording",
              "partial": "partials/modules//core/Output/index.html",
              "name": "unpauseLocalRecording"
            },
            {
              "path": "/core/Output#getOutputList",
              "partial": "partials/modules//core/Output/index.html",
              "name": "getOutputList"
            },
            {
              "path": "/core/Output#finalCallback",
              "partial": "partials/modules//core/Output/index.html",
              "name": "finalCallback"
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
              "path": "/core/CameraItem#getAudioOffset",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getAudioOffset"
            },
            {
              "path": "/core/CameraItem#setAudioOffset",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setAudioOffset"
            },
            {
              "path": "/core/CameraItem#getAudioInput",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getAudioInput"
            },
            {
              "path": "/core/CameraItem#setAudioInput",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setAudioInput"
            },
            {
              "path": "/core/CameraItem#isStreamPaused",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isStreamPaused"
            },
            {
              "path": "/core/CameraItem#setStreamPaused",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setStreamPaused"
            },
            {
              "path": "/core/CameraItem#isHardwareEncoder",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isHardwareEncoder"
            },
            {
              "path": "/core/CameraItem#isActive",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isActive"
            },
            {
              "path": "/core/CameraItem#getDelay",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getDelay"
            },
            {
              "path": "/core/CameraItem#setDelay",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setDelay"
            },
            {
              "path": "/core/CameraItem#isForceDeinterlace",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isForceDeinterlace"
            },
            {
              "path": "/core/CameraItem#setForceDeinterlace",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setForceDeinterlace"
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
              "path": "/core/CameraItem#getCanvasRotate",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/CameraItem#getCropping",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/CameraItem#getEnhancedRotate",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getEnhancedRotate"
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
              "path": "/core/CameraItem#setCanvasRotate",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/CameraItem#setCropping",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/CameraItem#setCroppingEnhanced",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/CameraItem#setEnhancedRotate",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setEnhancedRotate"
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
              "path": "/core/CameraItem#isFullDynamicColorRange",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isFullDynamicColorRange"
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
              "path": "/core/CameraItem#setFullDynamicColorRange",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setFullDynamicColorRange"
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
            },
            {
              "path": "/core/CameraItem#getVolume",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/CameraItem#isMute",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/CameraItem#setVolume",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/CameraItem#setMute",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/CameraItem#isStreamOnlyAudio",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/CameraItem#setStreamOnlyAudio",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/CameraItem#isAudioAvailable",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isAudioAvailable"
            },
            {
              "path": "/core/CameraItem#getMaskEffect",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getMaskEffect"
            },
            {
              "path": "/core/CameraItem#setMaskEffect",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setMaskEffect"
            },
            {
              "path": "/core/CameraItem#getBorderEffectRadius",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getBorderEffectRadius"
            },
            {
              "path": "/core/CameraItem#setBorderEffectRadius",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setBorderEffectRadius"
            },
            {
              "path": "/core/CameraItem#getBorderEffectThickness",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getBorderEffectThickness"
            },
            {
              "path": "/core/CameraItem#setBorderEffectThickness",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setBorderEffectThickness"
            },
            {
              "path": "/core/CameraItem#getBorderEffectOpacity",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getBorderEffectOpacity"
            },
            {
              "path": "/core/CameraItem#setBorderEffectOpacity",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setBorderEffectOpacity"
            },
            {
              "path": "/core/CameraItem#getBorderEffectColor",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getBorderEffectColor"
            },
            {
              "path": "/core/CameraItem#setBorderEffectColor",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setBorderEffectColor"
            },
            {
              "path": "/core/CameraItem#getShadowEffectColor",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getShadowEffectColor"
            },
            {
              "path": "/core/CameraItem#setShadowEffectColor",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setShadowEffectColor"
            },
            {
              "path": "/core/CameraItem#getShadowEffectThickness",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getShadowEffectThickness"
            },
            {
              "path": "/core/CameraItem#setShadowEffectThickness",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setShadowEffectThickness"
            },
            {
              "path": "/core/CameraItem#getShadowEffectBlur",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getShadowEffectBlur"
            },
            {
              "path": "/core/CameraItem#setShadowEffectBlur",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setShadowEffectBlur"
            },
            {
              "path": "/core/CameraItem#getShadowEffectOpacity",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getShadowEffectOpacity"
            },
            {
              "path": "/core/CameraItem#setShadowEffectOpacity",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setShadowEffectOpacity"
            },
            {
              "path": "/core/CameraItem#getShadowEffectOffsetX",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getShadowEffectOffsetX"
            },
            {
              "path": "/core/CameraItem#setShadowEffectOffsetX",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setShadowEffectOffsetX"
            },
            {
              "path": "/core/CameraItem#getShadowEffectOffsetY",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getShadowEffectOffsetY"
            },
            {
              "path": "/core/CameraItem#setShadowEffectOffsetY",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setShadowEffectOffsetY"
            },
            {
              "path": "/core/CameraItem#getFileMask",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "getFileMask"
            },
            {
              "path": "/core/CameraItem#setFileMask",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "setFileMask"
            },
            {
              "path": "/core/CameraItem#isFileMaskingGuideVisible",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "isFileMaskingGuideVisible"
            },
            {
              "path": "/core/CameraItem#showFileMaskingGuide",
              "partial": "partials/modules//core/CameraItem/index.html",
              "name": "showFileMaskingGuide"
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
              "path": "/core/GameItem#getCanvasRotate",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/GameItem#getCropping",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/GameItem#getEnhancedRotate",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getEnhancedRotate"
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
              "path": "/core/GameItem#setCanvasRotate",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/GameItem#setCropping",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/GameItem#setCroppingEnhanced",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/GameItem#setEnhancedRotate",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setEnhancedRotate"
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
              "path": "/core/GameItem#isFullDynamicColorRange",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "isFullDynamicColorRange"
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
              "path": "/core/GameItem#setFullDynamicColorRange",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setFullDynamicColorRange"
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
            },
            {
              "path": "/core/GameItem#getMaskEffect",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getMaskEffect"
            },
            {
              "path": "/core/GameItem#setMaskEffect",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setMaskEffect"
            },
            {
              "path": "/core/GameItem#getBorderEffectRadius",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getBorderEffectRadius"
            },
            {
              "path": "/core/GameItem#setBorderEffectRadius",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setBorderEffectRadius"
            },
            {
              "path": "/core/GameItem#getBorderEffectThickness",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getBorderEffectThickness"
            },
            {
              "path": "/core/GameItem#setBorderEffectThickness",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setBorderEffectThickness"
            },
            {
              "path": "/core/GameItem#getBorderEffectOpacity",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getBorderEffectOpacity"
            },
            {
              "path": "/core/GameItem#setBorderEffectOpacity",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setBorderEffectOpacity"
            },
            {
              "path": "/core/GameItem#getBorderEffectColor",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getBorderEffectColor"
            },
            {
              "path": "/core/GameItem#setBorderEffectColor",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setBorderEffectColor"
            },
            {
              "path": "/core/GameItem#getShadowEffectColor",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getShadowEffectColor"
            },
            {
              "path": "/core/GameItem#setShadowEffectColor",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setShadowEffectColor"
            },
            {
              "path": "/core/GameItem#getShadowEffectThickness",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getShadowEffectThickness"
            },
            {
              "path": "/core/GameItem#setShadowEffectThickness",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setShadowEffectThickness"
            },
            {
              "path": "/core/GameItem#getShadowEffectBlur",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getShadowEffectBlur"
            },
            {
              "path": "/core/GameItem#setShadowEffectBlur",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setShadowEffectBlur"
            },
            {
              "path": "/core/GameItem#getShadowEffectOpacity",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getShadowEffectOpacity"
            },
            {
              "path": "/core/GameItem#setShadowEffectOpacity",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setShadowEffectOpacity"
            },
            {
              "path": "/core/GameItem#getShadowEffectOffsetX",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getShadowEffectOffsetX"
            },
            {
              "path": "/core/GameItem#setShadowEffectOffsetX",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setShadowEffectOffsetX"
            },
            {
              "path": "/core/GameItem#getShadowEffectOffsetY",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getShadowEffectOffsetY"
            },
            {
              "path": "/core/GameItem#setShadowEffectOffsetY",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setShadowEffectOffsetY"
            },
            {
              "path": "/core/GameItem#getFileMask",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "getFileMask"
            },
            {
              "path": "/core/GameItem#setFileMask",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "setFileMask"
            },
            {
              "path": "/core/GameItem#isFileMaskingGuideVisible",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "isFileMaskingGuideVisible"
            },
            {
              "path": "/core/GameItem#showFileMaskingGuide",
              "partial": "partials/modules//core/GameItem/index.html",
              "name": "showFileMaskingGuide"
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
              "path": "/core/AudioItem#isStreamOnlyAudio",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/AudioItem#setStreamOnlyAudio",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/AudioItem#isAudioAvailable",
              "partial": "partials/modules//core/AudioItem/index.html",
              "name": "isAudioAvailable"
            }
          ]
        },
        {
          "path": "/core/HtmlItem",
          "partial": "partials/modules//core/HtmlItem/index.html",
          "name": "HtmlItem",
          "type": "Class",
          "pages": [
            {
              "path": "/core/HtmlItem#call",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "call"
            },
            {
              "path": "/core/HtmlItem#getURL",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getURL"
            },
            {
              "path": "/core/HtmlItem#setURL",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setURL"
            },
            {
              "path": "/core/HtmlItem#isBrowserTransparent",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isBrowserTransparent"
            },
            {
              "path": "/core/HtmlItem#enableBrowserTransparency",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "enableBrowserTransparency"
            },
            {
              "path": "/core/HtmlItem#isBrowser60FPS",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isBrowser60FPS"
            },
            {
              "path": "/core/HtmlItem#enableBrowser60FPS",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "enableBrowser60FPS"
            },
            {
              "path": "/core/HtmlItem#getBrowserCustomSize",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getBrowserCustomSize"
            },
            {
              "path": "/core/HtmlItem#setBrowserCustomSize",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setBrowserCustomSize"
            },
            {
              "path": "/core/HtmlItem#getAllowRightClick",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getAllowRightClick"
            },
            {
              "path": "/core/HtmlItem#setAllowRightClick",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setAllowRightClick"
            },
            {
              "path": "/core/HtmlItem#getBrowserJS",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getBrowserJS"
            },
            {
              "path": "/core/HtmlItem#setBrowserJS",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setBrowserJS"
            },
            {
              "path": "/core/HtmlItem#isBrowserJSEnabled",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isBrowserJSEnabled"
            },
            {
              "path": "/core/HtmlItem#enableBrowserJS",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "enableBrowserJS"
            },
            {
              "path": "/core/HtmlItem#getCustomCSS",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getCustomCSS"
            },
            {
              "path": "/core/HtmlItem#setCustomCSS",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setCustomCSS"
            },
            {
              "path": "/core/HtmlItem#isCustomCSSEnabled",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isCustomCSSEnabled"
            },
            {
              "path": "/core/HtmlItem#enableCustomCSS",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "enableCustomCSS"
            },
            {
              "path": "/core/HtmlItem#isKeepAspectRatio",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/HtmlItem#isPositionLocked",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/HtmlItem#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/HtmlItem#getCanvasRotate",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/HtmlItem#getCropping",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/HtmlItem#getEnhancedRotate",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getEnhancedRotate"
            },
            {
              "path": "/core/HtmlItem#getPosition",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/HtmlItem#getRotateY",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/HtmlItem#getRotateX",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/HtmlItem#getRotateZ",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/HtmlItem#setCanvasRotate",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/HtmlItem#setCropping",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/HtmlItem#setCroppingEnhanced",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/HtmlItem#setEnhancedRotate",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setEnhancedRotate"
            },
            {
              "path": "/core/HtmlItem#setKeepAspectRatio",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/HtmlItem#setPositionLocked",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/HtmlItem#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/HtmlItem#setPosition",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/HtmlItem#setRotateY",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/HtmlItem#setRotateX",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/HtmlItem#setRotateZ",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/HtmlItem#getTransparency",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/HtmlItem#getBrightness",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/HtmlItem#getContrast",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/HtmlItem#getHue",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/HtmlItem#getSaturation",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/HtmlItem#getBorderColor",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/HtmlItem#isFullDynamicColorRange",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isFullDynamicColorRange"
            },
            {
              "path": "/core/HtmlItem#setTransparency",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/HtmlItem#setBrightness",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/HtmlItem#setContrast",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/HtmlItem#setHue",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/HtmlItem#setSaturation",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/HtmlItem#setBorderColor",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/HtmlItem#setFullDynamicColorRange",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setFullDynamicColorRange"
            },
            {
              "path": "/core/HtmlItem#isChromaEnabled",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/HtmlItem#setChromaEnabled",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/HtmlItem#getKeyingType",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/HtmlItem#setKeyingType",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/HtmlItem#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/HtmlItem#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/HtmlItem#getChromaLegacyBrightness",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/HtmlItem#setChromaLegacyBrightness",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/HtmlItem#getChromaLegacySaturation",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/HtmlItem#setChromaLegacySaturation",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/HtmlItem#getChromaLegacyHue",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/HtmlItem#setChromaLegacyHue",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/HtmlItem#getChromaLegacyThreshold",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/HtmlItem#setChromaLegacyThreshold",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/HtmlItem#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/HtmlItem#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/HtmlItem#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/HtmlItem#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/HtmlItem#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/HtmlItem#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/HtmlItem#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/HtmlItem#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/HtmlItem#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/HtmlItem#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/HtmlItem#getChromaColorKeyExposure",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/HtmlItem#setChromaColorKeyExposure",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/HtmlItem#getChromaColorKeyColor",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/HtmlItem#setChromaColorKeyColor",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/HtmlItem#isVisible",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/HtmlItem#setVisible",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/HtmlItem#getTransition",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/HtmlItem#setTransition",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/HtmlItem#getTransitionTime",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/HtmlItem#setTransitionTime",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setTransitionTime"
            },
            {
              "path": "/core/HtmlItem#loadConfig",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "loadConfig"
            },
            {
              "path": "/core/HtmlItem#saveConfig",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "saveConfig"
            },
            {
              "path": "/core/HtmlItem#requestSaveConfig",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "requestSaveConfig"
            },
            {
              "path": "/core/HtmlItem#applyConfig",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "applyConfig"
            },
            {
              "path": "/core/HtmlItem#getVolume",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/HtmlItem#isMute",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/HtmlItem#setVolume",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/HtmlItem#setMute",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/HtmlItem#isStreamOnlyAudio",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/HtmlItem#setStreamOnlyAudio",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/HtmlItem#isAudioAvailable",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isAudioAvailable"
            },
            {
              "path": "/core/HtmlItem#getMaskEffect",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getMaskEffect"
            },
            {
              "path": "/core/HtmlItem#setMaskEffect",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setMaskEffect"
            },
            {
              "path": "/core/HtmlItem#getBorderEffectRadius",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getBorderEffectRadius"
            },
            {
              "path": "/core/HtmlItem#setBorderEffectRadius",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setBorderEffectRadius"
            },
            {
              "path": "/core/HtmlItem#getBorderEffectThickness",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getBorderEffectThickness"
            },
            {
              "path": "/core/HtmlItem#setBorderEffectThickness",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setBorderEffectThickness"
            },
            {
              "path": "/core/HtmlItem#getBorderEffectOpacity",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getBorderEffectOpacity"
            },
            {
              "path": "/core/HtmlItem#setBorderEffectOpacity",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setBorderEffectOpacity"
            },
            {
              "path": "/core/HtmlItem#getBorderEffectColor",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getBorderEffectColor"
            },
            {
              "path": "/core/HtmlItem#setBorderEffectColor",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setBorderEffectColor"
            },
            {
              "path": "/core/HtmlItem#getShadowEffectColor",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getShadowEffectColor"
            },
            {
              "path": "/core/HtmlItem#setShadowEffectColor",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setShadowEffectColor"
            },
            {
              "path": "/core/HtmlItem#getShadowEffectThickness",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getShadowEffectThickness"
            },
            {
              "path": "/core/HtmlItem#setShadowEffectThickness",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setShadowEffectThickness"
            },
            {
              "path": "/core/HtmlItem#getShadowEffectBlur",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getShadowEffectBlur"
            },
            {
              "path": "/core/HtmlItem#setShadowEffectBlur",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setShadowEffectBlur"
            },
            {
              "path": "/core/HtmlItem#getShadowEffectOpacity",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getShadowEffectOpacity"
            },
            {
              "path": "/core/HtmlItem#setShadowEffectOpacity",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setShadowEffectOpacity"
            },
            {
              "path": "/core/HtmlItem#getShadowEffectOffsetX",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getShadowEffectOffsetX"
            },
            {
              "path": "/core/HtmlItem#setShadowEffectOffsetX",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setShadowEffectOffsetX"
            },
            {
              "path": "/core/HtmlItem#getShadowEffectOffsetY",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getShadowEffectOffsetY"
            },
            {
              "path": "/core/HtmlItem#setShadowEffectOffsetY",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setShadowEffectOffsetY"
            },
            {
              "path": "/core/HtmlItem#getFileMask",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "getFileMask"
            },
            {
              "path": "/core/HtmlItem#setFileMask",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "setFileMask"
            },
            {
              "path": "/core/HtmlItem#isFileMaskingGuideVisible",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "isFileMaskingGuideVisible"
            },
            {
              "path": "/core/HtmlItem#showFileMaskingGuide",
              "partial": "partials/modules//core/HtmlItem/index.html",
              "name": "showFileMaskingGuide"
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
              "path": "/core/FlashItem#getAllowRightClick",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getAllowRightClick"
            },
            {
              "path": "/core/FlashItem#setAllowRightClick",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setAllowRightClick"
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
              "path": "/core/FlashItem#getCanvasRotate",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/FlashItem#getCropping",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/FlashItem#getEnhancedRotate",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getEnhancedRotate"
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
              "path": "/core/FlashItem#setCanvasRotate",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/FlashItem#setCropping",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/FlashItem#setCroppingEnhanced",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/FlashItem#setEnhancedRotate",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setEnhancedRotate"
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
              "path": "/core/FlashItem#isFullDynamicColorRange",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "isFullDynamicColorRange"
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
              "path": "/core/FlashItem#setFullDynamicColorRange",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setFullDynamicColorRange"
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
            },
            {
              "path": "/core/FlashItem#getVolume",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/FlashItem#isMute",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/FlashItem#setVolume",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/FlashItem#setMute",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/FlashItem#isStreamOnlyAudio",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/FlashItem#setStreamOnlyAudio",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/FlashItem#isAudioAvailable",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "isAudioAvailable"
            },
            {
              "path": "/core/FlashItem#getMaskEffect",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getMaskEffect"
            },
            {
              "path": "/core/FlashItem#setMaskEffect",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setMaskEffect"
            },
            {
              "path": "/core/FlashItem#getBorderEffectRadius",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getBorderEffectRadius"
            },
            {
              "path": "/core/FlashItem#setBorderEffectRadius",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setBorderEffectRadius"
            },
            {
              "path": "/core/FlashItem#getBorderEffectThickness",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getBorderEffectThickness"
            },
            {
              "path": "/core/FlashItem#setBorderEffectThickness",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setBorderEffectThickness"
            },
            {
              "path": "/core/FlashItem#getBorderEffectOpacity",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getBorderEffectOpacity"
            },
            {
              "path": "/core/FlashItem#setBorderEffectOpacity",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setBorderEffectOpacity"
            },
            {
              "path": "/core/FlashItem#getBorderEffectColor",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getBorderEffectColor"
            },
            {
              "path": "/core/FlashItem#setBorderEffectColor",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setBorderEffectColor"
            },
            {
              "path": "/core/FlashItem#getShadowEffectColor",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getShadowEffectColor"
            },
            {
              "path": "/core/FlashItem#setShadowEffectColor",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setShadowEffectColor"
            },
            {
              "path": "/core/FlashItem#getShadowEffectThickness",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getShadowEffectThickness"
            },
            {
              "path": "/core/FlashItem#setShadowEffectThickness",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setShadowEffectThickness"
            },
            {
              "path": "/core/FlashItem#getShadowEffectBlur",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getShadowEffectBlur"
            },
            {
              "path": "/core/FlashItem#setShadowEffectBlur",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setShadowEffectBlur"
            },
            {
              "path": "/core/FlashItem#getShadowEffectOpacity",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getShadowEffectOpacity"
            },
            {
              "path": "/core/FlashItem#setShadowEffectOpacity",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setShadowEffectOpacity"
            },
            {
              "path": "/core/FlashItem#getShadowEffectOffsetX",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getShadowEffectOffsetX"
            },
            {
              "path": "/core/FlashItem#setShadowEffectOffsetX",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setShadowEffectOffsetX"
            },
            {
              "path": "/core/FlashItem#getShadowEffectOffsetY",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getShadowEffectOffsetY"
            },
            {
              "path": "/core/FlashItem#setShadowEffectOffsetY",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setShadowEffectOffsetY"
            },
            {
              "path": "/core/FlashItem#getFileMask",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "getFileMask"
            },
            {
              "path": "/core/FlashItem#setFileMask",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "setFileMask"
            },
            {
              "path": "/core/FlashItem#isFileMaskingGuideVisible",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "isFileMaskingGuideVisible"
            },
            {
              "path": "/core/FlashItem#showFileMaskingGuide",
              "partial": "partials/modules//core/FlashItem/index.html",
              "name": "showFileMaskingGuide"
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
              "path": "/core/ScreenItem#getCaptureLayered",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getCaptureLayered"
            },
            {
              "path": "/core/ScreenItem#setCaptureLayered",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setCaptureLayered"
            },
            {
              "path": "/core/ScreenItem#getOptimizedCapture",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getOptimizedCapture"
            },
            {
              "path": "/core/ScreenItem#setOptimizedCapture",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setOptimizedCapture"
            },
            {
              "path": "/core/ScreenItem#getShowMouseClicks",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getShowMouseClicks"
            },
            {
              "path": "/core/ScreenItem#setShowMouseClicks",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setShowMouseClicks"
            },
            {
              "path": "/core/ScreenItem#getShowMouse",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getShowMouse"
            },
            {
              "path": "/core/ScreenItem#setShowMouse",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setShowMouse"
            },
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
              "path": "/core/ScreenItem#getCanvasRotate",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/ScreenItem#getCropping",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/ScreenItem#getEnhancedRotate",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getEnhancedRotate"
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
              "path": "/core/ScreenItem#setCanvasRotate",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/ScreenItem#setCropping",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/ScreenItem#setCroppingEnhanced",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/ScreenItem#setEnhancedRotate",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setEnhancedRotate"
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
              "path": "/core/ScreenItem#isFullDynamicColorRange",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "isFullDynamicColorRange"
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
              "path": "/core/ScreenItem#setFullDynamicColorRange",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setFullDynamicColorRange"
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
            },
            {
              "path": "/core/ScreenItem#getMaskEffect",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getMaskEffect"
            },
            {
              "path": "/core/ScreenItem#setMaskEffect",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setMaskEffect"
            },
            {
              "path": "/core/ScreenItem#getBorderEffectRadius",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getBorderEffectRadius"
            },
            {
              "path": "/core/ScreenItem#setBorderEffectRadius",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setBorderEffectRadius"
            },
            {
              "path": "/core/ScreenItem#getBorderEffectThickness",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getBorderEffectThickness"
            },
            {
              "path": "/core/ScreenItem#setBorderEffectThickness",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setBorderEffectThickness"
            },
            {
              "path": "/core/ScreenItem#getBorderEffectOpacity",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getBorderEffectOpacity"
            },
            {
              "path": "/core/ScreenItem#setBorderEffectOpacity",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setBorderEffectOpacity"
            },
            {
              "path": "/core/ScreenItem#getBorderEffectColor",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getBorderEffectColor"
            },
            {
              "path": "/core/ScreenItem#setBorderEffectColor",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setBorderEffectColor"
            },
            {
              "path": "/core/ScreenItem#getShadowEffectColor",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getShadowEffectColor"
            },
            {
              "path": "/core/ScreenItem#setShadowEffectColor",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setShadowEffectColor"
            },
            {
              "path": "/core/ScreenItem#getShadowEffectThickness",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getShadowEffectThickness"
            },
            {
              "path": "/core/ScreenItem#setShadowEffectThickness",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setShadowEffectThickness"
            },
            {
              "path": "/core/ScreenItem#getShadowEffectBlur",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getShadowEffectBlur"
            },
            {
              "path": "/core/ScreenItem#setShadowEffectBlur",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setShadowEffectBlur"
            },
            {
              "path": "/core/ScreenItem#getShadowEffectOpacity",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getShadowEffectOpacity"
            },
            {
              "path": "/core/ScreenItem#setShadowEffectOpacity",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setShadowEffectOpacity"
            },
            {
              "path": "/core/ScreenItem#getShadowEffectOffsetX",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getShadowEffectOffsetX"
            },
            {
              "path": "/core/ScreenItem#setShadowEffectOffsetX",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setShadowEffectOffsetX"
            },
            {
              "path": "/core/ScreenItem#getShadowEffectOffsetY",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getShadowEffectOffsetY"
            },
            {
              "path": "/core/ScreenItem#setShadowEffectOffsetY",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setShadowEffectOffsetY"
            },
            {
              "path": "/core/ScreenItem#getFileMask",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "getFileMask"
            },
            {
              "path": "/core/ScreenItem#setFileMask",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "setFileMask"
            },
            {
              "path": "/core/ScreenItem#isFileMaskingGuideVisible",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "isFileMaskingGuideVisible"
            },
            {
              "path": "/core/ScreenItem#showFileMaskingGuide",
              "partial": "partials/modules//core/ScreenItem/index.html",
              "name": "showFileMaskingGuide"
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
              "path": "/core/ImageItem#getValue",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getValue"
            },
            {
              "path": "/core/ImageItem#setValue",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setValue"
            },
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
              "path": "/core/ImageItem#getCanvasRotate",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/ImageItem#getCropping",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/ImageItem#getEnhancedRotate",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getEnhancedRotate"
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
              "path": "/core/ImageItem#setCanvasRotate",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/ImageItem#setCropping",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/ImageItem#setCroppingEnhanced",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/ImageItem#setEnhancedRotate",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setEnhancedRotate"
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
              "path": "/core/ImageItem#isFullDynamicColorRange",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "isFullDynamicColorRange"
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
              "path": "/core/ImageItem#setFullDynamicColorRange",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setFullDynamicColorRange"
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
            },
            {
              "path": "/core/ImageItem#getMaskEffect",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getMaskEffect"
            },
            {
              "path": "/core/ImageItem#setMaskEffect",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setMaskEffect"
            },
            {
              "path": "/core/ImageItem#getBorderEffectRadius",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getBorderEffectRadius"
            },
            {
              "path": "/core/ImageItem#setBorderEffectRadius",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setBorderEffectRadius"
            },
            {
              "path": "/core/ImageItem#getBorderEffectThickness",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getBorderEffectThickness"
            },
            {
              "path": "/core/ImageItem#setBorderEffectThickness",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setBorderEffectThickness"
            },
            {
              "path": "/core/ImageItem#getBorderEffectOpacity",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getBorderEffectOpacity"
            },
            {
              "path": "/core/ImageItem#setBorderEffectOpacity",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setBorderEffectOpacity"
            },
            {
              "path": "/core/ImageItem#getBorderEffectColor",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getBorderEffectColor"
            },
            {
              "path": "/core/ImageItem#setBorderEffectColor",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setBorderEffectColor"
            },
            {
              "path": "/core/ImageItem#getShadowEffectColor",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getShadowEffectColor"
            },
            {
              "path": "/core/ImageItem#setShadowEffectColor",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setShadowEffectColor"
            },
            {
              "path": "/core/ImageItem#getShadowEffectThickness",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getShadowEffectThickness"
            },
            {
              "path": "/core/ImageItem#setShadowEffectThickness",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setShadowEffectThickness"
            },
            {
              "path": "/core/ImageItem#getShadowEffectBlur",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getShadowEffectBlur"
            },
            {
              "path": "/core/ImageItem#setShadowEffectBlur",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setShadowEffectBlur"
            },
            {
              "path": "/core/ImageItem#getShadowEffectOpacity",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getShadowEffectOpacity"
            },
            {
              "path": "/core/ImageItem#setShadowEffectOpacity",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setShadowEffectOpacity"
            },
            {
              "path": "/core/ImageItem#getShadowEffectOffsetX",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getShadowEffectOffsetX"
            },
            {
              "path": "/core/ImageItem#setShadowEffectOffsetX",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setShadowEffectOffsetX"
            },
            {
              "path": "/core/ImageItem#getShadowEffectOffsetY",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getShadowEffectOffsetY"
            },
            {
              "path": "/core/ImageItem#setShadowEffectOffsetY",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setShadowEffectOffsetY"
            },
            {
              "path": "/core/ImageItem#getFileMask",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "getFileMask"
            },
            {
              "path": "/core/ImageItem#setFileMask",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "setFileMask"
            },
            {
              "path": "/core/ImageItem#isFileMaskingGuideVisible",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "isFileMaskingGuideVisible"
            },
            {
              "path": "/core/ImageItem#showFileMaskingGuide",
              "partial": "partials/modules//core/ImageItem/index.html",
              "name": "showFileMaskingGuide"
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
              "path": "/core/MediaItem#getFileInfo",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getFileInfo"
            },
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
              "path": "/core/MediaItem#getCanvasRotate",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/MediaItem#getCropping",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/MediaItem#getEnhancedRotate",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getEnhancedRotate"
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
              "path": "/core/MediaItem#setCanvasRotate",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/MediaItem#setCropping",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/MediaItem#setCroppingEnhanced",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/MediaItem#setEnhancedRotate",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setEnhancedRotate"
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
              "path": "/core/MediaItem#isFullDynamicColorRange",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isFullDynamicColorRange"
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
              "path": "/core/MediaItem#setFullDynamicColorRange",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setFullDynamicColorRange"
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
            },
            {
              "path": "/core/MediaItem#isSeekable",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isSeekable"
            },
            {
              "path": "/core/MediaItem#getPlaybackPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getPlaybackPosition"
            },
            {
              "path": "/core/MediaItem#setPlaybackPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setPlaybackPosition"
            },
            {
              "path": "/core/MediaItem#getPlaybackDuration",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getPlaybackDuration"
            },
            {
              "path": "/core/MediaItem#isPlaying",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isPlaying"
            },
            {
              "path": "/core/MediaItem#setPlaying",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setPlaying"
            },
            {
              "path": "/core/MediaItem#getPlaybackStartPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getPlaybackStartPosition"
            },
            {
              "path": "/core/MediaItem#setPlaybackStartPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setPlaybackStartPosition"
            },
            {
              "path": "/core/MediaItem#getPlaybackEndPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getPlaybackEndPosition"
            },
            {
              "path": "/core/MediaItem#setPlaybackEndPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setPlaybackEndPosition"
            },
            {
              "path": "/core/MediaItem#getActionAfterPlayback",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getActionAfterPlayback"
            },
            {
              "path": "/core/MediaItem#setActionAfterPlayback",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setActionAfterPlayback"
            },
            {
              "path": "/core/MediaItem#isAutostartOnSceneLoad",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isAutostartOnSceneLoad"
            },
            {
              "path": "/core/MediaItem#setAutostartOnSceneLoad",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setAutostartOnSceneLoad"
            },
            {
              "path": "/core/MediaItem#isForceDeinterlace",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isForceDeinterlace"
            },
            {
              "path": "/core/MediaItem#setForceDeinterlace",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setForceDeinterlace"
            },
            {
              "path": "/core/MediaItem#isRememberingPlaybackPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isRememberingPlaybackPosition"
            },
            {
              "path": "/core/MediaItem#setRememberingPlaybackPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setRememberingPlaybackPosition"
            },
            {
              "path": "/core/MediaItem#isShowingPlaybackPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isShowingPlaybackPosition"
            },
            {
              "path": "/core/MediaItem#setShowingPlaybackPosition",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setShowingPlaybackPosition"
            },
            {
              "path": "/core/MediaItem#getCuePoints",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getCuePoints"
            },
            {
              "path": "/core/MediaItem#setCuePoints",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setCuePoints"
            },
            {
              "path": "/core/MediaItem#isAudio",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isAudio"
            },
            {
              "path": "/core/MediaItem#isVideo",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isVideo"
            },
            {
              "path": "/core/MediaItem#getVolume",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getVolume"
            },
            {
              "path": "/core/MediaItem#isMute",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isMute"
            },
            {
              "path": "/core/MediaItem#setVolume",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setVolume"
            },
            {
              "path": "/core/MediaItem#setMute",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setMute"
            },
            {
              "path": "/core/MediaItem#isStreamOnlyAudio",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isStreamOnlyAudio"
            },
            {
              "path": "/core/MediaItem#setStreamOnlyAudio",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setStreamOnlyAudio"
            },
            {
              "path": "/core/MediaItem#isAudioAvailable",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isAudioAvailable"
            },
            {
              "path": "/core/MediaItem#getMaskEffect",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getMaskEffect"
            },
            {
              "path": "/core/MediaItem#setMaskEffect",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setMaskEffect"
            },
            {
              "path": "/core/MediaItem#getBorderEffectRadius",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getBorderEffectRadius"
            },
            {
              "path": "/core/MediaItem#setBorderEffectRadius",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setBorderEffectRadius"
            },
            {
              "path": "/core/MediaItem#getBorderEffectThickness",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getBorderEffectThickness"
            },
            {
              "path": "/core/MediaItem#setBorderEffectThickness",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setBorderEffectThickness"
            },
            {
              "path": "/core/MediaItem#getBorderEffectOpacity",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getBorderEffectOpacity"
            },
            {
              "path": "/core/MediaItem#setBorderEffectOpacity",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setBorderEffectOpacity"
            },
            {
              "path": "/core/MediaItem#getBorderEffectColor",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getBorderEffectColor"
            },
            {
              "path": "/core/MediaItem#setBorderEffectColor",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setBorderEffectColor"
            },
            {
              "path": "/core/MediaItem#getShadowEffectColor",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getShadowEffectColor"
            },
            {
              "path": "/core/MediaItem#setShadowEffectColor",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setShadowEffectColor"
            },
            {
              "path": "/core/MediaItem#getShadowEffectThickness",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getShadowEffectThickness"
            },
            {
              "path": "/core/MediaItem#setShadowEffectThickness",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setShadowEffectThickness"
            },
            {
              "path": "/core/MediaItem#getShadowEffectBlur",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getShadowEffectBlur"
            },
            {
              "path": "/core/MediaItem#setShadowEffectBlur",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setShadowEffectBlur"
            },
            {
              "path": "/core/MediaItem#getShadowEffectOpacity",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getShadowEffectOpacity"
            },
            {
              "path": "/core/MediaItem#setShadowEffectOpacity",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setShadowEffectOpacity"
            },
            {
              "path": "/core/MediaItem#getShadowEffectOffsetX",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getShadowEffectOffsetX"
            },
            {
              "path": "/core/MediaItem#setShadowEffectOffsetX",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setShadowEffectOffsetX"
            },
            {
              "path": "/core/MediaItem#getShadowEffectOffsetY",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getShadowEffectOffsetY"
            },
            {
              "path": "/core/MediaItem#setShadowEffectOffsetY",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setShadowEffectOffsetY"
            },
            {
              "path": "/core/MediaItem#getFileMask",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "getFileMask"
            },
            {
              "path": "/core/MediaItem#setFileMask",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "setFileMask"
            },
            {
              "path": "/core/MediaItem#isFileMaskingGuideVisible",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "isFileMaskingGuideVisible"
            },
            {
              "path": "/core/MediaItem#showFileMaskingGuide",
              "partial": "partials/modules//core/MediaItem/index.html",
              "name": "showFileMaskingGuide"
            }
          ]
        },
        {
          "path": "/core/VideoPlaylistItem",
          "partial": "partials/modules//core/VideoPlaylistItem/index.html",
          "name": "VideoPlaylistItem",
          "type": "Class",
          "pages": [
            {
              "path": "/core/VideoPlaylistItem#getVideoNowPlaying",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getVideoNowPlaying"
            },
            {
              "path": "/core/VideoPlaylistItem#setVideoNowPlaying",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setVideoNowPlaying"
            },
            {
              "path": "/core/VideoPlaylistItem#getVideoPlaylistSources",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getVideoPlaylistSources"
            },
            {
              "path": "/core/VideoPlaylistItem#setVideoPlaylistSources",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setVideoPlaylistSources"
            },
            {
              "path": "/core/VideoPlaylistItem#isKeepAspectRatio",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isKeepAspectRatio"
            },
            {
              "path": "/core/VideoPlaylistItem#isPositionLocked",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isPositionLocked"
            },
            {
              "path": "/core/VideoPlaylistItem#isEnhancedResizeEnabled",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isEnhancedResizeEnabled"
            },
            {
              "path": "/core/VideoPlaylistItem#getCanvasRotate",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getCanvasRotate"
            },
            {
              "path": "/core/VideoPlaylistItem#getCropping",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getCropping"
            },
            {
              "path": "/core/VideoPlaylistItem#getEnhancedRotate",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getEnhancedRotate"
            },
            {
              "path": "/core/VideoPlaylistItem#getPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#getRotateY",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getRotateY"
            },
            {
              "path": "/core/VideoPlaylistItem#getRotateX",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getRotateX"
            },
            {
              "path": "/core/VideoPlaylistItem#getRotateZ",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getRotateZ"
            },
            {
              "path": "/core/VideoPlaylistItem#setCanvasRotate",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setCanvasRotate"
            },
            {
              "path": "/core/VideoPlaylistItem#setCropping",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setCropping"
            },
            {
              "path": "/core/VideoPlaylistItem#setCroppingEnhanced",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setCroppingEnhanced"
            },
            {
              "path": "/core/VideoPlaylistItem#setEnhancedRotate",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setEnhancedRotate"
            },
            {
              "path": "/core/VideoPlaylistItem#setKeepAspectRatio",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setKeepAspectRatio"
            },
            {
              "path": "/core/VideoPlaylistItem#setPositionLocked",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setPositionLocked"
            },
            {
              "path": "/core/VideoPlaylistItem#setEnhancedResizeEnabled",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setEnhancedResizeEnabled"
            },
            {
              "path": "/core/VideoPlaylistItem#setPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#setRotateY",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setRotateY"
            },
            {
              "path": "/core/VideoPlaylistItem#setRotateX",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setRotateX"
            },
            {
              "path": "/core/VideoPlaylistItem#setRotateZ",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setRotateZ"
            },
            {
              "path": "/core/VideoPlaylistItem#getTransparency",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getTransparency"
            },
            {
              "path": "/core/VideoPlaylistItem#getBrightness",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getBrightness"
            },
            {
              "path": "/core/VideoPlaylistItem#getContrast",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getContrast"
            },
            {
              "path": "/core/VideoPlaylistItem#getHue",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getHue"
            },
            {
              "path": "/core/VideoPlaylistItem#getSaturation",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getSaturation"
            },
            {
              "path": "/core/VideoPlaylistItem#getBorderColor",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getBorderColor"
            },
            {
              "path": "/core/VideoPlaylistItem#isFullDynamicColorRange",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isFullDynamicColorRange"
            },
            {
              "path": "/core/VideoPlaylistItem#setTransparency",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setTransparency"
            },
            {
              "path": "/core/VideoPlaylistItem#setBrightness",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setBrightness"
            },
            {
              "path": "/core/VideoPlaylistItem#setContrast",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setContrast"
            },
            {
              "path": "/core/VideoPlaylistItem#setHue",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setHue"
            },
            {
              "path": "/core/VideoPlaylistItem#setSaturation",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setSaturation"
            },
            {
              "path": "/core/VideoPlaylistItem#setBorderColor",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setBorderColor"
            },
            {
              "path": "/core/VideoPlaylistItem#setFullDynamicColorRange",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setFullDynamicColorRange"
            },
            {
              "path": "/core/VideoPlaylistItem#isChromaEnabled",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isChromaEnabled"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaEnabled",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaEnabled"
            },
            {
              "path": "/core/VideoPlaylistItem#getKeyingType",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getKeyingType"
            },
            {
              "path": "/core/VideoPlaylistItem#setKeyingType",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setKeyingType"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaAntiAliasLevel",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaAntiAliasLevel"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaAntiAliasLevel",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaAntiAliasLevel"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaLegacyBrightness",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaLegacyBrightness"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaLegacyBrightness",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaLegacyBrightness"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaLegacySaturation",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaLegacySaturation"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaLegacySaturation",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaLegacySaturation"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaLegacyHue",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaLegacyHue"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaLegacyHue",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaLegacyHue"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaLegacyThreshold",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaLegacyThreshold"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaLegacyThreshold",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaLegacyThreshold"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaLegacyAlphaSmoothing",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaLegacyAlphaSmoothing"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaRGBKeyPrimaryColor",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaRGBKeyPrimaryColor"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaRGBKeyThreshold",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaRGBKeyThreshold"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaRGBKeyThreshold",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaRGBKeyThreshold"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaRGBKeyExposure",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaRGBKeyExposure"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaRGBKeyExposure",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaRGBKeyExposure"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaColorKeyThreshold",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaColorKeyThreshold"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaColorKeyThreshold",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaColorKeyThreshold"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaColorKeyExposure",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaColorKeyExposure"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaColorKeyExposure",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaColorKeyExposure"
            },
            {
              "path": "/core/VideoPlaylistItem#getChromaColorKeyColor",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getChromaColorKeyColor"
            },
            {
              "path": "/core/VideoPlaylistItem#setChromaColorKeyColor",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setChromaColorKeyColor"
            },
            {
              "path": "/core/VideoPlaylistItem#isVisible",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isVisible"
            },
            {
              "path": "/core/VideoPlaylistItem#setVisible",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setVisible"
            },
            {
              "path": "/core/VideoPlaylistItem#getTransition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getTransition"
            },
            {
              "path": "/core/VideoPlaylistItem#setTransition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setTransition"
            },
            {
              "path": "/core/VideoPlaylistItem#getTransitionTime",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getTransitionTime"
            },
            {
              "path": "/core/VideoPlaylistItem#setTransitionTime",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setTransitionTime"
            },
            {
              "path": "/core/VideoPlaylistItem#loadConfig",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "loadConfig"
            },
            {
              "path": "/core/VideoPlaylistItem#saveConfig",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "saveConfig"
            },
            {
              "path": "/core/VideoPlaylistItem#requestSaveConfig",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "requestSaveConfig"
            },
            {
              "path": "/core/VideoPlaylistItem#applyConfig",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "applyConfig"
            },
            {
              "path": "/core/VideoPlaylistItem#isSeekable",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isSeekable"
            },
            {
              "path": "/core/VideoPlaylistItem#getPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#setPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#getPlaybackDuration",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getPlaybackDuration"
            },
            {
              "path": "/core/VideoPlaylistItem#isPlaying",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isPlaying"
            },
            {
              "path": "/core/VideoPlaylistItem#setPlaying",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setPlaying"
            },
            {
              "path": "/core/VideoPlaylistItem#getPlaybackStartPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getPlaybackStartPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#setPlaybackStartPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setPlaybackStartPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#getPlaybackEndPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getPlaybackEndPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#setPlaybackEndPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setPlaybackEndPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#getActionAfterPlayback",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getActionAfterPlayback"
            },
            {
              "path": "/core/VideoPlaylistItem#setActionAfterPlayback",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setActionAfterPlayback"
            },
            {
              "path": "/core/VideoPlaylistItem#isAutostartOnSceneLoad",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isAutostartOnSceneLoad"
            },
            {
              "path": "/core/VideoPlaylistItem#setAutostartOnSceneLoad",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setAutostartOnSceneLoad"
            },
            {
              "path": "/core/VideoPlaylistItem#isForceDeinterlace",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isForceDeinterlace"
            },
            {
              "path": "/core/VideoPlaylistItem#setForceDeinterlace",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setForceDeinterlace"
            },
            {
              "path": "/core/VideoPlaylistItem#isRememberingPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isRememberingPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#setRememberingPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setRememberingPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#isShowingPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isShowingPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#setShowingPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setShowingPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistItem#getCuePoints",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "getCuePoints"
            },
            {
              "path": "/core/VideoPlaylistItem#setCuePoints",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "setCuePoints"
            },
            {
              "path": "/core/VideoPlaylistItem#isAudio",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isAudio"
            },
            {
              "path": "/core/VideoPlaylistItem#isVideo",
              "partial": "partials/modules//core/VideoPlaylistItem/index.html",
              "name": "isVideo"
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
              "path": "/core/HtmlSource#isBrowser60FPS",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "isBrowser60FPS"
            },
            {
              "path": "/core/HtmlSource#enableBrowser60FPS",
              "partial": "partials/modules//core/HtmlSource/index.html",
              "name": "enableBrowser60FPS"
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
              "path": "/core/ScreenSource#getCaptureLayered",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getCaptureLayered"
            },
            {
              "path": "/core/ScreenSource#setCaptureLayered",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setCaptureLayered"
            },
            {
              "path": "/core/ScreenSource#getOptimizedCapture",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getOptimizedCapture"
            },
            {
              "path": "/core/ScreenSource#setOptimizedCapture",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setOptimizedCapture"
            },
            {
              "path": "/core/ScreenSource#getShowMouseClicks",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getShowMouseClicks"
            },
            {
              "path": "/core/ScreenSource#setShowMouseClicks",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setShowMouseClicks"
            },
            {
              "path": "/core/ScreenSource#getShowMouse",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "getShowMouse"
            },
            {
              "path": "/core/ScreenSource#setShowMouse",
              "partial": "partials/modules//core/ScreenSource/index.html",
              "name": "setShowMouse"
            },
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
              "path": "/core/ImageSource#getValue",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "getValue"
            },
            {
              "path": "/core/ImageSource#setValue",
              "partial": "partials/modules//core/ImageSource/index.html",
              "name": "setValue"
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
        },
        {
          "path": "/core/VideoPlaylistSource",
          "partial": "partials/modules//core/VideoPlaylistSource/index.html",
          "name": "VideoPlaylistSource",
          "type": "Class",
          "pages": [
            {
              "path": "/core/VideoPlaylistSource#getVideoNowPlaying",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "getVideoNowPlaying"
            },
            {
              "path": "/core/VideoPlaylistSource#setVideoNowPlaying",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setVideoNowPlaying"
            },
            {
              "path": "/core/VideoPlaylistSource#getVideoPlaylistSources",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "getVideoPlaylistSources"
            },
            {
              "path": "/core/VideoPlaylistSource#setVideoPlaylistSources",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setVideoPlaylistSources"
            },
            {
              "path": "/core/VideoPlaylistSource#loadConfig",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "loadConfig"
            },
            {
              "path": "/core/VideoPlaylistSource#saveConfig",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "saveConfig"
            },
            {
              "path": "/core/VideoPlaylistSource#requestSaveConfig",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "requestSaveConfig"
            },
            {
              "path": "/core/VideoPlaylistSource#applyConfig",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "applyConfig"
            },
            {
              "path": "/core/VideoPlaylistSource#isSeekable",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "isSeekable"
            },
            {
              "path": "/core/VideoPlaylistSource#getPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "getPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistSource#setPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistSource#getPlaybackDuration",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "getPlaybackDuration"
            },
            {
              "path": "/core/VideoPlaylistSource#isPlaying",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "isPlaying"
            },
            {
              "path": "/core/VideoPlaylistSource#setPlaying",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setPlaying"
            },
            {
              "path": "/core/VideoPlaylistSource#getPlaybackStartPosition",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "getPlaybackStartPosition"
            },
            {
              "path": "/core/VideoPlaylistSource#setPlaybackStartPosition",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setPlaybackStartPosition"
            },
            {
              "path": "/core/VideoPlaylistSource#getPlaybackEndPosition",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "getPlaybackEndPosition"
            },
            {
              "path": "/core/VideoPlaylistSource#setPlaybackEndPosition",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setPlaybackEndPosition"
            },
            {
              "path": "/core/VideoPlaylistSource#getActionAfterPlayback",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "getActionAfterPlayback"
            },
            {
              "path": "/core/VideoPlaylistSource#setActionAfterPlayback",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setActionAfterPlayback"
            },
            {
              "path": "/core/VideoPlaylistSource#isAutostartOnSceneLoad",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "isAutostartOnSceneLoad"
            },
            {
              "path": "/core/VideoPlaylistSource#setAutostartOnSceneLoad",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setAutostartOnSceneLoad"
            },
            {
              "path": "/core/VideoPlaylistSource#isForceDeinterlace",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "isForceDeinterlace"
            },
            {
              "path": "/core/VideoPlaylistSource#setForceDeinterlace",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setForceDeinterlace"
            },
            {
              "path": "/core/VideoPlaylistSource#isRememberingPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "isRememberingPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistSource#setRememberingPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setRememberingPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistSource#isShowingPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "isShowingPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistSource#setShowingPlaybackPosition",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setShowingPlaybackPosition"
            },
            {
              "path": "/core/VideoPlaylistSource#getCuePoints",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "getCuePoints"
            },
            {
              "path": "/core/VideoPlaylistSource#setCuePoints",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "setCuePoints"
            },
            {
              "path": "/core/VideoPlaylistSource#isAudio",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "isAudio"
            },
            {
              "path": "/core/VideoPlaylistSource#isVideo",
              "partial": "partials/modules//core/VideoPlaylistSource/index.html",
              "name": "isVideo"
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
            },
            {
              "path": "/util/IO#finalCallback",
              "partial": "partials/modules//util/IO/index.html",
              "name": "finalCallback"
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
              "path": "/util/EventEmitter#off",
              "partial": "partials/modules//util/EventEmitter/index.html",
              "name": "off"
            },
            {
              "path": "/util/EventEmitter#emit",
              "partial": "partials/modules//util/EventEmitter/index.html",
              "name": "emit"
            },
            {
              "path": "/util/EventEmitter#setCallback",
              "partial": "partials/modules//util/EventEmitter/index.html",
              "name": "setCallback"
            },
            {
              "path": "/util/EventEmitter#finalCallback",
              "partial": "partials/modules//util/EventEmitter/index.html",
              "name": "finalCallback"
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
            },
            {
              "path": "/window/SourcePluginWindow#emit",
              "partial": "partials/modules//window/SourcePluginWindow/index.html",
              "name": "emit"
            },
            {
              "path": "/window/SourcePluginWindow#on",
              "partial": "partials/modules//window/SourcePluginWindow/index.html",
              "name": "on"
            },
            {
              "path": "/window/SourcePluginWindow#off",
              "partial": "partials/modules//window/SourcePluginWindow/index.html",
              "name": "off"
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
              "path": "/window/ExtensionWindow#setTitle",
              "partial": "partials/modules//window/ExtensionWindow/index.html",
              "name": "setTitle"
            },
            {
              "path": "/window/ExtensionWindow#setBorder",
              "partial": "partials/modules//window/ExtensionWindow/index.html",
              "name": "setBorder"
            },
            {
              "path": "/window/ExtensionWindow#close",
              "partial": "partials/modules//window/ExtensionWindow/index.html",
              "name": "close"
            },
            {
              "path": "/window/ExtensionWindow#disableClose",
              "partial": "partials/modules//window/ExtensionWindow/index.html",
              "name": "disableClose"
            },
            {
              "path": "/window/ExtensionWindow#enableClose",
              "partial": "partials/modules//window/ExtensionWindow/index.html",
              "name": "enableClose"
            },
            {
              "path": "/window/ExtensionWindow#getInstance",
              "partial": "partials/modules//window/ExtensionWindow/index.html",
              "name": "getInstance"
            },
            {
              "path": "/window/ExtensionWindow#emit",
              "partial": "partials/modules//window/ExtensionWindow/index.html",
              "name": "emit"
            },
            {
              "path": "/window/ExtensionWindow#on",
              "partial": "partials/modules//window/ExtensionWindow/index.html",
              "name": "on"
            },
            {
              "path": "/window/ExtensionWindow#off",
              "partial": "partials/modules//window/ExtensionWindow/index.html",
              "name": "off"
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
    },
    {
      "path": "/internal",
      "partial": "partials/modules/internal/index.html",
      "name": "Internal",
      "type": "Module",
      "pages": [
        {
          "path": "/internal/Remote",
          "partial": "partials/modules//internal/Remote/index.html",
          "name": "Remote",
          "type": "Class",
          "pages": [
            {
              "path": "/internal/Remote#sendMessage",
              "partial": "partials/modules//internal/Remote/index.html",
              "name": "sendMessage"
            },
            {
              "path": "/internal/Remote#remoteType",
              "partial": "partials/modules//internal/Remote/index.html",
              "name": "remoteType"
            },
            {
              "path": "/internal/Remote#receiveMessage",
              "partial": "partials/modules//internal/Remote/index.html",
              "name": "receiveMessage"
            }
          ]
        }
      ]
    }
  ]
});