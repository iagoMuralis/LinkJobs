import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './../pages/login';
import Student from '../pages/student';
import Company from '../pages/company';
// import NotFound from '../notFound';

import UpdateStudent from '../pages/update-curriculum-student';


export default function AppRoute() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/student" element={<Student />} />
                <Route path="/company" element={<Company />} />
                {/*         <Route path="*" element={<NotFound />} /> */}

                <Route path="/updatestudent" element={<UpdateStudent />} />

            </Routes>
        </Router>
    )
}