import React from "react"

import mapPin from '../../assets/map-pin.svg'

const Header = (props) => {
    return (
        <div className="location-info">
          <div className="city">
            <img src={mapPin} className="map-pin"/>
            <span>{props.name}</span> 
          </div> 
          <span>{props.description}</span>
        </div>
    )
}

export default Header