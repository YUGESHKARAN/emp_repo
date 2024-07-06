
import React from 'react';
import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';

import {Doughnut} from 'react-chartjs-2';
import { color } from 'chart.js/helpers';



Chart.register(ArcElement);


export default function CreateDoghnutData2({dataValue2}) {

  const Leave = dataValue2[0].leave;

  const data = {

    datasets: [{
      data: [Leave.balance,Leave.used,Leave.remaining],
      backgroundColor: [
        '#2ecc71',
         'orange',
        '#8d00ad'
     
      ],
      borderWidth: 0,
      radius: '55%' ,
      cutout:'70%'
      
  
     
    }]
  };
  return (
  
        <div >
          
            <Doughnut className='w-36 pr-3 pr-1 md:ml-1 cursor-pointer ' data={data} />
        </div>
      );
  
}