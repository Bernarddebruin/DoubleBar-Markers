define(["./echarts-en", "qlik", "./definition",],function(echarts, qlik, definition,){
  var app = qlik.currApp();
  return{
    definition: definition,
    initialProperties: {
      qHyperCubeDef: {
        qInitialDataFetch: [
          {
            qTop: 0,
            qLeft: 0,
            qWidth: 10,
            qHeight: 1000
          }
        ]
      }
    },
    controller: function($scope, $element){
      $scope.eChart = echarts.init($element[0]);
      $scope.selectedElemNums;
      $scope.chartColours = [];
      $scope.eChart.on("click", function(c){
        $scope.selectValues(0,[c.data.elemNumber])  //Make the selection in Qlik
        if (c.selected) {
          c.data.itemStyle.normal.color = ""   //Change the colour back to the default
        }
        else {
          c.data.itemStyle.normal.color = "#FFAA00"   //Update the colour of the current bar
        }
        c.data.selected = !c.data.selected;
        $scope.eChart.setOption({});  // Force the chart to update itself
      })
    },
    resize: function(){
      this.$scope.eChart.resize();
    },
    paint: function($element, layout){
      var that = this;
      var xData = [];
      var matrix = layout.qHyperCube.qDataPages[0].qMatrix;
      console.log(layout);
      var dataMeasure = [];
      var seriesControl =[];

      matrix.forEach(function(row){
        xData.push({
          value: row[0].qText
        });})


      for (var i = 1; i < layout.qHyperCube.qDataPages["0"].qMatrix["0"].length; i++) {
        dataMeasure[i-1] = [];
        matrix.forEach(function(row){
        dataMeasure[i-1].push({
            elemNumber: row[0].qElemNumber,
            psuedoSelected: false,  //We'll use this to toggle the colours
            dimensionLabel: row[0].qText,  // Store the label text for the tooltip
            value: row[i].qNum, //The raw num will be used for the bar size
            parsedValue: row[1].qText, //The friendly value can be used in the popup
            measureLabel: layout.qHyperCube.qMeasureInfo[0].qFallbackTitle,
            extraInfo: ((row[2])?row[2].qText:''),  //This demonstrates that we can add extra info using additional measures
            itemStyle: {  //This sets up the default colours for the bars
              normal: {

              }
            }
          })
        })
      };

      for (var i = 1; i < layout.qHyperCube.qDataPages["0"].qMatrix["0"].length; i++) {
        seriesControl.push({
            name:layout.qHyperCube.qMeasureInfo[i-1].qFallbackTitle,
            type:'bar',
            data: dataMeasure[i-1],
            itemStyle: {
              normal: {
                color: layout.qHyperCube.qMeasureInfo[i-1].Colour.color
              }
            },
            markPoint :{
              symbol: layout.qHyperCube.qMeasureInfo[i-1].marktPointShape,
              symbolSize: [layout.qHyperCube.qMeasureInfo[i-1].marktPointWidth, layout.qHyperCube.qMeasureInfo[i-1].marktPointHeight],
              symbolOffset: [layout.qHyperCube.qMeasureInfo[i-1].marktPointOffSetCenter, layout.qHyperCube.qMeasureInfo[i-1].marktPointOffSetHeight],
              data : [(layout.qHyperCube.qMeasureInfo[i-1].marktpointMin?{type: 'min', name: 'lowest'}:{}),
                      (layout.qHyperCube.qMeasureInfo[i-1].marktpointMax?{type : 'max', name: 'Highest'}:{})],
            },
            markLine : (layout.qHyperCube.qMeasureInfo[i-1].marktLineShow===false?{}:{
              data : [
                  {name: 'average', type : 'average'}
              ]
            })
        },)
      }
      var legendDataCount = layout.qHyperCube.qMeasureInfo.length;
      var legendData = []
      var measuresInfo = layout.qHyperCube.qMeasureInfo
      for (var i = 0; i < legendDataCount; i++) {
          legendData.push(layout.qHyperCube.qMeasureInfo[i].qFallbackTitle)
      }
      console.log(legendData);

      console.log(seriesControl);
            if (layout.toolboxLine == true) {
              var lineAct = 'line'
            } else {
              var lineAct
            };
            if (layout.toolboxBar == true) {
              var barAct = 'bar'
            } else {
              var barAct
            };
            if (layout.toolboxStacked == true) {
              var stackAct = 'stack'
            } else {
              var stackAct
            };

            var options = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
              data: legendData,
            },
            toolbox: {
                show : layout.toolboxHandle,
                feature : {
                    dataView : {show: layout.toolboxDataview, readOnly: false},
                    magicType : {show: layout.toolboxHandle, type: [lineAct, stackAct, barAct]},
                    restore : {show: layout.toolboxRestore},
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : xData
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : seriesControl
        };
        console.log(seriesControl);
      this.$scope.eChart.setOption(options);
    }
  }
});
