import api from "../../../../api"

export const Register = async (data: any) =>{
    try{
         await api.post('/student/register', data);
    }catch(error){
        console.error('erro ao cadastrar estudante', error)
        throw new Error('Erro ao cadastrar estudante');
    }
} 


export const Login = async (data: any) =>{
    try{
        const response = await api.post('/student/login', data);
        const dataStudent = response.data.user;
        return dataStudent;
        
    }catch(error){
        console.error('erro ao conectar estudante', error)
        throw new Error('Erro ao conectar estudante');

    }
} 



