import React from "react"

import thermometerHot from '../../assets/thermometer-hot.svg'
import thermometerCold from '../../assets/thermometer-cold.svg'

const TemperatureInfo = (props) => {
    return (
        <ul className="temperature-info">
          <li> 
            <span>
              {props.currentTemperature}°C  
            </span>  
          </li>
          <li>
            <img src={thermometerHot} className="thermometer"/>
            <span>
              Máxima de {props.maximumTemperature}°C
            </span>
          </li>
          <li>
            <img src={thermometerCold} className="thermometer"/>
            <span>
              Mínima de {props.minimumTemperature}°C
            </span>
          </li>
        </ul>
    )
}

export default TemperatureInfo