import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/header/Header'
import Permission from './components/permission/Permission'
import TemperatureInfo from './components/temperatureInfo/TemperatureInfo'
import AirInfo from './components/airInfo/AirInfo'
import WindInfo from './components/windInfo/WindInfo'
import Footer from './components/footer/Footer'

import weatherImg from './assets/undraw_weather_re_qsmd.svg'

import './style.css'


function App() {

  const [location, setLocation] = useState(false)
  const [weather, setWeather] = useState(false)

  let cityName = weather.name
  let description = weather.weather

  let temperature = weather.main
  let maximumTemperature = weather.main
  let minimumTemperature = weather.main
  let humidity = weather.main
  let pressure = weather.main
  let speed = weather.wind
  let deg = weather.wind

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

        <Header name={cityName} description={description[0].description}/> 
      
        <TemperatureInfo 
          currentTemperature={temperature.temp.toFixed(0)}
          maximumTemperature={maximumTemperature.temp_max}
          minimumTemperature={minimumTemperature.temp_min}
        />

        <AirInfo humidity={humidity.humidity} pressure={pressure.pressure}/>

        <WindInfo speed={speed.speed} deg={deg.deg}/>

        <div className="undrow-img">
          <img src={weatherImg}/>
        </div>

        <Footer/>

      </div>
    )
  }
}

export default App
