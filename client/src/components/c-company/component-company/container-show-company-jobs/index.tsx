import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './ShowJobsCompany-style.css'
import BoxShowJobsCompany from '../box-show-jobs-company';
import { useEffect, useState } from 'react';
import { functionConsultJobsCompany, functionDeleteJobsCompany } from '../function-home-company';

interface consultJobsProps {
    dataCompany: any;
    namejob: string;
    locationjob: string;
    date: string;
    descriptionjob: string;
}



export default function ShowJobsCompany({ dataCompany }: consultJobsProps) {

    const IDCompany = dataCompany.id;


    const [itemJob, setItemJob] = useState<consultJobsProps[]>([])


    useEffect(() => {
        const ConsultJobsCompany = async () => {
            const resultJobs: any = await functionConsultJobsCompany(IDCompany);
            setItemJob(resultJobs);
        }
        ConsultJobsCompany()
    }, [])





    const handleDeleteJob = async (item: string) => {
        const IDJob = item.id;
        await functionDeleteJobsCompany(IDJob);
        window.location.reload();

    }


    return (

        <div className="container-show-jobs-company">

            <h1 className='title-container-show-jobs-company'>
                Vagas publicadas
            </h1>

            <div className="container-render-box-show-jobs">


                {itemJob.map((item, index) => (
                    <BoxShowJobsCompany
                        key={index}
                        titleJob={item.namejob}
                        locationJob={item.locationjob}
                        dateJob={item.date}
                        descriptionJob={item.descriptionjob}
                        buttonDeleteJob={() => handleDeleteJob(item)}
                    />
                ))}


            </div>


        </div>
    )
}