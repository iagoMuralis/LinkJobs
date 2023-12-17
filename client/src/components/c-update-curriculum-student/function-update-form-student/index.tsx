import api from "../../../api";

export const FunctionRegisterCurriculum = async (data: any) =>{
        try{
            await api.post('/curriculum/register/student', data); 
        } catch(errors){
            console.error('erro ao cadastrar dados para curriculum do estudante', errors)
        }
}

export const FunctionSetCurriculumStudent = async (IDStudent: number) =>{
    try{
        await api.put(`/curriculum/setcurriculum/student/${IDStudent}`);
    } catch(errors){
        console.error('erro ao consultar se a cadastro de formulario do usuario')
    }
}