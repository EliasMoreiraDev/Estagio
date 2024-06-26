import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
function TeacherList(){
    return(
        <div id='page-techer-list' className='container'>
            <header className='page-header'>
                <div className="top-bar-container">
                    <Link to={'/'}>
                        <img src={backIcon} alt="" />
                    </Link>
                    <img src={logoImg} alt="" />
                </div>
                <div className='header-content'>
                    <strong>Estes são os proffys disponíveis.</strong>
                </div>
                
            </header>
        </div>
    )
}
export default TeacherList