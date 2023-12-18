import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import './formUpdateStudentPrimary-style.css'
import { FunctionRegisterCurriculum } from '../function-update-form-student';

import { FunctionSetCurriculumStudent } from '../function-update-form-student';
import { useNavigate } from 'react-router-dom';



type DataInput = {
    city: string,
    course: string,
    semester: string,
    telephone: string,
    portfolio: string,
};


export default function FormInfoPrimaryStudent({dataStudent}: any) {

    const navigate = useNavigate()


    const IDStudent: any = dataStudent.id

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<DataInput>();


const onSubmit = (data: DataInput) => {

        const dataID = {IDStudent, ...data};
        FunctionRegisterCurriculum(dataID);
        FunctionSetCurriculumStudent(IDStudent)
        navigate('/student', {state:dataStudent})
}





  return(
    <form className="form-info-student-primary" onSubmit={handleSubmit(onSubmit)}>

                <h1 className='subtitle-form-info-primary-student'>Preencha</h1>
                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Cidade</label>

                        <select id="city" className="input-profile-student"  {...register('city', {required: true})}>
                            <option value='' > {errors.city && <p>Selecione a cidade</p>} </option>
                            <option value='Mogi das Cruzes'>Mogi das Cruzes - São Paulo</option>
                            <option value='Suzano'>Suzano - São Paulo</option>
                            <option value='Poá'>Poá - São Paulo</option>
                            <option value='itaquaquecetuba'>Itaquaquecetuba - São Paulo</option>
                            <option value='Guararema'>Guararema - São Paulo</option>
                        </select>

                       
                    
                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Curso</label>

                        <select id="Course" className="input-profile-student" {...register('course', {required: true})}>

                            <option value='' >{errors.course && <p>Selecione o curso</p>}</option>
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

                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Semestre atual</label>

                        <select id="semester" className="input-profile-student" {...register('semester', {required: true})}>
                            <option value='' >{errors.semester && <p> Selecione o semestre atual</p>}</option>
                            <option value="1° Semestre">1° Semestre</option>
                            <option value="2° Semestre">2° Semestre</option>
                            <option value="3° Semestre">3° Semestre</option>
                            <option value="4° Semestre">4° Semestre</option>
                            <option value="5° Semestre">5° Semestre</option>
                            <option value="6° Semestre">6° Semestre</option>
                            <option value="7° Semestre">7° Semestre</option>
                            <option value="8° Semestre">8° Semestre</option>
                        </select>

                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Telefone</label>

                        <InputMask
                            mask="(99) 99999-9999"
                            id="telephone"
                            className="input-profile-student" 
                            {...register('telephone', {required:true})}
                        />
                        {errors.telephone && <p style={{color:'white'}}>Digite um telefone</p>}

                </div>

                <div className="box-inputs-profile-student">

                    <label htmlFor="" className="name-label-input-profile-student">Portfólio</label>


                        <input type="text" className="input-profile-student" {...register('portfolio', {required:true})}/>
                        {errors.portfolio && <p style={{color: 'white'}}>Digite seu porfolio publico</p>}

                </div>

                <div className="box-buttons-confirm-profile-student">

                <button className="button-update-student" type="submit">
                    Confirmar
                </button>

                </div>

            </form>
)
};