import { useState } from 'react';
import InputMask from 'react-input-mask';


interface HomeStudentProps {
    dataStudent: any;
}

interface inputsType {
    listInfo: {
        id: string;
        name: string;
        university: string;
        email: string;
        password: string;
    };
}

export default function FormInfoProfileStudente({ dataStudent }: HomeStudentProps) {

    const [alterInputText, setAlterInputText] = useState<boolean>(false);



    const IDStudent = dataStudent.id;
    const nameStudent = dataStudent.name;
    const emailStudent = dataStudent.email;
    const universityStudent = dataStudent.university;


    return (
        <div className="container-form-info-profile-student">

            <div className="box-title-form-info-profile">

                <h2 className="title-form-info-profile">
                    Informações Curriculares
                </h2>

            </div>

            <form className="form-info-profile-student">

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Cidade</label>

                    {alterInputText ? (
                        <select id="city" className="input-profile-student" >
                            <option value='' ></option>
                            <option value='Mogi das Cruzes'>Mogi das Cruzes - São Paulo</option>
                            <option value='Suzano'>Suzano - São Paulo</option>
                            <option value='Poá'>Poá - São Paulo</option>
                            <option value='itaquaquecetuba'>Itaquaquecetuba - São Paulo</option>
                            <option value='Guararema'>Guararema - São Paulo</option>
                        </select>
                    ) : (
                        <p className="input-profile-student"> teste</p>
                    )}


                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Curso</label>

                    {alterInputText ? (

                        <select id="Course" className="input-profile-student">

                            <option value='' ></option>
                            <option value="ciencia-computacao">Ciência da Computação</option>
                            <option value="engenharia-informatica">Engenharia Informática</option>
                            <option value="sistemas-informacao">Sistemas de Informação</option>
                            <option value="engenharia-software">Engenharia de Software</option>
                            <option value="engenharia-computacao">Engenharia de Computação</option>
                            <option value="seguranca-informacao">Segurança da Informação</option>
                            <option value="analise-sistemas">Análise de Sistemas</option>
                            <option value="redes-computadores">Redes de Computadores</option>
                            <option value="inteligencia-artificial">Inteligência Artificial</option>
                            <option value="tecnologia-informacao">Tecnologia da Informação</option>

                        </select>

                    ) : (

                        <p className="input-profile-student"> teste</p>

                    )}

                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Semestre atual</label>

                    {alterInputText ? (

                        <select id="semester" className="input-profile-student">
                            <option value='' ></option>
                            <option value="1° Semestre">1° Semestre</option>
                            <option value="2° Semestre">2° Semestre</option>
                            <option value="3° Semestre">3° Semestre</option>
                            <option value="4° Semestre">4° Semestre</option>
                            <option value="5° Semestre">5° Semestre</option>
                            <option value="6° Semestre">8° Semestre</option>
                            <option value="7° Semestre">6° Semestre</option>
                            <option value="8° Semestre">7° Semestre</option>
                        </select>

                    ) : (

                        <p className="input-profile-student"> teste</p>

                    )}

                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Telefone</label>

                    {alterInputText ? (

                        <InputMask
                            mask="(99) 99999-9999"
                            id="telefone"
                            name="telefone"
                            className="input-profile-student"
                        />

                    ) : (

                        <p className="input-profile-student"> teste</p>

                    )}

                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Portfólio</label>

                    {alterInputText ? (

                        <input type="text" className="input-profile-student" />

                    ) : (
                        <p className="input-profile-student"> teste</p>
                    )}

                </div>

                <div className="box-buttons-confirm-profile-student">

                    <button className="button-profile-student" type='button' onClick={() => setAlterInputText(!alterInputText)} >
                        {alterInputText ? "Cancelar" : "Modificar"}
                    </button>

                    <button className="button-profile-student" type="submit">
                        Confirmar
                    </button>

                </div>

            </form>

        </div>

    )
}