import { useEffect, useState } from 'react';
import ImgProfile from './../../../../assets/img-profile-student.jpg';
import './formProfileStudent-style.css';

import { FunctionConsultDataLogin } from '../function-profile-student/function-login-profile-student';
import { FunctionEditLoginProfile } from '../function-profile-student/function-login-profile-student';

interface HomeStudentProps {
    dataStudent: any;
}

interface inputsType {
    listLogin: {
        id: string;
        name: string;
        university: string;
        email: string;
        password: string;
    };
}

export default function FormLoginProfileStudent({ dataStudent }: HomeStudentProps) {
    const IDStudent = dataStudent.id;

    const [alterInputText, setAlterInputText] = useState<boolean>(false);
    const [formData, setFormData] = useState<inputsType["listLogin"]>({
        id: '',
        name: '',
        university: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        const ConsultDataLogin = async (IDStudent: any) => {
            try {
                const response = await FunctionConsultDataLogin(IDStudent);
                setFormData({
                    id: response.id,
                    name: response.name,
                    university: response.university,
                    email: response.email,
                    password: response.password,
                });
            } catch (error) {
                console.error('erro ao consultar dados de login', error);
            }
        }

        ConsultDataLogin(IDStudent);
    }, []);


    //function publica
    const editLoginStudent = async () => {
        try {

            await FunctionEditLoginProfile(formData);
            setAlterInputText(false);
            ConsultDataLogin(IDStudent);

        } catch (error) {
            console.error('erro ao editar cadastro', error);
        }

    }

    const ConsultDataLogin = async (IDStudent: any) => {
        try {
            const response = await FunctionConsultDataLogin(IDStudent);
            setFormData({
                id: response.id,
                name: response.name,
                university: response.university,
                email: response.email,
                password: response.password,
            });
        } catch (error) {
            console.error('erro ao consultar dados de login', error);
        }
    }

    function ReloadButton() {
        setAlterInputText(!alterInputText)
        ConsultDataLogin(IDStudent);
    }




    return (
        <div className="container-form-login-profile">
            <div className="box-img-profile">
                <img src={ImgProfile} alt="foto perfil" className="img-profile-student" />
            </div>
            <form className="form-login-profile-student">

                <div className="box-inputs-profile-student">
                    
                    <label htmlFor="" className="name-label-input-profile-student">Nome</label>

                    {alterInputText ? (
                        <input type="text" className="input-profile-student" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    ) : (
                        <p className="input-profile-student">{formData.name}</p>
                    )}

                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Universidade</label>

                    {alterInputText ? (
                        <select
                            id="university"
                            className="input-profile-student"
                            value={formData.university}
                            onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                        >
                            <option value='' ></option>
                            <option value='Universidade Mogi das Cruzes (UMC)'>Universidade Mogi das Cruzes (UMC)</option>
                            <option value='Universidade Braz Cubas (UBC)'>Universidade Braz Cubas (UBC)</option>
                            <option value='Fatec Mogi das Cruzes'>Fatec Mogi das Cruzes</option>
                        </select>

                    ) : (
                        <p className="input-profile-student">{formData.university}</p>
                    )}

                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Email</label>
                    {alterInputText ? (
                        <input type="text" className="input-profile-student" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    ) : (
                        <p className="input-profile-student">{formData.email}</p>
                    )}
                </div>

                <div className="box-inputs-profile-student">
                    <label htmlFor="" className="name-label-input-profile-student">Nova Senha</label>
                    {alterInputText ? (
                        <input type="text" className="input-profile-student" value={formData.password.trim()} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    ) : (
                        <p className="input-profile-student" typeof="password"> Mudar senha...</p>
                    )}
                </div>

                <div className="box-buttons-confirm-profile-student">

                    <button className="button-profile-student" type="button" onClick={ReloadButton}>
                        {alterInputText ? "Cancelar" : "Modificar"}
                    </button>

                    {alterInputText && (
                        <button className="button-profile-student" type="button" onClick={editLoginStudent}>
                            Salvar
                        </button>
                    )}
                </div>

            </form>

        </div>

    )
}
