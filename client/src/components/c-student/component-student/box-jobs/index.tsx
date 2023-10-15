import { useState } from 'react';
import ImgEmpresa from './../../../../assets/logo-empresa.jpg';
import './boxJobs-style.css'
import ShowJobs from '../show-jobs';

interface jobsPropsStudent{
    titleJob: string;
    nameCompanyJob: string;
    locationJob: string;
    descriptionJob: string;
    dateJob:string;
}

export default function BoxJobs(props: jobsPropsStudent){

    const [showJobs, setShowJobs] = useState(false);

    const openShowJobs = () => {
        setShowJobs(true);
    };

    const closeShowJobs = () => {
        setShowJobs(false);
    };
    

    return(
        
        <div className="box-jobs">

            <img src={ImgEmpresa} className='img-company-job'/>

            <div className="data-jobs">
                <h1 className="title-jobs">
                    {props.titleJob}
                </h1>

                <p className="name-company-jobs">
                    {props.nameCompanyJob}
                </p>

                <p className="location-company-jobs">
                    {props.locationJob}
                </p>

                <p className="location-company-jobs">
                    {props.dateJob}
                </p>
            </div>

            <div className="box-button-show-jobs">
                <button className="button-show-jobs" onClick={openShowJobs}>
                    Visualizar
                </button>
            </div>

            {showJobs && <ShowJobs onClose={closeShowJobs} titleJob={props.titleJob} nameCompanyJob={props.nameCompanyJob} locationJob={props.locationJob} descriptionJob={props.descriptionJob} dateJob={props.dateJob}/>}
        </div>
    )
    
}