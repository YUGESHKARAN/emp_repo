import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import checkBox from './assets/checkbox.svg'
import './App.css'
import CalendarAttendance from './Components/CalendarAttendance.jsx'
import LeaveComp from './Components/LeaveComp.jsx'
import AttendanceComp from './Components/AttendanceComp.jsx'
import StatisticsData from './Components/StatisticsData.jsx'
import StatisticsData2 from './Components/StatisticsData2.jsx'


import ToDos from './Components/ToDos.jsx'



function App() {

const [WeekData , setWeekData]=useState('This Week');

const [apiData, setApiData] = useState([
  {
    "attendance": {
      "present": 10,
      "absent": 4,
      "remaining": 6
    },
    "leave": {
      "employeePerformanceScore": {
        "this_week": [
          {
            "x": "Monday",
            "y": 2.6,
            "_id": "6683e21b8ca6c5ba6125d190"
          },
          {
            "x": "Tuesday",
            "y": 3.2,
            "_id": "6683e21b8ca6c5ba6125d191"
          },
          {
            "x": "Wednesday",
            "y": 3.7,
            "_id": "6683e21b8ca6c5ba6125d192"
          },
          {
            "x": "Thursday",
            "y": 3.4,
            "_id": "6683e21b8ca6c5ba6125d193"
          },
          {
            "x": "Friday",
            "y": 4.6,
            "_id": "6683e21b8ca6c5ba6125d194"
          }
        ]
      },
      "balance": 20,
      "used": 6,
      "remaining": 14
    },
    "_id": "6683e21b8ca6c5ba6125d18f",
    "__v": 0
  }]);



  return (
    <>
    <body> 
   
        <div class='relative grid w-10/12 m-auto  min-h-screen block justify-center  gap-20   md:flex  md:w-11/12 '>

        
           <div className='md:w-9/12  md:relative md:top-0'>

              <div className='md:flex justify-evenly   md:w-full'>
                  <AttendanceComp dataSample={apiData}/>                       

                  <LeaveComp  dataSample2={apiData}/>
              </div>

              

              <div className='relative w-80 rounded-3xl p-1 m-auto bg-purple-100 shadow-dark-md mt-4 mb-4 md:w-2/5 '>

                <div className='absolute top-3 left-4 text-sm font-bold'>Employee Performance Score</div>

                    <form action="" className='absolute text-sm right-3 top-3 w-15 '>
                    <select name="" id="" className='text-10p border rounded-md border-black bg-transparent '>
                      <option value="This Week">This Week</option> 
                      <option value="Previous Week">Previous Week</option> 
                    </select>
                    </form>
                    <StatisticsData apiData={apiData} />

  
                      
                    
             </div>

           </div>

            <CalendarAttendance/>

         
           

           
        </div>

      <ToDos/>
       
      
      </body>
    </>
  )
}

export default App
