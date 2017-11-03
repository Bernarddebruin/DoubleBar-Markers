define([], function(){
  return {
    component: "accordion",
    type: "items",
    items: {
      dimensions: {
        uses: "dimensions",
        min: 1,
        max: 2,
      },
      measures: {
        uses: "measures",
        min: 2,
        max: 2,
        items: {
          color: {
            ref: "qDef.Colour",
            label: "Colour",
            component: "color-picker",
            dualOutput: true,
            type: "object",
            defaultValue: {
              color: "#CCCCCC",
              index: -1
            }
          },
          Markpointers: {
            label: 'Markpointers',
            items: {
              marktpoint: {
                type: 'boolean',
                component: 'switch',
                label: 'Show Markt Point on/off',
                ref: 'qDef.showMarktPoint',
                default: true,
                options: [{
                  value: true,
                  label: 'On'
                },{
                  value: false,
                  label: 'Off'
                }]
              },
              marktLineShow: {
                type: 'boolean',
                label: 'Show marktLine avg on/off',
                ref: 'qDef.marktLineShow',
                default: true,
              },
              marktpointShape: {
                type: 'string',
                component: 'dropdown',
                label: 'Marktpoint Shape',
                ref: 'qDef.marktPointShape',
                show: function(d){
                  return d.qDef.showMarktPoint
                },
                options: [{
                  value: 'circle',
                  label: 'Circle'
                },{
                  value: 'pin',
                  label: 'Pin'
                },{
                  value: 'arrow',
                  label: 'Arrow'
                },{
                  value: 'roundRect',
                  label: 'Rounded Rectangle'
                },{
                  value: 'triangle',
                  label: 'Triangle'
                },{
                  value: 'rect',
                  label: 'Rectangle'
                },{
                  value: 'diamond',
                  label: 'Diamond'
                },]
              },
              marktPointWidth: {
                type: 'number',
                label: 'Marktpoint Width(#)',
                ref: 'qDef.marktPointWidth',
                default: 50,
                show: function(d){
                  return d.qDef.showMarktPoint
                }
              },
              marktPointHeight: {
                type: 'number',
                label: 'Marktpoint Height(#)',
                ref: 'qDef.marktPointHeight',
                default: 50,
                show: function(d){
                  return d.qDef.showMarktPoint
                }
              },
              marktPointOffSetHeight: {
                type: 'number',
                label: 'Marktpoint ofset height(#)',
                ref: 'qDef.marktPointOffSetHeight',
                default: 0,
                show: function(d){
                  return d.qDef.showMarktPoint
                }
              },
              marktPointOffSetCenter: {
                type: 'number',
                label: 'Marktpoint ofset center(#)',
                ref: 'qDef.marktPointOffSetCenter',
                default: 0,
                show: function(d){
                  return d.qDef.showMarktPoint
                }
              },
              marktPointMin: {
                type: 'boolean',
                label: 'Show Markpoint min on/off',
                ref: 'qDef.marktpointMin',
                default: true,
                show: function(d){
                  return d.qDef.showMarktPoint
                }
              },
              marktPointMax: {
                type: 'boolean',
                label: 'Show Markpoint max on/off',
                ref: 'qDef.marktpointMax',
                default: true,
                show: function(d){
                  return d.qDef.showMarktPoint
                }
              },
            }
          }
        }
      },
      settings: {
        uses: "settings"
      },
      layout: {
        label: 'Layout',
        component: "expandable-items",
        items: {
          toolbox: {
            label: "Toolbox",
            items: {
              toolboxHandle: {
                type: 'string',
                component: 'dropdown',
                label: 'Toolbox Visable/Hidden',
                ref: 'toolboxHandle',
                default: true,
                options: [{
                  value: true,
                  label: 'Visable'
                },{
                  value: false,
                  label: 'Hidden'
                }]
              },
              lineChart: {
                type: "boolean",
                label: "Line Chart",
                ref: "toolboxLine",
                defaultValue: false
              },
              barChart: {
                type: "boolean",
                label: "Bar chart",
                ref: "toolboxBar",
                defaultValue: false
              },
              stacked: {
                type: "boolean",
                label: "Stacked charts",
                ref: "toolboxStacked",
                defaultValue: false
              },
              toolboxRestore: {
                type: 'boolean',
                label: 'Toolbox Restore on/off',
                ref: 'toolboxRestore',
              },
              toolboxDataview: {
                type: 'boolean',
                label: 'Toolbox show Data on/off',
                ref: 'toolboxDataview'
              }
            }
          }
        }
      }
    }

  }
})
