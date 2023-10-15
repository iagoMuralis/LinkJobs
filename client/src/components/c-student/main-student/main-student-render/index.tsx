import React from 'react';
import './mainStudent-style.css'

interface ContentProps {
    selectedComponent: JSX.Element;
    dataStudent: any;
}

export default function MainStudent({ selectedComponent, dataStudent}: ContentProps){
    return(
        <main className="render-screens-student">
            {React.cloneElement(selectedComponent, { dataStudent })} 
        </main>
    )
}