import { FaBars, FaBell, FaUser, FaHome, FaSignOutAlt, FaSearch } from 'react-icons/fa';

import ImgLogo from './../../../assets/LinkJobs LOGO Sem Fundo.png'


import { useState } from 'react';

import './../../c-student/header-menu-student/header-style.css';

import HomeCompany from '../main-company/screens-company/s-home-company';
import MailBoxCompany from '../main-company/screens-company/s-mailbox-company';
import ProfileCompany from '../main-company/screens-company/s-profile-company';
import { useNavigate } from 'react-router-dom';


interface MenuProps {
    handleComponentChange: (component: JSX.Element) => void;
    dataCompany:any;
}


export default function MenuCompany({ handleComponentChange, dataCompany}: MenuProps) {

    const handleComponentClick = (component: JSX.Element) => {
        handleComponentChange(component);
    }

    const [showHeaderLow, setShowHeaderLow] = useState<boolean>(false);

    const nameCompany = dataCompany.name;
    
    const navigate = useNavigate()

    return (
        <header >

            <div className="header-menu-top">

                <div className="box-header-img-logo-text">
                    <img src={ImgLogo} alt="" className='img-logo-header' />
                    <p>empresa</p>
                </div>

                <div className="box-input-button-menu">

                    <div className="box-input-search-menu">
                        <FaSearch />
                        <input type="text" placeholder='Pesquisar' className='input-search-header' />
                    </div>

                    <button className="button-menu-header" onClick={() => setShowHeaderLow(!showHeaderLow)}>
                        <FaBars size={20} />
                    </button>

                    <p className="name-company-student">
                        {nameCompany}
                    </p>

                </div>



            </div>


            {showHeaderLow && (

                <div className="header-menu-low">
                    <div className="container-buttons-header-low">

                        <div className="box-button-name-header-low" onClick={() => handleComponentClick(<HomeCompany />)}>
                            <button className='button-menu-header-low'><FaHome size={20} /></button>
                            <p className='text-button-menu-header-low'>Home</p>
                        </div>

                        <div className="box-button-name-header-low" onClick={() => handleComponentClick(<MailBoxCompany />)}>
                            <button className='button-menu-header-low'><FaBell size={20} /></button>
                            <p className='text-button-menu-header-low'>Candidatos</p>
                        </div>

                        <div className="box-button-name-header-low" onClick={() => handleComponentClick(<ProfileCompany />)}>
                            <button className='button-menu-header-low'><FaUser size={20} /></button>
                            <p className='text-button-menu-header-low'>Empresa</p>
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