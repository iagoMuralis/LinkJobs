import RegisterJobs from "../../../component-company/box-register-jobs"
import ShowJobsCompany from "../../../component-company/container-show-company-jobs";

import './homeCompany-style.css'

interface HomeCompanyProps {
    dataCompany: any; 
}

export default function HomeCompany({ dataCompany }: HomeCompanyProps){
    return(
        <main className="container-home-jobs-company">
            <div className="container-register-jobs-home-company">
                <RegisterJobs dataCompany={dataCompany}/>
            </div>

            <div className="container-show-jobs-home-company">
                <ShowJobsCompany dataCompany={dataCompany}/>
            </div>

        </main>
    )
}