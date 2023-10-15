import { useState } from "react";

import FormStudentLogin from "../form-student-login";
import FormStudentRegister from "../form-student-register";

import './../../main-form-style.css'


export default function MainFormStudent(){

    const [stateLogin, setStateLogin] = useState<boolean>(false);

    const toggleForm = () =>{
        setStateLogin(!stateLogin)
    }

    return(
        <div className="box-render-form">

            {stateLogin ? <FormStudentRegister toggleForm={toggleForm} /> : <FormStudentLogin/>}

            <div className="box-button-render-form">
                <button onClick={toggleForm} className="button-render-form">
                {stateLogin ? <p className="button-text-render-form">Fazer login</p> :<p className="button-text-render-form">Criar conta</p> }
                </button>
            </div>
        </div>
    )
}