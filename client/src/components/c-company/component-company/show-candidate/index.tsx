import './showCandidate-style.css';
import { FunctionConsultCurriculumStudent } from '../function-consult-curriculum';
import { useEffect, useState } from 'react';
import imageProfile from './../../../../assets/img-profile-student.jpg'

interface TypeCurriculum {
  name: string;
  city: string;
  course: string;
  semester: string;
  email: string;
  telephone: string;
  university: string;
  portfolio: string;
  namejob: string;
  idstudent: number;
  onClose: () => void;
}

export default function ShowCandidate({ onClose, idstudent, namejob }: TypeCurriculum) {
  const [item, setItem] = useState<TypeCurriculum | null>(null);

  const closeShowCandidate = () => {
    onClose();
  };

  useEffect(() => {
    const consultCurriculumStudent = async (idstudent: number) => {
      try {
        const response = await FunctionConsultCurriculumStudent(idstudent);
        setItem(response || null);

      } catch (error) {
        console.error(error);
      }
    };

    consultCurriculumStudent(idstudent);
  }, [idstudent]);

  return (
    <div className="showCandidate">
      <div className="container-show-candidate">
      <img src={imageProfile} alt="" className='img-profile-candidate' />
        <div className="box-text-candidate">
          <h1 className="title-text-curriculum-candidate">Vaga: {namejob}</h1>
          {item && (
            <>
              <h2 className="sub-title-text-curriculum-candidate">Nome: <span>{item.name}</span></h2>
              <p className="text-curriculum-candidate">Cidade: <span>{item.city}</span></p>
              <p className="text-curriculum-candidate">Universidade: <span>{item.university}</span></p>
              <p className="text-curriculum-candidate">Curso: <span>{item.course}</span></p>
              <p className="text-curriculum-candidate">Semestre: <span>{item.semester}</span></p>
              <p className="text-curriculum-candidate">Email: <span>{item.email}</span></p>
              <p className="text-curriculum-candidate">Telefone: <span>{item.telephone}</span></p>
              <p className="text-curriculum-candidate">Portfolio: <span>{item.portfolio}</span></p>
            </>
          )}
        </div>

              
        
      </div>
      <button onClick={closeShowCandidate} className='button-closed-show-candidate'>Fechar</button>
    </div>
  );
}
