import React from 'react';
import './mainCompany-style.css'

interface ContentProps {
    selectedComponent: JSX.Element;
    dataCompany: any;
}

export default function MainCompany({ selectedComponent, dataCompany}: ContentProps){
    return(
        <main className="render-screens-company">
           {React.cloneElement(selectedComponent, { dataCompany })} 
        </main>
    )
}