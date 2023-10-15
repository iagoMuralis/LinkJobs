import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaTrash, FaTimes } from 'react-icons/fa';
import './BoxShowJobsCompany-style.css'
import { useState } from 'react';


interface typePropsShowJobs {
    titleJob: string;
    locationJob: string;
    dateJob: string;
    descriptionJob: string;
    buttonDeleteJob:()=> void;
}


export default function BoxShowJobsCompany(props: typePropsShowJobs) {

    const [showDescriptionJobs, setShowDescriptionJobs] = useState<boolean>(false);
    const [showDeleteJobs, setShowDeleteJobs] = useState<boolean>(false);

    

    return (

        <div className="box-show-jobs-company">
            <div className="box-titles-show-jobs-company">

                <h3 className="title-show-jobs-company">
                    {props.titleJob}
                </h3>

                <p className="location-show-jobs-company">
                    {props.locationJob}
                </p>

                <p className="date-show-jobs-company">
                    Publicado: {props.dateJob}
                </p>

            </div>



            <div className="box-description-show-jobs-company">

                <div className="box-buttons-show-jobs-company">

                    <button className="button-show-description-jobs-company" onClick={() => setShowDescriptionJobs(!showDescriptionJobs)}>
                        Descrição
                        {showDescriptionJobs ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>

                    {showDescriptionJobs && (
                        <p className="description-show-jobs">
                            {props.descriptionJob}
                        </p>
                    )}

                </div>


                <div className="box-showDeleteJobs-company">

                    <button className='button-delete-job-company' onClick={() => setShowDeleteJobs(!showDeleteJobs)}>
                        {showDeleteJobs ? <FaTimes /> : <FaTrash />}

                    </button>

                    {showDeleteJobs && (
                        <button className="button-confirm-delete-job" onClick={props.buttonDeleteJob}>Excluir</button>
                    )}
                </div>

            </div>
        </div>

    )
}