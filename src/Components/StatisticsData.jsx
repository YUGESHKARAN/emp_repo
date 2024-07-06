import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function StatisticsData({ apiData }) {

  // Extract x and y values from the apiData
  const performanceData = apiData[0].leave.employeePerformanceScore.this_week;
  const categories = performanceData.map(item => item.x); // Days of the week
  const dataPoints = performanceData.map(item => item.y); // Performance scores

  const options = {
    chart: {
      type: 'areaspline',
      backgroundColor: 'transparent',
      height: 280,
     
      style: {
        fontSize: '9px',
        fontWeight: '600',
      }
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: categories,
      tickmarkPlacement: 'on',
      lineColor: '#000',  // X-axis line color
      lineWidth: 1,
      labels: {
        style: {
          fontSize: '9px'
        }
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return this.value;
        }
      },
      gridLineColor: '#e6e6e6', // Y-axis grid lines color
      lineColor: '#000',  // Y-axis line color
      lineWidth: 1,
      labels: {
        style: {
          fontSize: '9px'
        }
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: '',
      headerFormat: '<span>{point.key}</span><br/>',
      pointFormat: '<b>{point.y}</b>',
      backgroundColor: '#06061b',
      borderWidth: 1,
      style: {
        color: '#fff'
      }
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 1,
        marker: {
          enabled: false
        },
        color: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0.6, '#2c2c54'],  // Dark shade
            [1, '#fff']        // Light shade
          ]
        }
      }
    },
    series: [{
      name: 'Performance Score',
      data: dataPoints,
      showInLegend: false, // Remove series name from legend
    }],
    credits: {
      enabled: false
    }
  };

  return (
    <div className='mt-8 w-full'>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}
