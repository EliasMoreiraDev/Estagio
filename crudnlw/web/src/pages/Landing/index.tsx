import React from 'react';
import { Link } from 'react-router-dom';
import studyIcon from '../../assets/images/icons/study.svg'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import giveClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleIcon from '../../assets/images/icons/purple-heart.svg'


import './styles.css'
function Landing(){
    
    return(
        <div id='page-landing'>
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={landingImg}  alt="Plataforma de estudos" className="hero-image"/>
                <div className="buttons-container">
                    <Link to={'/study'} className='study'>
                        <img src={studyIcon} alt="Botao estudar" />
                        Estudar
                    </Link>
                    <Link to={'/give-class'} className='give-class'>
                        <img src={giveClassIcon} alt="Botao estudar" />
                        Estudar
                    </Link>
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