import './containerProfileStudent-style.css'
import FormLoginProfileStudent from '../form-login-profile-left-student';
import FormInfoProfileStudente from '../form-info-profile-right-student';


interface HomeStudentProps {
    dataStudent:any;
}

export default function ContainerProfileStudent({ dataStudent }: HomeStudentProps){

    

    return(
        <div className="container-form-profile-student">
            <div className="container-left-form-profile">
                    <FormLoginProfileStudent dataStudent={dataStudent}/>
            </div>

            <div className="container-right-form-profile">

                <FormInfoProfileStudente dataStudent={dataStudent}/>

            </div>

        </div>

    )
}