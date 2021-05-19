import gridSettings from './gridLayer';

const mapStyle = {
	 styleType: "dark",
	 topLayerGroups: {},
	 visibleLayerGroups: {
	    "label": true,
	    "road": true,
	    "border": false,
	    "building": true,
	    "water": true,
	    "land": true
	 }
};

const interactionConfig = {
	tooltip: {
        fieldsToShow: {
            "activity_data": [
              "type"
            ]
        },
        enabled: true
    },
    brush: {
        enabled: false
    }
};

export function getMapConfig() {
  
  return {
      version: "v1",
      config: {
        visState: {
          filters: [],
          layers: [ gridSettings.config ],
          interactionConfig,
          layerBlending: "normal",
          splitMaps: []
        },
        mapState: gridSettings.mapState,
        mapStyle
      }
  };
};