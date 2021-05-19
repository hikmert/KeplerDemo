export function getMapConfig() {
  
  return {
    "version": "v1",
    "config": {
      "visState": {
        "filters": [
          {
            "dataId": [
              "e10scy4mh"
            ],
            "id": "lnsx9d4vc",
            "name": [
              "start_time"
            ],
            "type": "timeRange",
            "value": [
              1605978422000,
              1606068179000
            ],
            "enlarged": false,
            "plotType": "histogram",
            "animationWindow": "free",
            "yAxis": null,
            "speed": 1
          }
        ],
        "layers": [
          {
            "id": "8t63in",
            "type": "trip",
            "config": {
              "dataId": "n86u9qguh",
              "label": "triplayer",
              "color": [
                18,
                147,
                154
              ],
              "columns": {
                "geojson": "_geojson"
              },
              "isVisible": true,
              "visConfig": {
                "opacity": 0.8,
                "thickness": 1.9,
                "colorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "trailLength": 669,
                "sizeRange": [
                  0,
                  10
                ]
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "colorField": null,
              "colorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear"
            }
          },
          {
            "id": "5ab8iab",
            "type": "hexagon",
            "config": {
              "dataId": "e10scy4mh",
              "label": "grid",
              "color": [
                246,
                209,
                138
              ],
              "columns": {
                "lat": "lat",
                "lng": "lon"
              },
              "isVisible": true,
              "visConfig": {
                "opacity": 0.8,
                "worldUnitSize": 0.2,
                "resolution": 8,
                "colorRange": {
                  "name": "Global Warming",
                  "type": "sequential",
                  "category": "Uber",
                  "colors": [
                    "#5A1846",
                    "#900C3F",
                    "#C70039",
                    "#E3611C",
                    "#F1920E",
                    "#FFC300"
                  ]
                },
                "coverage": 1,
                "sizeRange": [
                  0,
                  500
                ],
                "percentile": [
                  0,
                  100
                ],
                "elevationPercentile": [
                  0,
                  100
                ],
                "elevationScale": 13,
                "colorAggregation": "count",
                "sizeAggregation": "count",
                "enable3d": true
              },
              "hidden": false,
              "textLabel": [
                {
                  "field": null,
                  "color": [
                    255,
                    255,
                    255
                  ],
                  "size": 18,
                  "offset": [
                    0,
                    0
                  ],
                  "anchor": "start",
                  "alignment": "center"
                }
              ]
            },
            "visualChannels": {
              "colorField": null,
              "colorScale": "quantile",
              "sizeField": null,
              "sizeScale": "linear"
            }
          }
        ],
        "interactionConfig": {
          "tooltip": {
            "fieldsToShow": {
              "e10scy4mh": [
                {
                  "name": "0",
                  "format": null
                },
                {
                  "name": "10",
                  "format": null
                },
                {
                  "name": "person_id",
                  "format": null
                },
                {
                  "name": "activity_id",
                  "format": null
                },
                {
                  "name": "facility_id",
                  "format": null
                }
              ],
              "n86u9qguh": [
                {
                  "name": "trip",
                  "format": null
                }
              ]
            },
            "compareMode": false,
            "compareType": "absolute",
            "enabled": true
          },
          "brush": {
            "size": 0.5,
            "enabled": false
          },
          "geocoder": {
            "enabled": false
          },
          "coordinate": {
            "enabled": false
          }
        },
        "layerBlending": "additive",
        "splitMaps": [],
        "animationConfig": {
          "currentTime": 1606003749320,
          "speed": 1
        }
      },
      "mapState": {
        "bearing": 0,
        "dragRotate": false,
        "latitude": 1.368558652377974,
        "longitude": 103.81382996125573,
        "pitch": 0,
        "zoom": 13.909629491061953,
        "isSplit": false
      },
      "mapStyle": {
        "styleType": "muted_night",
        "topLayerGroups": {},
        "visibleLayerGroups": {
          "label": true,
          "road": true,
          "border": false,
          "building": true,
          "water": true,
          "land": true,
          "3d building": false
        },
        "threeDBuildingColor": [
          26.848523094644484,
          31.1442867897876,
          35.440050484930715
        ],
        "mapStyles": {}
      }
    }
  };
};