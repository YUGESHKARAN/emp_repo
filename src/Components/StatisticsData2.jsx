import React from 'react'


import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Legend } from 'chart.js'
import { BsBorderWidth } from 'react-icons/bs';
import { MdBorderColor } from 'react-icons/md';


export default function StatisticsData2() {

    const options = {
        chart: {
          type: 'areaspline',
          backgroundColor: 'transparent',
          height:280,
          width:400,
          style:{
          fontSize:'9px',
          fontWeight:'600',
    
          
          }
        },
        title: {
          text: '',
          
        },
        xAxis: {
          categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
          tickmarkPlacement: 'on',
          style:{
            fontSize:'9px'
          }
          ,
          title: {
            enabled: false,
          },
          lineColor: '#000',  // X-axis line color
          lineWidth: 1,
        
       
        },
        yAxis: {
          
          title: {
            text: ''
          },
          style:{
            fontSize:'9px'
          }
          ,
          labels: {
            formatter: function () {
              return this.value;
            }
          },
          
          gridLineColor: '', // Y-axis grid lines color
          lineColor: '#000',  // Y-axis line color
          lineWidth: 1,  
        
        },
        tooltip: {
          shared: true,
          valueSuffix: '',
          headerFormat: "<span>{point.key}</span><br/>", 
          pointFormat: '<b>{point.y}</b>', 
          backgroundColor:'#06061b',
          borderWidth:1,
          color:'#fff',
          borderColor:'white',
          style:{
            color:'#fff'
          }
          

        },
        plotOptions: {
          areaspline: {
            fillOpacity: 0.9,
            marker: {
              enabled: false
            },
            
          }
        },
        series: [{
         
          data: [3,0,7,2,4,4,1],
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0.6,'#2c2c54'],  // Dark shade
              [1.1, '#fff']   // Light shade
            ]
          },
          showInLegend: false, // Remove series name from legend
        }],
        credits: {
          enabled: false
        }
      };
  return (
    <>
     <div className='mt-[37px]'>
            <HighchartsReact 
            highcharts={Highcharts}
            options={options} 
            />
         </div></>
  )
}