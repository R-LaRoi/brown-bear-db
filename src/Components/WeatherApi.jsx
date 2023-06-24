import React, { useState, useEffect } from 'react'

export default function Weather() {

  let [temperature, setTemperature] = useState('')
  let [description, setDescription] = useState('')
  let [location, setLocation] = useState('')
  let [icon, setIcon] = useState('');
  let [info, setInfo] = useState();


//      let apiKey = "a43564c91a6c605aeb564c9ed02e3858";
//     navigator.geolocation.getCurrentPosition((position) => {
// fetch(
//         `https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`
//       )
//         .then((response) => response.json())
//         .then((data) => {

//  setInfo(data)
// setDescription(info.daily[0].weather[0].main);
//           setTemperature((Math.round(info.current.temp)));
//           setLocation(info.timezone)
//           setIcon(`http://openweathermap.org/img/wn/${info.current.weather[0].icon}@2x.png`);
//           console.log(info)




        
  
         

//         });
//     });







return (
    <div>
      <div className="temperature">
        Weather:
        <div><img src={icon} width="25px" /></div>
        <div>{temperature}24°C
          <div>{description}Sunny</div>{location} Maputo
          </div> </div>

    </div>


  )

} 