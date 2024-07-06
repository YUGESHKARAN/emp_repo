import React, { useState } from 'react';

import { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles

import './Calendar.css'; // Import the custom CSS file






export default function DatePicker() {

const [date , setDate] = useState(new Date());
const onChange = date =>{
    setDate(date);
}

  return (
    <div>
          <Calendar
          onChange={onChange}
          value={date}
        className="bg-purple-100 border-0 text-[16px]  w-98p md:98p " />
    </div>
  )
}