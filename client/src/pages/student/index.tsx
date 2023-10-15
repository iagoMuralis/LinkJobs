import { useLocation } from "react-router-dom"

import MenuStudent from "../../components/c-student/header-menu-student";
import MainStudent from "../../components/c-student/main-student/main-student-render";
import HomeStudent from "../../components/c-student/main-student/screens-student/s-home-student";

import '../home-style.css'
import { useState } from "react";



export default function Student() {

    const [selectedComponent, setSelectedComponent] = useState<JSX.Element>(<HomeStudent />)

    const handleComponentChange = (component: JSX.Element) => {
        setSelectedComponent(component);
    }

    const location:any = useLocation();
    const dataStudent = location.state
    

    return (
        <main className="container-home">
            <div className="header-home">
                <MenuStudent handleComponentChange={handleComponentChange} dataStudent={dataStudent} />
            </div>

            <div className="main-home">
                <MainStudent selectedComponent={selectedComponent} dataStudent={dataStudent} />
            </div>

        </main>

    )
}   