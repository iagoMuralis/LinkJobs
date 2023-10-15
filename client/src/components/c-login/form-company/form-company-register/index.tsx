import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from "react-hook-form";

import { Register } from '../function-onsubmit-company';

type DataInput = {
    name: string,
    city: string,
    email: string,
    password: string,
}

interface FormCompanyRegisterProps {
    toggleForm: () => void; // Função para alternar para o formulário de login
}

export default function FormCompanyRegister({ toggleForm }: FormCompanyRegisterProps) {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errorLogin, setErrorLogin] = useState<boolean>(false);
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

            reset();

            toggleForm();//para mudar de componente

        } catch (error) {
            
                setErrorLogin(true)
                setLoadingButton(false);
   
        }
    }

    return (
        <form className="container-form-login color-company-form-login" onSubmit={handleSubmit(onSubmit)}>
            <div className="box-input-login">
                <label htmlFor="" className="name-input color-company-name-input">Nome empresa</label>
                <input type="text" className="input-form" placeholder='Digite o nome da empresa...' required
                    {...register("name")}
                />
            </div>

            <div className="box-input-login">
                <label className="name-input color-company-name-input">Cidade</label>
                <select id="city" className="input-form select-register" {...register("city")} required >
                    <option value='' ></option>
                    <option value='Mogi das Cruzes'>Mogi das Cruzes - São Paulo</option>
                    <option value='Suzano'>Suzano - São Paulo</option>
                    <option value='Poá'>Poá - São Paulo</option>
                    <option value='itaquaquecetuba'>Itaquaquecetuba - São Paulo</option>
                    <option value='Guararema'>Guararema - São Paulo</option>
                </select>
            </div>

            <div className="box-input-login">
                <label htmlFor="" className="name-input color-company-name-input">Email</label>
                <input type="email" className="input-form" placeholder='Digite seu email' required
                    {...register("email")}
                />
            </div>

            <div className="box-input-login">
                <label htmlFor="" className="name-input color-company-name-input">Senha</label>
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

                <button className="button-form-login button-color-company" type='submit'>
                    {loadingButton ? 'Cadastrando...' : 'Cadastrar'}
                </button>

            </div>
        </form>
    )
}