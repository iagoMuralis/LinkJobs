import ContainerProfileStudent from '../../../component-profile-student/container-profile.student'
import './profileStudent-style.css'

interface HomeStudentProps {
    dataStudent: any;
}


export default function ProfileStudent({ dataStudent }: HomeStudentProps){
    
    return(
        <main className="container-profile-student">

            <div className="box-title-profile-student">
                <h1 className='title-profile-student'>Perfil</h1>
            </div>

            <ContainerProfileStudent dataStudent={dataStudent}/>

        </main>
    )
}