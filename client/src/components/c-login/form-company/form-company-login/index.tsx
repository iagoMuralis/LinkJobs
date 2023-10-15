import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Login } from '../function-onsubmit-company';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type DataInput = {
    email: string,
    password: string,
}

export default function FormCompanyLogin() {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errorLogin, setErrorLogin] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<DataInput>()

    const onSubmit = async (data: any) => {

        try {
            const dataCompany = await Login(data);
            navigate('/company', {state: dataCompany})
            
        }
        catch (error) {
            if (data.password && data.email) {
                setErrorLogin(true)
            }
            else {
                setErrorLogin(false)
            }
        }
    }

    return (
        <form className="container-form-login color-company-form-login" onSubmit={handleSubmit(onSubmit)}>
            <div className="box-input-login">
                <label htmlFor="" className="name-input color-company-name-input">Email</label>
                <input type="email" className="input-form" placeholder='Digite seu email...'
                    {...register("email")}
                />
            </div>

            <div className="box-input-login">
                <label htmlFor="" className="name-input color-company-name-input">Senha</label>
                <div className="input-password-visible"><input type={showPassword ? 'text' : 'password'} className="input-form" placeholder='Digite sua senha...'
                    {...register("password")}
                />
                    {showPassword ? (
                        <FaEyeSlash size={25} onClick={() => setShowPassword(!showPassword)} />
                    ) : (
                        <FaEye size={25} onClick={() => setShowPassword(!showPassword)} />
                    )}
                </div>
            </div>

            {errorLogin && <p className="message-error">Usuario não encontrado !</p>}

            <div className="box-button-form-login">
                <button className="button-form-login button-color-company" type="submit">
                    Entrar
                </button>
            </div>
        </form>
    )
}