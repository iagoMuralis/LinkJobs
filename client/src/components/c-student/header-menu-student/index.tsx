import { FaBars, FaSearch, FaBell, FaUser, FaHome, FaSignOutAlt, FaTimes } from 'react-icons/fa';

import ImgLogo from './../../../assets/LinkJobs LOGO Sem Fundo.png'
import { useState } from 'react';

import './header-style.css';

import ProfileStudent from '../main-student/screens-student/s-profile-student';
import HomeStudent from '../main-student/screens-student/s-home-student';
import NotificationStudent from '../main-student/screens-student/s-notification-student';
import { useNavigate } from 'react-router-dom';


interface MenuProps {
    handleComponentChange: (component: JSX.Element) => void;
    dataStudent:any;
}

export default function MenuStudent({ handleComponentChange, dataStudent }: MenuProps) {

    const [showHeaderLow, setShowHeaderLow] = useState<boolean>(false);

    const handleComponentClick = (component: JSX.Element) => {
        handleComponentChange(component);
    }

    

    const nameStudent = dataStudent.name;

    const navigate = useNavigate()

    return (
        <header>

            <div className="header-menu-top">

                <a href="http://localhost:5173/"><img src={ImgLogo}  className='img-logo-header' /></a>



                <div className="box-input-button-menu">

                    <div className="box-input-search-menu">
                        <FaSearch />
                        <input type="text" placeholder='Pesquisar' className='input-search-header' />
                    </div>


                    <button className="button-menu-header" onClick={() => setShowHeaderLow(!showHeaderLow)}>
                        <FaBars size={20} />
                    </button>

                    <p className="name-company-student">
                        {nameStudent}
                    </p>

                </div>

            </div>


            {showHeaderLow && (

                <div className="header-menu-low">
                    <div className="container-buttons-header-low">

                    <div className="box-button-name-header-low closed-box-button-name-header-low" onClick={() => setShowHeaderLow(!showHeaderLow) }>
                            <button className='button-menu-header-low'><FaTimes size={20} /></button>
                            <p className='text-button-menu-header-low'>Fechar</p>
                        </div>
                        

                        <div className="box-button-name-header-low" onClick={() => handleComponentClick(<HomeStudent />)}>
                            <button className='button-menu-header-low'><FaHome size={20} /></button>
                            <p className='text-button-menu-header-low'>Home</p>
                        </div>

                        <div className="box-button-name-header-low" onClick={() => handleComponentClick(<NotificationStudent />)}>
                            <button className='button-menu-header-low'><FaBell size={20} /></button>
                            <p className='text-button-menu-header-low'>Notificação</p>
                        </div>

                        <div className="box-button-name-header-low" onClick={() => handleComponentClick(<ProfileStudent />)}>
                            <button className='button-menu-header-low'><FaUser size={20} /></button>
                            <p className='text-button-menu-header-low'>Perfil</p>
                        </div>

                        <div className="box-button-name-header-low" onClick={() => navigate('/')}>
                            <button className='button-menu-header-low'><FaSignOutAlt size={20} /></button>
                            <p className='text-button-menu-header-low'>Sair</p>
                        </div>

                    </div>
                </div>

            )}



        </header>
    )
}