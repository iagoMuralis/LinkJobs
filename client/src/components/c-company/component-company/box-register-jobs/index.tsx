import './BoxRegisterJobs.css';
import { useForm } from "react-hook-form";
import { format } from 'date-fns';


import { functionRegisterJobs, functionConsultJobsCompany } from './../function-home-company';

interface RegisterJobsProps {
    dataCompany: any;
    nameJob: string;
    locationJob: string;
    descriptionJob: string;

}

export default function RegisterJobs({ dataCompany }: RegisterJobsProps) {

    const IDCompany = dataCompany.id;
    const nameCompany = dataCompany.name;

    const date = new Date();
    const dayJob = format(date, 'dd/MM/yyyy');
    

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<RegisterJobsProps>();

    const onSubmit = async (data:RegisterJobsProps) =>{
        try{
            const jobData = { ...data, IDCompany, nameCompany, dayJob };
            
            await functionRegisterJobs(jobData);

            window.location.reload();

            reset()
          
            
        }catch(error){
            console.error( 'erro ')
        }
    }


    return (
        <div className="container-register-jobs-company">
            <h1 className="title-register-jobs-company">
                Cadastrar Vagas
            </h1>

            <form className="form-inputs-register-jobs" onSubmit={handleSubmit(onSubmit)}>

                <div className="box-left-right-inputs-register-jobs">
                    <div className="box-inputs-register-jobs-left">

                        <div className="box-input-register-jobs">
                            <label htmlFor="" className='name-label-input-register-jobs'>Titulo da vaga</label>
                            <input type="" placeholder="Digite.." required className='input-register-jobs' 
                            {...register("nameJob")}
                            />
                        </div>

                        <div className="box-input-register-jobs">
                            <label htmlFor="" className='name-label-input-register-jobs'>localização</label>
                            <input type="" placeholder="Digite.." required className='input-register-jobs'
                            {...register("locationJob")}
                            />
                        </div>

                    </div>

                    <div className="box-inputs-register-jobs-right">

                        <div className="box-input-register-jobs">
                            <label htmlFor="" className='name-label-input-register-jobs'>Descrição</label>
                            <textarea placeholder="Digite.." required className='textarea-register-jobs'
                            {...register("descriptionJob")}
                            />
                        </div>

                    </div>
                </div>

                <div className="box-button-submit-register-jobs">
                    <button className="button-submit-register-jobs" type="submit">
                        Cadastrar
                    </button>

                </div>
            </form>
        </div>
    )
}