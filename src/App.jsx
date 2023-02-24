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
import wind from './assets/wind.svg'
import './style.css'

function App() {

  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)

  let getWeather = async (lat, long) => {
    let res = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
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
      <div>
        <h1>É necessário permitir que o site saiba a sua localização</h1>
      </div>
    )
  }
  else if(weather == false){
    return (
      <span>Carregando dados climáticos</span>
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

        <img src={happySun} className="happy-sun"/>
        <img src={happySunAmico} className="happy-sun-amico"/>

        <ul className="temperature-info">
          <li>
            <img src={thermometer} className="thermometer"/> 
            <span>
              Temperatura: {weather['main']['temp'].toFixed(0)}°C  
            </span>  
          </li>
          <li>
            <img src={thermometerHot} className="thermometer"/>
            <span>
              Máxima de {weather['main']['temp_max'].toFixed(0)}°C
            </span>
          </li>
          <li>
            <img src={thermometerCold} className="thermometer"/>
            <span>
              Mínima de {weather['main']['temp_min'].toFixed(0)}°C
            </span>
          </li>
          <li>
            <img src={humidity} className="thermometer"/> 
            <span>
              Humidade do ar {weather['main']['humidity']}%
            </span>
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
      </div>
    )
  }
}

export default App
