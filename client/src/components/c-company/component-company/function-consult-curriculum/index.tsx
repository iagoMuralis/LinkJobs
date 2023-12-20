import api from "../../../../api"

export const FunctionConsultCurriculumStudent= async (IDStudent:number) => {
    try{
        const response = await api.get(`/curriculum/consult/student/${IDStudent}`)
        const curriculum = response.data
        return curriculum
    }catch(error){
        console.error('erro ao buscar curriculo de usuario')
    }
}