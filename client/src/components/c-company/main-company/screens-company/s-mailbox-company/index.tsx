
import { useEffect, useState } from 'react';
import BoxConfirmedJobCompany from '../../../component-company/box-confirmed-job-company'
import { FunctionConsultConfirmedJob, FunctionDeleteConfirmedCandidate } from '../../../component-company/function-candidates-company';
import './mailBoxCompany-style.css'

interface HomeCompanyProps {
    dataCompany: any; 
}

interface consultStudentJob {
    idcompany: number;
    idjob: number;
    namejob: string;
    idstudent:number;
    namestudent: string;
    descriptionCandidate: string;
}


export default function MailBoxCompany({ dataCompany }: HomeCompanyProps) {

    const IDCompany: number= dataCompany.id;

    const [candidates, setCandites] = useState<consultStudentJob[]>([])
    const [forceUpdate, setForceUpdate] = useState<boolean>(false);


    useEffect(()=>{
        const consultConfirmedJob = async (IDCompany:number) => {
            try{
                const response: any = await FunctionConsultConfirmedJob(IDCompany)
                setCandites(response)
                
            }catch(error){
                console.error('erro ao receber consultas')
            }
            
        }

        consultConfirmedJob(IDCompany)
    
    },[forceUpdate])

    

    const handleDeleteCandidate = async (item: string) => {
        const IDCandidate = item.id;
        console.log(IDCandidate)
        try {
        await FunctionDeleteConfirmedCandidate(IDCandidate);
        setForceUpdate(prevState => !prevState);

        }catch(error){
            console.error(error)
        }
    
    }


    
    
   


    return (

        <main className='mailBoxCompany'>

            <h1 className='title-register-jobs-company'>Candidatos</h1>


            <div className="container-consult-confirmed-job-company">

                {candidates.map((item, index) =>(
                    <BoxConfirmedJobCompany
                        key={index}
                        idcompany={item.idcompany}
                        namejob={item.namejob}
                        idjob={item.idjob}
                        idstudent={item.idstudent}  
                        namestudent={item.namestudent}
                        descriptionCandidate={item.descriptionCandidate}
                        buttonDeleteCandidate={() => handleDeleteCandidate(item)}
                                       
                    />
                ))

                }

            </div>


        </main>


      
        
    )
}