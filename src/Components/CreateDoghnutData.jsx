
import React from 'react';
import {Chart, ArcElement, Tooltip, Legend, Title} from 'chart.js';

import {Doughnut} from 'react-chartjs-2';
import { color } from 'chart.js/helpers';




Chart.register(ArcElement);

export default function CreateDoghnutData({dataValue1}) {


const AttendanceData = dataValue1[0].attendance;

    const data = {

        datasets: [{
          data:[AttendanceData.present,AttendanceData.absent,AttendanceData.remaining] ,
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