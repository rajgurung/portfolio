import './styelsheets/bootstrap.min.css';
// import './styelsheets/App.css';
import './styelsheets/custom.css'
import './styelsheets/style.css'
import './styelsheets/animate.css';
import './styelsheets/magnific-popup.css';
// Custom Styles
import './styelsheets/linear-icons.css';
import './styelsheets/fontawesome-all.min.css';
import './styelsheets/dark-mode.css';
import './styelsheets/projects.css';
import './styelsheets/cv.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Projects from './pages/Projects';

// import Landing from './pages/Landing';
import Landing from './pages/Landing';

import CvPage from './pages/CvPage';
import HirePage from './pages/HirePage';

// import Experience from './components/Experience';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Blogs />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:slug" element={<BlogDetail />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/hire" element={<HirePage />} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/cv" element={<CvPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
