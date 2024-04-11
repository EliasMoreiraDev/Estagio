import React from 'react';
import './styles.css'

function Landing(){
    const logoImg = require("assets/images/logo.png") as string;
    const landingImg = require("assets/images/landing.png") as string;
    const studyIcon =   require("assets/images/icons/study.png") as string;
    const giveClassIcon =   require("assets/images/icons/give-classes.png") as string;
    const purpleIcon =   require("assets/images/icons/purple-heart.png") as string;
    
    return(
        <div id='page-landing'>
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={landingImg}  alt="Plataforma de estudos" className="hero-image" />
                <div className="buttons-container">
                    <a href='' className='study'>
                        <img  src={studyIcon} alt="Botao estudar" />
                        Estudar
                    </a>
                    <a href='' className='give-class'>
                        <img width="40" height="40" src={giveClassIcon} alt="Botao estudar" />
                        Dar aulas  
                    </a>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas
                    <img src={purpleIcon} alt="Coração Roxo" />
                </span>
            </div>

        </div>
    )
}
export default Landing