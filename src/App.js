import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';

function App() {
  return (
    <ResumeState>
      <div className="App">
        <Helmet>
          <title>Resume Builder - Create Your Perfect Resume</title>
          <meta name="description" content="Build your resume in minutes with our easy-to-use resume builder. Choose from multiple templates and customize to match your style." />
          <meta name="keywords" content="resume, cv, job application, resume templates, professional resume" />
          <meta name="author" content="Alqama" />
          <meta property="og:title" content="Resume Builder - Create Your Perfect Resume" />
          <meta property="og:description" content="Build your resume in minutes with our easy-to-use resume builder. Choose from multiple templates and customize to match your style." />
          <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
          <meta property="og:url" content="https://quick-resume.netlify.app/" />
          <meta property="og:type" content="website" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
