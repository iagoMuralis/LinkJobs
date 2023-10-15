import '../home-style.css'
import { useState } from "react";

import MenuCompany from "../../components/c-company/header-menu-company";
import MainCompany from "../../components/c-company/main-company/main-company-render";
import HomeCompany from "../../components/c-company/main-company/screens-company/s-home-company";
import { useLocation } from 'react-router-dom';

export default function Company() {

    const [selectedComponent, setSelectedComponent] = useState<JSX.Element>(<HomeCompany />)

    const handleComponentChange = (component: JSX.Element) => {
        setSelectedComponent(component);
    }

    const location:any = useLocation();
    const dataCompany = location.state

    return (
        <main className="container-home">
            <div className="header-home">
                <MenuCompany handleComponentChange={handleComponentChange} dataCompany={dataCompany} />
            </div>

            <div className="main-home">
                <MainCompany selectedComponent={selectedComponent} dataCompany={dataCompany}/>
            </div>

        </main>

    )
}   