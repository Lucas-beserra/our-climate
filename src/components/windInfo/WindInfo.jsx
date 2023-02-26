import React from "react"

import windDirection from '../../assets/icons8-wind-sign-64.png'
import wind from '../../assets/wind.svg'

function WindInfo(props) {
    return (
        <ul className="wind-info">
          <h3>Ventos</h3>
          <li>
            <span>
              Velocidade: {props.speed}m/s  
            </span>
            <img src={wind} className="thermometer"/> 
          </li>
          <li>
            <span>
              Direção: {props.deg}°  
            </span>
            <img src={windDirection} className="thermometer"/> 
          </li>
        </ul>
    )
}

export default WindInfo