import { useEffect, useState } from 'react'
import './showJobs-style.css'
import { set } from 'date-fns';
import { FunctionCadasterJob } from '../function-home-student';

interface jobsPropsStudent{
    onClose:()=> void;
    IDStudent: number;
    nameStudent: string;
    idJob: number;
    idCompany: number;
    titleJob: string;
    nameCompanyJob: string;
    locationJob: string;
    dateJob:string;
    descriptionJob: string;
}


export default function ShowJobs({ onClose, IDStudent, nameStudent, idCompany, idJob, titleJob, nameCompanyJob, locationJob, descriptionJob, dateJob }:jobsPropsStudent ) {

    const [isShowJobsActive, setIsShowJobsActive] = useState(true);
    const [jobConfirmed, setJobConfirmed] = useState(false);
    const idjob:number = ({ idJob } = {idJob}).idJob;

    useEffect(() => {
        const localStorageValue = localStorage.getItem(`jobConfirmed_${IDStudent}_${idJob}`);
        if (localStorageValue === 'true') {
          setJobConfirmed(true);
        }
      }, [IDStudent, idJob]);

      useEffect(() => {
        if (jobConfirmed) {
          localStorage.setItem(`jobConfirmed_${IDStudent}_${idJob}`, 'true');
        }
      }, [jobConfirmed, IDStudent, idJob]);
   
    
    
    const closeShowJobs = () => {
        setIsShowJobsActive(false);
        onClose(); 
    };


    const clickConfirmJob =  async (idCompany: number, idJob: number, titleJob: string, IDStudent: number, nameStudent: string):void => { 
         if(jobConfirmed === false){
            try {
                const response = await FunctionCadasterJob(idCompany, idJob, titleJob, IDStudent, nameStudent); 
                setJobConfirmed(response);
              } catch (error) {
                console.error('Erro ao candidatar usuário a vaga escolhida', error);
                setJobConfirmed(false);
              }
         }
           
    }

    return (
        isShowJobsActive && (
            <div className="container-show-jobs">

                <div className="sub-container-show-jobs">

                    <div className="box-top-data-company">

                        <h1 className="title-show-jobs">
                            {titleJob}
                        </h1>
                        
                        <p className="title-show-company">
                            {nameCompanyJob}
                        </p>

                        <p className="title-show-location-company">
                            {locationJob}
                        </p>

                        <p className="title-show-location-company">
                            {dateJob}
                        </p>
                        
                    </div>

                    <div className="show-functions-jobs">
                        <h1 className="title-functions-jobs">Descrição e Requisitos</h1>
                        <p className="text-functions-jobs">
                         {descriptionJob}                        
                        </p>
                    </div>

                    <div className="box-buttons-show-jobs">


                        <button className={jobConfirmed ? "sent-show-jobs sent-show-jobs-red" : "sent-show-jobs"} onClick={() => clickConfirmJob(idCompany, idjob, titleJob, IDStudent, nameStudent)}>
                            {jobConfirmed  ? "Candidatado" : "Candidatar"}
                        </button>

                        <button className="closed-show-jobs" onClick={closeShowJobs}>
                            Fechar
                        </button>
                    </div>

                </div>

            </div>
        )
    )
}