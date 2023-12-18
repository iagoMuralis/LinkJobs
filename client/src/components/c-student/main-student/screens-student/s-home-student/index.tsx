import { useEffect, useState } from 'react';
import BoxJobs from '../../../component-student/box-jobs'
import './homestudent-style.css'

import { FunctionConsultJobsStudent } from '../../../component-student/function-home-student';


interface HomeStudentProps {
    dataStudent: any;
}

interface Job {
    idcompany: string;
    idjob: number,
    idCompany: number,
    IDStudent: number,
    nameStudent: string,
    namejob: string;
    namecompany: string;
    locationjob: string;
    date: string;
    descriptionjob: string;
    
}

export default function HomeStudent({ dataStudent }: HomeStudentProps) {

    const [itemJob, setItemJob] = useState<Job[]>([]);
    const IDStudent = dataStudent.id
    const nameStudent = dataStudent.name 
    
    
    useEffect(() => {
        const ConsultJobsStudent = async () => {
            const resultJobs: Job[] = await FunctionConsultJobsStudent();
            setItemJob(resultJobs);
            
        }
        ConsultJobsStudent();

    }, [])

    



    return (
        <main className="container-home-jobs">
            <div className="box-title-top-screen">
                <h1 className="title-top-screen">
                    Vagas disponiveis
                </h1>
            </div>

            <div className="content-home-jobs">

                {itemJob.map((item, index) => (
                    
                    <BoxJobs
                        key={index}
                        idjob={item.idjob}
                        idCompany={item.idcompany}
                        nameStudent={nameStudent}
                        IDStudent={IDStudent}
                        titleJob={item.namejob}
                        nameCompanyJob={item.namecompany}
                        locationJob={item.locationjob}
                        dateJob={item.date}
                        descriptionJob={item.descriptionjob}
                    />
                ))}

            </div>
        </main>
    )
}