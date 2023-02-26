import React, { useState, useEffect } from 'react'
import axios from 'axios'

import happySun from './assets/happy-sun.svg'
import happySunAmico from './assets/happy-sun-amico.svg'
import mapPin from './assets/map-pin.svg'
import thermometer from './assets/thermometer.svg'
import thermometerHot from './assets/thermometer-hot.svg'
import thermometerCold from './assets/thermometer-cold.svg'
import humidity from './assets/icons8-umidade-50.png'
import windDirection from './assets/icons8-wind-sign-64.png'
import presure from './assets/icons8-barômetro-50.png'
import wind from './assets/wind.svg'
import weatherImg from './assets/undraw_weather_re_qsmd.svg'


import './style.css'
import Footer from './components/footer/Footer'
import Permission from './components/permission/Permission'

function App() {

  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)

  //let cityName = 

  let getWeather = async (lat, long) => {
    let res = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: lat,
        lon: long,
        appid: '725d702f01fa14a74bab6fdf55de557c',
        lang: 'pt',
        units: 'metric'
      }
    }
    )

    setWeather(res.data)
    //console.log(res.data)
  }

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      getWeather(position.coords.latitude, position.coords.longitude)
      setLocation(true)
    })
  }, [])

  if(location == false){
    return (
      <Permission/>
    )
  }
  else if(weather == false){
    return (
      <div className="loading-container">
        <span>Carregando dados climáticos...</span>
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <div className="location-info">
          <div className="city">
            <img src={mapPin} className="map-pin"/>
            <span>{weather['name']}</span> 
          </div> 
          <span>{weather['weather'][0]['description']}</span>
        </div>

        {/* <img src={happySun} className="happy-sun"/>
        <img src={happySunAmico} className="happy-sun-amico"/> */}

        <ul className="temperature-info">
          <li> 
            <span>
              {weather['main']['temp'].toFixed(0)}°C  
            </span>  
          </li>
          <li>
            <img src={thermometerHot} className="thermometer"/>
            <span>
              Máxima de {weather['main']['temp_max']}°C
            </span>
          </li>
          <li>
            <img src={thermometerCold} className="thermometer"/>
            <span>
              Mínima de {weather['main']['temp_min']}°C
            </span>
          </li>
        </ul>
        <ul className="air-info">
          <h3>Ar</h3>
          <li>
            <span>
              Humidade: {weather['main']['humidity']}%
            </span>
            <img src={humidity} className="thermometer"/> 
          </li>
          <li>
            <span>
              Pressão: {weather['main']['pressure']}hPa  
            </span>
            <img src={presure} className="thermometer"/> 
          </li>
        </ul>
        <ul className="wind-info">
          <h3>Ventos</h3>
          <li>
            <span>
              Velocidade: {weather['wind']['speed']}m/s  
            </span>
            <img src={wind} className="thermometer"/> 
          </li>
          <li>
            <span>
              Direção: {weather['wind']['deg']}°  
            </span>
            <img src={windDirection} className="thermometer"/> 
          </li>
        </ul>

        <div className="undrow-img">
          <img src={weatherImg}/>
        </div>

        <Footer/>

      </div>
    )
  }
}

export default App
