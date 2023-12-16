import api from "../../../../api";

export const FunctionConsultJobsStudent = async () =>{
    try{
        const response = await api.get('/jobs/student/consult')
        const resultJobs = response.data;
        return resultJobs;
    }catch(error){
        console.error('erro ao consultar lista de vagas', error)
    }

}

