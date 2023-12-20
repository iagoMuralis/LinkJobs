import api from "../../../../../api";

export const FunctionConsultDataLogin = async (IDStudent:string)  => {
    try{
        const response = await api.get(`/profile/consult/datalogin/${IDStudent}`)
        const resultDataLogin = response.data.user;
        return resultDataLogin
        
    }catch(error){
        console.error('erro na função de consultar os dados do perfil ')
    }
   
}

export const FunctionEditLoginProfile = async(FormData:any) =>{
    try{
        const response = await api.put('/profile/update/student', FormData)
        
    }catch(error){
        console.error('erro ao editar usuario', error)
    }
}