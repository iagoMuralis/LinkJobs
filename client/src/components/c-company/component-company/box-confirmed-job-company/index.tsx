import { useState } from 'react'
import imageStudent from './../../../../assets/img-profile-student.jpg'
import ShowCandidate from './../../component-company/show-candidate'

interface consultStudentJob {
    idcompany: number;
    idjob: number;
    namejob: string;
    idstudent:number;
    namestudent: string;
    buttonDeleteCandidate:()=> void;
}




export default function BoxConfirmedJobCompany(props: consultStudentJob){

    const [showButtonConfirmedDelete, setShowButtonConfirmedDelete] = useState<boolean>(false)
    const [showCandidate, setShowCandidate] = useState<boolean>(false)

   

    const openShowCandidate = () => {
        setShowCandidate(true);
    };

    const closeShowCandidate = () => {
        setShowCandidate(false);
    };


return(

    <div className="box-card-student-confirmed-job">
        <div className="box-profile-image-name-student-title-job-confirmed-job">
            <img src={imageStudent} className='img-profile-student-confirmedJob-card' />
            <div className="box-titles-confirmed-job-card">
                <h2 className='name-student-confirmed-job-card'>{props.namestudent}</h2>
                <h4 className='name-student-confirmed-job-card'> {props.namejob}</h4>
            </div>

        </div>
        <div className="box-buttons-confirmed-job-card">

            <button className='button-delete-confirmed-job-card color-three' onClick={()=> setShowCandidate(!showCandidate)}>Visualizar perfil</button>

            <div className="box-button-confirmed-delete-confirmed-job-company">
                
            <button className='button-delete-confirmed-job-card' onClick={() => setShowButtonConfirmedDelete(!showButtonConfirmedDelete)}>Apagar candidato</button>

            {showButtonConfirmedDelete &&
                <button className='button-confirmed-delete-confirmed-job-card ' onClick={props.buttonDeleteCandidate}>Confirmar</button>
            }

            { showCandidate && <ShowCandidate onClose={closeShowCandidate} idstudent={props.idstudent} namejob={props.namejob} /> }
            

            </div>
            

            </div>

        </div>



)
}