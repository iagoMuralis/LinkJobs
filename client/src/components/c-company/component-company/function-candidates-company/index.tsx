import api from "../../../../api";

export const FunctionConsultConfirmedJob = async (IDCompany:number) =>{
    try{
        const response = await api.get(`confirmedjob/consult/jobs/student/${IDCompany}`)
        const resultCandidates = response.data
        return resultCandidates

    }catch(error){
        console.error('error', error)
    }

}


export const FunctionDeleteConfirmedCandidate = async(IDCandidate: number) => {
    try{
        const response = await api.delete(`confirmedjob/delete/jobs/student/${IDCandidate}`)
        console.log(response)
    }catch(error){
        console.error('erro', error)
    }
}