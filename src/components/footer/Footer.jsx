import React from "react"
import './style.css'

export default function Footer() {
    return (
        <div className="footer">
            <span>Developed by Lucas Beserra</span>
            <p>Os dados climáticos apresentados acima estão vindo da API do <a href="https://openweathermap.org/" target="_blank">OpenWeather</a> e estão sendo atualizados em tempo real.</p>
        </div>
    )
}