import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
      <main className="flex-grow-1 container mt-4">
        <Dashboard selectedLanguage={selectedLanguage} />
      </main>
      <Footer selectedLanguage={selectedLanguage} />
    </div>
  );
}

export default App;
