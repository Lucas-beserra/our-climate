import React from "react"

import humidity from '../../assets/icons8-umidade-50.png'
import presure from '../../assets/icons8-barômetro-50.png'

const AirInfo = (props)=>{
    return (
        <ul className="air-info">
          <h3>Ar</h3>
          <li>
            <span>
              Humidade: {props.humidity}%
            </span>
            <img src={humidity} className="thermometer"/> 
          </li>
          <li>
            <span>
              Pressão: {props.pressure}hPa  
            </span>
            <img src={presure} className="thermometer"/> 
          </li>
        </ul>
    )
}

export default AirInfo 