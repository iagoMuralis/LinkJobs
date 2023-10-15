import { useEffect, useState } from "react"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from "react-hook-form";

import { Register } from "../function-onsubmit-student";

type DataInput = {
    name: string,
    university: string,
    email: string,
    password: string,
}

interface FormCompanyStudentProps {
    toggleForm: () => void; // Função para alternar para o formulário de login
}

export default function FormStudentRegister({ toggleForm }: FormCompanyStudentProps) {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errorLogin, setErrorLogin] = useState<boolean>(false)
    const [loadingButton, setLoadingButton] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<DataInput>()


    const onSubmit = async (data: any) => {
        try {

            setLoadingButton(true);

            await new Promise(resolve => setTimeout(resolve, 2000));

            await Register(data);

            setErrorLogin(false);

            reset()

            toggleForm();//para mudar de componente

        } catch (error) {
                setErrorLogin(true)
                setLoadingButton(false);    
        }


    }

    return (
        <form className="container-form-login" onSubmit={handleSubmit(onSubmit)}>
            <div className="box-input-login">
                <label htmlFor="" className="name-input">Nome Completo</label>
                <input type="text" className="input-form" placeholder='Digite seu nome completo...' required
                    {...register("name")}
                />
            </div>

            <div className="box-input-login">
                <label className="name-input">Universidade</label>
                <select id="university" className="input-form select-register" required {...register("university")}>
                    <option value='' ></option>
                    <option value='umc'>Universidade Mogi das Cruzes (UMC)</option>
                    <option value='ubc'>Universidade Braz Cubas (UBC)</option>
                    <option value='fatec'>Fatec Mogi das Cruzes</option>
                </select>
            </div>

            <div className="box-input-login">
                <label htmlFor="" className="name-input">Email</label>
                <input type="text" className="input-form" placeholder='Digite seu email' required
                    {...register("email")}
                />
            </div>

            <div className="box-input-login">
                <label htmlFor="" className="name-input">Senha</label>
                <div className="input-password-visible"><input type={showPassword ? 'text' : 'password'} className="input-form" placeholder='Digite seu email' required
                    {...register("password")}
                />
                    {showPassword ? (
                        <FaEyeSlash size={25} onClick={() => setShowPassword(!showPassword)} />
                    ) : (
                        <FaEye size={25} onClick={() => setShowPassword(!showPassword)} />
                    )}
                </div>
            </div>

            {errorLogin && <p className="message-error">Email já utilizado !</p>}

            <div className="box-button-form-login">
                <button className="button-form-login" type="submit">
                    {loadingButton ? 'Cadastrando...' : 'Cadastrar'}
                </button>
            </div>
        </form>
    )
}