import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { FunctionConsultDataInfoCurriculum, FunctionEditInfoCurriculumStudent } from '../function-profile-student/function-info-profile-student';


interface HomeStudentProps {
    dataStudent: any;
}

interface inputsType {
    listInfo: {
        id: string,
        city: string,
        course: string,
        semester: string,
        telephone: string,
        portfolio: string
    };
}

export default function FormInfoProfileStudente({ dataStudent }: HomeStudentProps) {

    const IDStudent = dataStudent.id;

    const [alterInputText, setAlterInputText] = useState<boolean>(false);
    const [formData, setFormData] = useState<inputsType["listInfo"]>({
        id:'',
        city: '',
        course: '',
        semester: '',
        telephone: '',
        portfolio: ''
    });

    useEffect(() => {
        const ConsultDataInfoCurriculum = async (IDStudent: any) => {
            try {
                const response = await FunctionConsultDataInfoCurriculum(IDStudent);
                setFormData({
                    id:response.id,
                    city: response.city,
                    course: response.course,
                    semester: response.semester,
                    telephone: response.telephone,
                    portfolio: response.portfolio
                });
            } catch (error) {
                console.error('erro ao consultar dados de curriculo', error);
            }
        }

        ConsultDataInfoCurriculum(IDStudent);

    }, []);


    const editCurriculumStudent = async () => {
        try {

            await FunctionEditInfoCurriculumStudent(formData);
            setAlterInputText(false);
            ConsultDataInfoCurriculum(IDStudent);

        } catch (error) {
            console.error('erro ao editar curriculo', error);
        }

    }

    const ConsultDataInfoCurriculum = async (IDStudent: any) => {
        try {
            const response = await FunctionConsultDataInfoCurriculum(IDStudent);
            setFormData({
                id:response.id,
                city: response.city,
                course: response.course,
                semester: response.semester,
                telephone: response.telephone,
                portfolio: response.portfolio
            });
        } catch (error) {
            console.error('erro ao consultar dados de curriculo', error);
        }
    }

    

    function ReloadButton() {
        setAlterInputText(!alterInputText)
        ConsultDataInfoCurriculum(IDStudent);
    }


    

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
                        <select id="city" className="input-profile-student"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })} >
                            <option value='Mogi das Cruzes'>Mogi das Cruzes</option>
                            <option value='Suzano'>Suzano</option>
                            <option value='Poá'>Poá</option>
                            <option value='itaquaquecetuba'>Itaquaquecetuba</option>
                            <option value='Guararema'>Guararema</option>
                        </select>
                    ) : (
                        <p className="input-profile-student">{formData.city}</p>
                    )}


                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Curso</label>

                    {alterInputText ? (

                        <select id="Course" className="input-profile-student"
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}>
                            <option value="Ciencia da computacao">Ciência da Computação</option>
                            <option value="Sistemas de informacao">Sistemas de Informação</option>
                            <option value="Engenharia de software">Engenharia de Software</option>
                            <option value="Engenharia de computacao">Engenharia de Computação</option>
                            <option value="Seguranca da informacao">Segurança da Informação</option>
                            <option value="Analise de sistemas">Análise de Sistemas</option>
                            <option value="Redes de computadores">Redes de Computadores</option>
                            <option value="Inteligencia artificial">Inteligência Artificial</option>
                            <option value="Tecnologia da informacao">Tecnologia da Informação</option>

                        </select>

                    ) : (

                        <p className="input-profile-student">{formData.course}</p>

                    )}

                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Semestre atual</label>

                    {alterInputText ? (

                        <select id="semester" className="input-profile-student"
                        value={formData.semester}
                        onChange={(e) => setFormData({ ...formData, semester: e.target.value })}>
                            <option value="1° Semestre">1° Semestre</option>
                            <option value="2° Semestre">2° Semestre</option>
                            <option value="3° Semestre">3° Semestre</option>
                            <option value="4° Semestre">4° Semestre</option>
                            <option value="5° Semestre">5° Semestre</option>
                            <option value="6° Semestre">6° Semestre</option>
                            <option value="7° Semestre">7° Semestre</option>
                            <option value="8° Semestre">8° Semestre</option>
                        </select>

                    ) : (

                        <p className="input-profile-student"> {formData.semester}</p>

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
                            value={formData.telephone}
                            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        />

                    ) : (

                        <p className="input-profile-student">{formData.telephone}</p>

                    )}

                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Portfólio</label>

                    {alterInputText ? (

                        <input type="text" className="input-profile-student" 
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })} />

                    ) : (
                        <p className="input-profile-student">{formData.portfolio}</p>
                    )}

                </div>

                <div className="box-buttons-confirm-profile-student">

                    <button className="button-profile-student" type='button' onClick={ReloadButton} >
                        {alterInputText ? "Cancelar" : "Modificar"}
                    </button>

                    {alterInputText && (
                        <button className="button-profile-student" type="button" onClick={editCurriculumStudent}>
                            Salvar
                        </button>
                    )}

                </div>

            </form>

        </div>

    )
}