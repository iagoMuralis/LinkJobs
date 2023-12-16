import api from "../../../../api";

export const functionRegisterJobs = async (data: any) =>{
    try{
        await api.post('/jobs/register', data);
        console.log('job cadastrado')
    }catch(error){
        console.error('erro ao cadastrar empresa', error)
        throw new Error('Erro ao cadastrar estudante');
    }
} 

export const functionConsultJobsCompany = async (IDCompany: any) =>{
    try{
        const response  = await api.get(`/jobs/company/consult/${IDCompany}`);
        const resultJobs = response.data;
       
        return resultJobs;
        
        
    }catch(error){
        console.error('erro ao consulta vagas', error)
        throw new Error('Erro ao consultar vaga');
    }
} 

export const functionDeleteJobsCompany = async (IDJob: any) =>{
   
    try{
       await api.delete(`/jobs/company/delete/${IDJob}`); 
         
    }catch(error){
        console.error('erro ao apagar vaga', error)
        throw new Error('Erro ao apagar vaga');
    }
} 