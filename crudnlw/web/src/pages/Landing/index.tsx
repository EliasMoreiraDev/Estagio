import React from 'react';

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
                    <img width="434" height="127" src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img width= '599' height= '352' src={landingImg}  alt="Plataforma de estudos" className="hero-image" />
                <div className="buttons-container">
                    <a href='' className=''>
                        <img src={studyIcon} alt="Botao estudar" />
                        Estudar
                    </a>
                    <a href='' className=''>
                        <img src={giveClassIcon} alt="Botao estudar" />
                        Estudar
                    </a>
                </div>
                <span className="total-connecions">
                    Total de 200 conexões já realizadas
                    <img src={purpleIcon} alt="Coração Roxo" />
                </span>
            </div>

        </div>
    )
}
export default Landing