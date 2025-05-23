import './styelsheets/bootstrap.min.css';
// import './styelsheets/App.css';
import './styelsheets/custom.css'
import './styelsheets/style.css'
import './styelsheets/animate.css';
import './styelsheets/magnific-popup.css';
// Custom Styles
import './styelsheets/linear-icons.css';
import './styelsheets/fontawesome-all.min.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';

// import Landing from './pages/Landing';
import Landing from './pages/Landing';
import About from './components/About';

import CvPage from './pages/CvPage';

import Project from './components/Project';
import Experience from './components/Experience';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Blogs />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<BlogDetail />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/cv" element={<CvPage />} />
            </Routes>
        </Router>
    );
}

export default App;
