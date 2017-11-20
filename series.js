define([], function(){
  return [
      {
          name:layout.qHyperCube.qMeasureInfo[0].qFallbackTitle,
          type:'bar',
          data: dataMeasure[0],
          itemStyle: {
            normal: {
              color: layout.qHyperCube.qMeasureInfo[0].Colour.color
            }
          },
          markPoint :{
            symbol: layout.qHyperCube.qMeasureInfo[0].marktPointShape,
            symbolSize: [layout.qHyperCube.qMeasureInfo[0].marktPointWidth, layout.qHyperCube.qMeasureInfo[0].marktPointHeight],
            symbolOffset: [layout.qHyperCube.qMeasureInfo[0].marktPointOffSetCenter, layout.qHyperCube.qMeasureInfo[0].marktPointOffSetHeight],
            data : [(layout.qHyperCube.qMeasureInfo[0].marktpointMin?{type: 'min', name: 'lowest'}:{}),
                    (layout.qHyperCube.qMeasureInfo[0].marktpointMax?{type : 'max', name: 'Highest'}:{})],
          },
          markLine : (layout.qHyperCube.qMeasureInfo[0].marktLineShow===false?{}:{
            data : [
                {name: 'average', type : 'average'}
            ]
          })
      },
      {
          name: layout.qHyperCube.qMeasureInfo[1].qFallbackTitle,
          type:'bar',
          data: dataMeasure[1],
          itemStyle: {
            normal: {
              color: layout.qHyperCube.qMeasureInfo[1].Colour.color
            }
          },
          markPoint :{
            symbol: layout.qHyperCube.qMeasureInfo[1].marktPointShape,
            symbolSize: [layout.qHyperCube.qMeasureInfo[1].marktPointWidth, layout.qHyperCube.qMeasureInfo[1].marktPointHeight],
            symbolOffset: [layout.qHyperCube.qMeasureInfo[1].marktPointOffSetCenter, layout.qHyperCube.qMeasureInfo[1].marktPointOffSetHeight],
            data : [(layout.qHyperCube.qMeasureInfo[1].marktpointMin?{type: 'min', name: 'lowest'}:{}),
                    (layout.qHyperCube.qMeasureInfo[1].marktpointMax?{type : 'max', name: 'Highest'}:{})],
          },
          markLine : (layout.qHyperCube.qMeasureInfo[1].marktLineShow===false?{}:{
            data : [
                {name: 'average', type : 'average'}
            ]
          })
      },
  ]
})
