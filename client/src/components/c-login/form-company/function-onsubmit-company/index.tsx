import api from "../../../../api"


export const Register = async (data: any) =>{
    try{
        await api.post('/company/register', data);
    }catch(error){
        console.error('erro ao cadastrar empresa', error)
        throw new Error('Erro ao cadastrar estudante');
    }
} 


export const Login = async (data: any) =>{
    try{
        const response = await api.post('/company/login', data);
        const dataCompany = response.data.user;
        return dataCompany;
    }catch(error){
        console.error('erro ao conectar empresa', error)
        throw new Error('Erro ao conectar empresa');

    }
} 



