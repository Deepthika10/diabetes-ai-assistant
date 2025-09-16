import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientPortal from './pages/PatientPortal';
import InputProcessing from './pages/InputProcessing';
import InputProcessingCustom from './pages/InputProcessingCustom';
import AnalysisPage from './pages/AnalysisPage';

export default function App() {
  return (
    <div className="app flex flex-col min-h-screen">
      <header className="topbar">
        <div className="brand">
          <div className="logo">🩺</div>
          <div className="title">Diabetes AI Assistant</div>
        </div>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/doctor">Doctor Dashboard</Link>
          <Link to="/patient">Patient Portal</Link>
          <Link to="/analysis">Analysis</Link>
        </nav>
      </header>

      <main className="container flex-1 flex flex-col">
        <Routes>
          {/* Login Page - Entry point for both doctors and patients */}
          <Route path="/" element={<LoginPage />} />
          
          {/* Doctor Flow: Login → Doctor Dashboard → Analysis */}
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          
          {/* Patient Flow: Login → Patient Portal → Advanced Input Tools */}
          <Route path="/patient" element={<PatientPortal />} />
          <Route path="/input" element={<InputProcessingCustom />} />
          
          {/* Legacy route for basic input processing (accessible from multiple flows) */}
          <Route path="/input-basic" element={<InputProcessing />} />
        </Routes>
      </main>
    </div>
  )
}
