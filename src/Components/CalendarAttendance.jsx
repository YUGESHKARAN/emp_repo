import React, { useState } from 'react'

import { IoCheckboxSharp } from "react-icons/io5";
import arrowLeft from '../assets/arrowleft.svg'
import arrowLRight from '../assets/arrowright.svg'
import checkBox from '../assets/checkbox.svg'
import DatePicker from './DatePicker';




   
  
 
  const ar3 = [
    {
    title:'Meeting',desc:'This to Notify that you will be attending...',time:'9:30 PM',viwe:'View',checkBox:(checkBox)
  },
  {
    title:'Meeting',desc:'This to Notify that you will be attending...',time:'9:30 PM',viwe:'View',checkBox:(checkBox)
  },
  {
    title:'Meeting',desc:'This to Notify that you will be attending...',time:'9:30 PM',viwe:'View',checkBox:(checkBox)
  },
]

export default function CalendarAttendance() {
  const [week, setweek] = useState("May 2024")
  return (
    <div className=' relative bg-purple-100 pb-4 m-auto w-80 rounded-3xl mb-4  shadow-dark-md md:mt-4 md:w-1/5 md:gap-0 '>
 <div className='absolute top-16 left-3 z-50 bg-black h-0.5 m-auto w-11/12'></div>
          <div className=' w-full md:w-full relative  m-auto my-4 pt-2 flex justify-evenly'>
             
          <DatePicker/>
             
            </div>

            <div className='flex justify-between items-center w-11/12 m-auto mt-10'>
              <div className='font-bold'>Schedule</div>
              <div className='text-purple-500 text-3 font-semibold cursor-pointer transform transition hover:text-purple-800 '>View All(9)</div>
            </div>
           


            

            {ar3.map((item,ind)=>(
              <div key={ind} className='w-11/12 ml-3 mt-4 relative'>
                
              <h6 className='font-semibold ml-9 text-sm '>{item.title}</h6>

              <p className='text-11p mt-1 ml-9 font-semibold'>{item.desc}</p>

              <p className='text-purple-400 ml-9 font-semibold text-11p mt-2 cursor-pointer transform transition hover:text-purple-800'>{item.viwe}</p>

              <p className='absolute top-0 ml-9 right-7 text-xs font-semibold '>{item.time}</p>

              {/* <img src={IoCheckboxSharp} className='absolute top-0 left-[-25px]' /> */}
              <IoCheckboxSharp className='absolute top-1  fill-red-500   rounded-lg' />

            </div>
            ))}

          
          

        </div>
        
     
  )
}