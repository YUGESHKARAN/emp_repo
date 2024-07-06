import React, { useState } from 'react'
import { MdAccessTimeFilled } from "react-icons/md";
import img1 from '../assets/img3.jpg'
import img2 from '../assets/img2.jpg'




export default function ToDos() {

    
    const [count, setCount] = useState([1,2,3,4,9]);
    var cnt = count.length;

    const [ToDo, setToDo] = useState([

        {priority:'URGENT',status:'Interview; Brooklyn Simons - Position: Engineer Staff',im1:img1,im2:img2},
        {priority:'LOW',status:'Interview; Brooklyn Simons - Position: Engineer Staff',im1:img1,im2:img2},
        {priority:'LOW',status:'Interview; Brooklyn Simons - Position: Engineer Staff',im1:img1,im2:img2},
        
    ]);


    const [Progress, setProgress] = useState([
        {priority:'LOW',status:'Interview; Brooklyn Simons - Position: Engineer Staff',im1:img1,im2:img2},
        {priority:'URGENT',status:'Interview; Brooklyn Simons - Position: Engineer Staff',im1:img1,im2:img2},
       
        
    ])

    const [Copmleted, setCopmleted] = useState([
        {priority:'URGENT',status:'Interview; Brooklyn Simons - Position: Engineer Staff',im1:img1,im2:img2},
        {priority:'URGENT',status:'Interview; Brooklyn Simons - Position: Engineer Staff',im1:img1,im2:img2},
        {priority:'LOW',status:'Interview; Brooklyn Simons - Position: Engineer Staff',im1:img1,im2:img2},
        {priority:'LOW',status:'Interview; Brooklyn Simons - Position: Engineer Staff',im1:img1,im2:img2},
        
    ])

  return (
<> <div className='ml-10 mt-10 md:ml-24  text-lg taxt-purple-700 font-bold'>Task</div>

    <div className='md:w-11/12  m-auto md:flex m-auto gap-2.5 bolck  mb-80'>
         

        <div className='w-11/12 m-auto md:mt-0  md:w-4/12 h-full  block pt-3 pb-5 mb-10 '>
            <div className=' relative w-10/12 h-16 m-auto bg-white rounded-t-md border-t-4 border-t-purple-500 shadow-dark '>
                  <div className='absolute top-4 left-4 font-semibold text-purple-500'>To Do</div>
                  <div className='absolute bg-gray-300 w-5 top-4 right-4 text-center rounded-sm text-5 font-semibold'>{ToDo.length}</div>
            </div>

            {ToDo.map((data,index)=>(
             <div key={index} className='m-auto relative w-10/12 h-48 shadow-dark mt-10 rounded-md'>
                  
                    <div className={(data.priority=='URGENT')?' absolute top-4 left-4 text-orange-600 text-sm font-semibold  p-1 bg-red-100 w-3/12 text-center rounded-lg':' absolute top-4 left-4 text-green-600 text-sm font-semibold  p-1 bg-green-100 w-3/12 text-center rounded-lg'}>{data.priority}</div>

                    <p className='absolute top-16 text-sm left-4 w-3/4 text-purple-900 font-semibold'>{data.status}</p>

                    <div className='absolute bottom-4 left-4 flex w-9/12 items-center'>
                        <MdAccessTimeFilled className='fill-gray-400 text-xl'/>
                        <p className='text-sm ml-1 font-semibold text-gray-400'>15.00 Sep 30, 2021</p>
                    </div>
                    <img src={data.im1}  className='w-5 h-5 rounded-full absolute right-8 bottom-4' />
                    <img src={data.im2}  className='w-5 h-5 rounded-full absolute right-4 bottom-4' />

           </div>
           ))}
         
        </div>


        <div className='w-11/12 m-auto md:mt-0 md:w-4/12 mb-10 h-full  pt-3 pb-5'>

            <div className='m-auto relative w-10/12 h-16 bg-white rounded-t-md border-t-4 border-t-orange-500 shadow-dark'>
                    <div className='absolute top-4 left-4 font-semibold text-orange-500'>In progress</div>
                    <div className='absolute bg-gray-300 w-5 top-4 right-4 text-center rounded-sm text-5 font-semibold'>{Progress.length}</div>
            </div>

            {Progress.map((data,index)=>(
             <div key={index} className='m-auto relative w-10/12 h-48 shadow-dark mt-10 rounded-md'>
                  
                    <div className={(data.priority=='URGENT')?' absolute top-4 left-4 text-orange-600 text-sm font-semibold  p-1 bg-red-100 w-3/12 text-center rounded-lg':' absolute top-4 left-4 text-green-600 text-sm font-semibold  p-1 bg-green-100 w-3/12 text-center rounded-lg'}>{data.priority}</div>

                    <p className='absolute top-16 text-sm left-4 w-3/4 text-purple-900 font-semibold'>{data.status}</p>

                    <div className='absolute bottom-4 left-4 flex w-9/12 items-center'>
                        <MdAccessTimeFilled className='fill-gray-400 text-xl'/>
                        <p className='text-sm ml-1 font-semibold text-gray-400'>15.00 Sep 30, 2021</p>
                    </div>
                    <img src={data.im1}  className='w-5 h-5 rounded-full absolute right-8 bottom-4' />
                    <img src={data.im2}  className='w-5 h-5 rounded-full absolute right-4 bottom-4' />

           </div>
           ))}


        </div>


        <div className='w-11/12 m-auto md:mt-0 md:w-4/12 h-full  pt-3 pb-5'>
       
        <div className= ' m-auto relative w-10/12 h-16 bg-white rounded-t-md border-t-4 border-t-green-500 shadow-dark'>
            <div className=' absolute top-4 left-4 font-semibold text-green-500'>Completed</div>
                <div className='absolute bg-gray-300 w-5 top-4 right-4 text-center rounded-sm text-5 font-semibold'>{Copmleted.length}</div>
            </div>

            {Copmleted.map((data,index)=>(
             <div key={index} className='m-auto relative w-10/12 h-48 shadow-dark mt-10 rounded-md'>
                  
                    <div className={(data.priority=='URGENT')?' absolute top-4 left-4 text-orange-600 text-sm font-semibold  p-1 bg-red-100 w-3/12 text-center rounded-lg':' absolute top-4 left-4 text-green-600 text-sm font-semibold  p-1 bg-green-100 w-3/12 text-center rounded-lg'}>{data.priority}</div>

                    <p className='absolute top-16 text-sm left-4 w-3/4 text-purple-900 font-semibold'>{data.status}</p>

                    <div className='absolute bottom-4 left-4 flex w-9/12 items-center'>
                        <MdAccessTimeFilled className='fill-gray-400 text-xl'/>
                        <p className='text-sm ml-1 font-semibold text-gray-400'>15.00 Sep 30, 2021</p>
                    </div>
                    <img src={data.im1}  className='w-5 h-5 rounded-full absolute right-8 bottom-4' />
                    <img src={data.im2}  className='w-5 h-5 rounded-full absolute right-4 bottom-4' />

           </div>
           ))}
        </div>


    

    </div>
  
  
    </>
  )
}