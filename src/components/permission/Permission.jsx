import React from "react"

import gpsImg from "../../assets/Navigation-amico.svg"

import './style.css'

export default class Permission extends React.Component {
    render(){
        return (
            <div className="permition-container">
                <span>É necessário permitir o acesso à sua localização!</span>

                <img src={gpsImg} alt="imagem de um celular com gps aberto"/>
            </div>
        )
    }
}