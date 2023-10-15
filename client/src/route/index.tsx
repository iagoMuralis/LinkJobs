import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './../pages/login';
import Student from '../pages/student';
import Company from '../pages/company';
// import NotFound from '../notFound';

export default function AppRoute() {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/student" element={<Student />} />
                <Route path="/company" element={<Company />} />
                {/*         <Route path="*" element={<NotFound />} /> */}

            </Routes>
        </Router>
    )
}