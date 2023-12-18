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


  export const FunctionCadasterJob = async (idCompany: number, idJob: number, titleJob: string, IDStudent: number, nameStudent: string) => {
      try{

        const response = await api.post('/register/jobs/student', {
            idCompany: idCompany,
            idJob: idJob,
            titleJob: titleJob,
            IDStudent: IDStudent,
            nameStudent: nameStudent,
        });   

    }catch(error){
        console.error('erro ao candidatar usaurio a vaga escolhida', error)
    }
  }

