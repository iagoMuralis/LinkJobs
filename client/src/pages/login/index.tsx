import { useState } from 'react'
import Logo from './../../assets/LinkJobs LOGO Sem Fundo.png';

import MainFormCompany from '../../components/c-login/form-company/main-form-company';
import MainFormStudent from '../../components/c-login/form-student/main-form-student';



import './login-style.css'


export default function Login() {
    const [stateForm, setStateForm] = useState<boolean>(false)

    return (
        <div className="container-main-login">
            <div className="container-left-login">
                <div className="box-img-logo-name">
                    <img src={Logo} alt="logo empresa" className='img-logo' />
                    {stateForm ? <h1 className='title-logo'>Empresa</h1> : <h1 className='title-logo'>Estudante</h1>}
                </div>

                <div className="container-form">

                    {stateForm ? <MainFormCompany /> : <MainFormStudent />}

                    <div className="box-buttons-form-login">
                        <button onClick={() => setStateForm(!stateForm)} className='button-form-login-register'>

                            {stateForm ? <p>Acessar Estudante</p> : <p>Acessar Empresa</p>}
                        </button>
                    </div>

                </div>
            </div>

            <div className="container-right-login">
                {/* imagem */}
            </div>
        </div>
    )
}