import { useLocation } from 'react-router-dom';
import FormInfoPrimaryStudent from '../../components/c-update-curriculum-student/form-info-primary-student';
import './mainFormPrimaryStudent-style.css'

import ImageLinkJobs from '../../assets/LinkJobs LOGO Sem Fundo.png'
 

export default function UpdateStudent () {


    const location:any = useLocation();
    const dataStudent = location.state;

    
    return (
    <div className="container-main-form-info-primary-student">

        <div className="box-title-form-info-primary-student">


        <h1 className="title-form-info-primary-student">
            Ola <span className='color-title-info-primary-student'> {dataStudent.name} 
            <br />
             </span> seja bem vindo ao <span className='color-title-info-primary-student'>
            LinkJobs</span>
            
        </h1>
        
        <h2 className='subtitle-form-info-primary-student'>
        para iniciarmos, preencha esse formulario 
        <br />
        que sera utilizado para enviar para as empresas.
        </h2>


        </div>

        

        <div className="container-form-info-primary-student">
                <FormInfoPrimaryStudent dataStudent={dataStudent}/>

                <img src={ImageLinkJobs} alt="logo linkl jobs" className='logo-linkjobs-update-student' />
        </div>
    </div>
    );
};