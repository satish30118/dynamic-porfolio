import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './adminPanel/pages/Login';
import Dashboard from './adminPanel/pages/Dashboard';
import PrivateRoute from './adminPanel/pages/PrivateRoute';
import Services from './adminPanel/components/Services';
import Project from './adminPanel/components/Project';
import Contact from './adminPanel/components/Contact';
import Education from './adminPanel/components/Education';
import Experiences from './adminPanel/components/Experiences';
import Testimonial from './adminPanel/components/Testimonial';
import Aboutme from './adminPanel/components/Aboutme';
import Skill from './adminPanel/components/Skill';
import { AuthProvider } from './contextAPI/authContext';

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/:user" element={<Home />} /> */}
                        <Route path="/admin/login" element={<Login />} />
                        <Route exact path="/admin/dashboard/" element={<PrivateRoute />}>
                            <Route exact path="about" element={<Aboutme />} />
                            <Route exact path="skill" element={<Skill />} />
                            <Route path="services" element={<Services />} />
                            <Route path="project" element={<Project />} />
                            <Route path="experiences" element={<Experiences />} />
                            <Route path="education" element={<Education />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="testimonial" element={<Testimonial />} />
                        </Route>
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
