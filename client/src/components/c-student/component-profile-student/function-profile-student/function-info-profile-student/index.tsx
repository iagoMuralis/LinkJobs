import api from "../../../../../api";

export const FunctionConsultDataInfoCurriculum = async (IDStudent:string)  => {
    try{
        const response = await api.get(`/profile/consult/datacurriculum/${IDStudent}`)
        const resultDataCurriculum = response.data.user;
        return resultDataCurriculum
        
    }catch(error){
        console.error('erro na função de consultar os dados do curriculo ', error)
    }
   
}

export const FunctionEditInfoCurriculumStudent = async(FormData:any) =>{
    try{
        const response = await api.put('/profile/update/curriculum/student', FormData)
        
    }catch(error){
        console.error('erro ao editar usuario', error)
    }
}