import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/HomePage';
import LineDashboard from './components/LineDashboard';
import BarDashboard from './components/BarDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        <main className="flex-grow-1 container mt-4">
          <Routes>
            <Route path="/" element={<Homepage selectedLanguage={selectedLanguage} />} />
            <Route path="/line-dashboard" element={<LineDashboard selectedLanguage={selectedLanguage} />} />
            <Route path="/bar-dashboard" element={<BarDashboard selectedLanguage={selectedLanguage} />} />
          </Routes>
        </main>
        <Footer selectedLanguage={selectedLanguage} />
      </div>
    </Router>
  );
}

export default App;
