import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientPortal from './pages/PatientPortal';
import InputProcessing from './pages/InputProcessing';
import AnalysisPage from './pages/AnalysisPage';

export default function App() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <div className="logo">🩺</div>
          <div className="title">Diabetes AI Assistant</div>
        </div>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/doctor">Doctor</Link>
          <Link to="/patient">Patient</Link>
          <Link to="/input">Input</Link>
          <Link to="/analysis">Analysis</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/patient" element={<PatientPortal />} />
          <Route path="/input" element={<InputProcessing />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </main>
    </div>
  )
}
