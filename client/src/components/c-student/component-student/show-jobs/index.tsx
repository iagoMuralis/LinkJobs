import { useState } from 'react'
import './showJobs-style.css'

interface jobsPropsStudent{
    onClose:()=> void;
    titleJob: string;
    nameCompanyJob: string;
    locationJob: string;
    dateJob:string;
    descriptionJob: string;

}



export default function ShowJobs({ onClose, titleJob, nameCompanyJob, locationJob, descriptionJob, dateJob  }:jobsPropsStudent ) {

    const [isShowJobsActive, setIsShowJobsActive] = useState(true);


    const closeShowJobs = () => {
        setIsShowJobsActive(false);
        onClose(); // Chama a função de fechamento fornecida por props
    };

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
                        <h1 className="title-functions-jobs">Funcionalidades e Requisitos</h1>
                        <p className="text-functions-jobs">
                         {descriptionJob}                        
                        </p>
                    </div>

                    <div className="box-buttons-show-jobs">
                        <button className="sent-show-jobs">
                            Tenho Interesse
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