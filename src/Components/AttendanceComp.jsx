import React from 'react'
import { useState } from 'react';
import CreateDoughnutData from './CreateDoghnutData.jsx';   


export default function AttendanceComp({dataSample}) {

    const ar4 = [
        {status:'Present',icon:'🟢'},
        {status:'Absent',icon:'🟠'},
        {status:'Late Comming',icon:'🟣'},
      
      ]
      
   
      
    
  return (
    <div className='flex justify-between   bg-purple-100 pb-0 mt-5 m-auto w-full rounded-3xl shadow-dark-md   md:w-2/5 md:gap-0 '>
    <div className='w-full mt-5 ml-5'>
     <p  className='text-sm font-bold '>Your Attendance</p>
     <hr className='border-1 border-black w-3/4 ' />
   
    {/* <div className='flex items-center list-none gap-x-4 mt-5'>

     {ar4.map((val,index)=>(
        <li key={index} className='pr-1 text-xs flex items-center md:text-[12px]' >{val.status} <span className='w-1 cursor-pointer'>{val.icon}</span></li>
    
     ))}
    </div>

    <div className='flex items-center  list-none w-9/12 mt-5'> 

     {num.map((num,index)=>(
       <li key={index} className='pr-2  pr-14   text-xs font-bold  flex items-center ' ><p className='pl-6'>{num}</p></li>
     ))}
 
    </div> */}

   
   {dataSample.map((data,index)=>(
    
    <div key={index} className='w-full mt-4 flex gap-0 h-3/4'>
      <div  className='w-2/4 block  h-3/4'>
          <div className='w-full m-auto  inline-block h-1/2 md:text-xs text-10p text-center pt-2 '>
            {ar4[0].status} {ar4[0].icon}
          </div>
          <div className='w-full m-auto  h-1/2 text-sm text-center mt-0'>
          {data.attendance.present}
          </div>
       </div>

       <div  className='w-2/4 block  h-3/4'>
          <div className='w-full m-auto  h-1/2 md:text-xs text-10p text-center pt-2 '>
            {ar4[1].status} {ar4[1].icon}
          </div>
          <div className='w-full m-auto h-1/2 text-sm text-center mt-0'>
          {data.attendance.absent}
          </div>
       </div>

       <div  className='w-3/4 block  h-3/4'>
          <div className='w-full m-auto  h-1/2 md:text-xs text-10p inline-block  text-center pt-2 '>
            {ar4[2].status} {ar4[2].icon}
          </div>
          <div className='w-full m-auto h-1/2 text-sm text-center mt-0'>
          {data.attendance.remaining}
          </div>
       </div>
 </div>

   ))
   
 }
    



     
    </div>
    <div className='flex items-center   w-1/3 h-fit  mr-0'>
    <CreateDoughnutData dataValue1={dataSample} />
     
    </div>
 </div>
  )
}