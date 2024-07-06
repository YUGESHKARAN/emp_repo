import React from 'react'
import { useState } from 'react';

import CreateDoughnutData2 from './CreateDoghnutData2.jsx'; 

export default function LeaveComp({dataSample2}) {
    const ar5 = [
        {status:'Balance',icon:'🟢'},
        {status:'Used',icon:'🟠'},
        {status:'Remaining',icon:'🟣'},
      
      ]
    
      const num2 = ['12','04','06'];
    
  return (
    <div className='flex justify-between   bg-purple-100 pb-0 mt-5 m-auto w-full pr-1 rounded-3xl shadow-dark-md   md:w-2/5 md:gap-0 '>
    <div className='w-full mt-5 ml-5'>
     <p  className='text-sm font-bold '>Your Leaves</p>
     <hr className='border-1 border-black w-3/4 ' />
   
    {/* <div className='flex items-center list-none gap-x-4 mt-5'>

     {ar4.map((val,index)=>(
        <li key={index} className='pr-1 text-10p flex items-center md:text-[12px]' >{val.status} <span className='w-1 cursor-pointer'>{val.icon}</span></li>
    
     ))}
    </div>

    <div className='flex items-center  list-none w-9/12 mt-5'> 

     {num.map((num,index)=>(
       <li key={index} className='pr-2  pr-14   text-10p font-bold  flex items-center ' ><p className='pl-6'>{num}</p></li>
     ))}
 
    </div> */}

   
   {dataSample2.map((data,index)=>(
    
    <div key={index} className='w-full mt-4 flex h-3/4'>
      <div  className='w-3/4 block  h-3/4'>
          <div className='w-full m-auto  inline-block h-1/2 md:text-xs text-10p text-center pt-2 '>
            {ar5[0].status} {ar5[0].icon}
          </div>
          <div className='w-full m-auto  h-1/2 text-sm text-center mt-0'>
          {data.leave.balance}
          </div>
       </div>

       <div  className='w-2/4 block  h-3/4'>
          <div className='w-full m-auto  h-1/2 md:text-xs text-10p text-center pt-2 '>
            {ar5[1].status} {ar5[1].icon}
          </div>
          <div className='w-full m-auto h-1/2 text-sm text-center mt-0'>
          {data.leave.used}
          </div>
       </div>

       <div  className='w-3/4 block  h-3/4'>
          <div className='w-full m-auto  h-1/2 md:text-xs text-10p inline-block  text-center pt-2 '>
            {ar5[2].status} {ar5[2].icon}
          </div>
          <div className='w-full m-auto h-1/2 text-sm text-center mt-0'>
          {data.leave.remaining}
          </div>
       </div>
 </div>

   ))
   
 }
    



     
    </div>
    <div className='flex items-center   w-1/3 h-fit  mr-0'>
    <CreateDoughnutData2 dataValue2={dataSample2} />
     
    </div>
 </div>
    
  )
}