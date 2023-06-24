import React, {useEffect, useState} from 'react'
import Weather from "./WeatherApi"
import "./styles/time.css"

export default function TimeWeather() {
let [weekday, setWeekday] = useState('')  

let time = new Date()
let hours = time.getHours()
let minutes = time.getMinutes()

if(minutes< 10){
  return "0"+ minutes
}

function currentTime(){
let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
days.map((day, index) =>{
  if( index === time.getDay()){
useEffect(()=> {
setWeekday(day)
},[])

  }

} )
}
 currentTime()

console.log(weekday)
return (
        <div className='info-bar'>

    
               <div className='clock'>{hours}:{minutes}

               
              </div>
        <div className='date'> 
 <span className=''> {weekday}</span>
        
        </div>
         
            
                 <Weather />
        </div>
  )
}