import { useState } from "react"

import FormCompanyLogin from "../form-company-login"
import FormCompanyRegister from "../form-company-register"

import './../../main-form-style.css'

export default function MainFormCompany() {

    const [stateLogin, setStateLogin] = useState<boolean>(false)

    const toggleForm = () =>{
        setStateLogin(!stateLogin )
    }

    return (
        <div className="box-render-form">

            {stateLogin ? <FormCompanyRegister toggleForm={toggleForm} /> : <FormCompanyLogin />}

            <div className="box-button-render-form">
                <button onClick={toggleForm} className="button-render-form">
                    {stateLogin ? <p className="button-text-render-form">Fazer login</p> : <p className="button-text-render-form">Criar conta</p>}
                </button>
            </div>
        </div>
    )
}