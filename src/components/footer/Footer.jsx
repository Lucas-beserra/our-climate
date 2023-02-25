import React from "react"

import githubLogo from '../../assets/github-logo.png'
import instagramLogo from '../../assets/instagram-logo.png'
import linkedinLogo from '../../assets/linkedin-logo.png'

import './style.css'

export default function Footer() {
    return (
        <div className="footer">
            <span>Developed by Lucas Beserra</span>
            <ul className="social-media-container">
                <li>
                    <a href="https://github.com/Lucas-beserra" target="_blank">
                        <img src={githubLogo} alt="github logo"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lucas_beserra88/" target="_blank">
                        <img src={instagramLogo} alt="github logo"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lucas-beserra-601621176/" target="_blank">
                        <img src={linkedinLogo} alt="github logo"/>
                    </a>
                </li>
            </ul>
            <p>Os dados climáticos apresentados acima estão vindo da API do <a href="https://openweathermap.org/" target="_blank">OpenWeather</a> e estão sendo atualizados em tempo real.</p>
        </div>
    )
}