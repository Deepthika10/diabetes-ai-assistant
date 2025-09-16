import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [role, setRole] = useState('doctor');
  const [showRegister, setShowRegister] = useState(false);
  const [showPatientInput, setShowPatientInput] = useState(false);
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    phone: '',
    hba1c: '',
    fpg: '',
    ppg: '',
    weight: '',
    height: ''
  });
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-gray-900" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #bbf7d0 100%)' }}>
      <div className="login-container w-full max-w-md">
        <div className="card bg-white shadow-lg rounded-xl p-8">
          <div className="card-header mb-6">
            <h2 className="card-title text-2xl font-bold mb-2">Welcome to Diabetes AI Assistant</h2>
            <p className="card-subtitle text-gray-500">Please sign in to access your dashboard</p>
          </div>
          <div className="card-body">
            <div className="role-selection flex gap-4 mb-4">
              <div className={`role-option flex items-center cursor-pointer px-2 py-1 rounded ${role === 'doctor' ? 'bg-blue-100 border border-blue-400' : ''}`} onClick={() => setRole('doctor')}>
                <input type="radio" name="role" value="doctor" checked={role === 'doctor'} readOnly style={{ marginRight: 8 }} />
                <span>Healthcare Provider</span>
              </div>
              <div className={`role-option flex items-center cursor-pointer px-2 py-1 rounded ${role === 'patient' ? 'bg-blue-100 border border-blue-400' : ''}`} onClick={() => setRole('patient')}>
                <input type="radio" name="role" value="patient" checked={role === 'patient'} readOnly style={{ marginRight: 8 }} />
                <span>Patient</span>
              </div>
            </div>

            <div className="form-group mb-4">
              <label className="form-label block mb-1">Email Address / Phone Number</label>
              <input type="text" className="form-input w-full border border-primary-light rounded-lg p-2" placeholder="Enter your email or phone number" />
            </div>

            <div className="form-group mb-4">
              <label className="form-label block mb-1">Password</label>
              <input type="password" className="form-input w-full border border-primary-light rounded-lg p-2" placeholder="Enter your password" />
            </div>

            <button className="btn btn-primary w-full mb-3" onClick={() => {
              if (role === 'doctor') {
                navigate('/doctor');
              } else {
                setShowPatientInput(true);
              }
            }}>{role === 'doctor' ? 'Sign In' : 'Enter Health Data'}</button>

            <div style={{ textAlign: 'center' }}>
              <a href="#" style={{ color: '#60a5fa', textDecoration: 'none' }} onClick={e => { e.preventDefault(); setShowRegister(true); }}>Don't have an account? Create one</a>
            </div>
          </div>
        </div>

        {showRegister && (
          <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50" style={{ display: 'flex' }}>
            <div className="modal-content bg-white rounded-lg shadow-lg p-8 relative w-full max-w-md">
              <button className="close-btn absolute top-2 right-2 text-2xl" onClick={() => setShowRegister(false)}>&times;</button>
              <div className="card-header mb-4" style={{ background: 'transparent', border: 'none' }}>
                <h2 className="card-title text-xl font-bold mb-2">Create a New Account</h2>
                <p className="card-subtitle text-gray-500">Join the Diabetes AI Assistant community</p>
              </div>
              <div className="card-body">
                <div className="role-selection flex gap-4 mb-4">
                  <div className="role-option flex items-center cursor-pointer px-2 py-1 rounded bg-blue-100 border border-blue-400">
                    <input type="radio" name="registerRole" value="doctor" defaultChecked style={{ marginRight: 8 }} />
                    <span>Healthcare Provider</span>
                  </div>
                  <div className="role-option flex items-center cursor-pointer px-2 py-1 rounded">
                    <input type="radio" name="registerRole" value="patient" style={{ marginRight: 8 }} />
                    <span>Patient</span>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label className="form-label block mb-1">Full Name</label>
                  <input type="text" className="form-input w-full border border-primary-light rounded-lg p-2" placeholder="Enter your full name" />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label block mb-1">Email Address</label>
                  <input type="email" className="form-input w-full border border-primary-light rounded-lg p-2" placeholder="Enter your email address" />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label block mb-1">Create Password</label>
                  <input type="password" className="form-input w-full border border-primary-light rounded-lg p-2" placeholder="Create a strong password" />
                </div>
                <button className="btn btn-primary w-full mt-2">Register</button>
              </div>
            </div>
          </div>
        )}

        {showPatientInput && (
          <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50" style={{ display: 'flex' }}>
            <div className="modal-content bg-white rounded-lg shadow-lg p-8 relative w-full max-w-lg max-h-screen overflow-y-auto">
              <button className="close-btn absolute top-2 right-2 text-2xl" onClick={() => setShowPatientInput(false)}>&times;</button>
              <div className="card-header mb-4" style={{ background: 'transparent', border: 'none' }}>
                <h2 className="card-title text-xl font-bold mb-2">Patient Information Input</h2>
                <p className="card-subtitle text-gray-500">Please provide your health information</p>
              </div>
              <div className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <label className="form-label block mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="form-input w-full border border-primary-light rounded-lg p-2" 
                      placeholder="Enter your full name"
                      value={patientData.name}
                      onChange={(e) => setPatientData({...patientData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label block mb-1">Age</label>
                    <input 
                      type="number" 
                      className="form-input w-full border border-primary-light rounded-lg p-2" 
                      placeholder="Enter your age"
                      value={patientData.age}
                      onChange={(e) => setPatientData({...patientData, age: e.target.value})}
                    />
                  </div>
                  <div className="form-group md:col-span-2">
                    <label className="form-label block mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-input w-full border border-primary-light rounded-lg p-2" 
                      placeholder="Enter your phone number"
                      value={patientData.phone}
                      onChange={(e) => setPatientData({...patientData, phone: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label block mb-1">HbA1c (%)</label>
                    <input 
                      type="number" 
                      step="0.1"
                      className="form-input w-full border border-primary-light rounded-lg p-2" 
                      placeholder="e.g., 7.5"
                      value={patientData.hba1c}
                      onChange={(e) => setPatientData({...patientData, hba1c: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label block mb-1">Fasting Glucose (mg/dL)</label>
                    <input 
                      type="number" 
                      className="form-input w-full border border-primary-light rounded-lg p-2" 
                      placeholder="e.g., 120"
                      value={patientData.fpg}
                      onChange={(e) => setPatientData({...patientData, fpg: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label block mb-1">Post-meal Glucose (mg/dL)</label>
                    <input 
                      type="number" 
                      className="form-input w-full border border-primary-light rounded-lg p-2" 
                      placeholder="e.g., 160"
                      value={patientData.ppg}
                      onChange={(e) => setPatientData({...patientData, ppg: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label block mb-1">Weight (kg)</label>
                    <input 
                      type="number" 
                      step="0.1"
                      className="form-input w-full border border-primary-light rounded-lg p-2" 
                      placeholder="e.g., 70"
                      value={patientData.weight}
                      onChange={(e) => setPatientData({...patientData, weight: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label block mb-1">Height (cm)</label>
                    <input 
                      type="number" 
                      className="form-input w-full border border-primary-light rounded-lg p-2" 
                      placeholder="e.g., 170"
                      value={patientData.height}
                      onChange={(e) => setPatientData({...patientData, height: e.target.value})}
                    />
                  </div>
                </div>
                <button 
                  className="btn btn-primary w-full mt-6"
                  onClick={() => {
                    // Calculate BMI and glucose average
                    const bmi = patientData.weight && patientData.height ? 
                      (parseFloat(patientData.weight) / Math.pow(parseFloat(patientData.height) / 100, 2)).toFixed(1) : 0;
                    const glucoseAvg = patientData.fpg && patientData.ppg ? 
                      Math.round((parseFloat(patientData.fpg) + parseFloat(patientData.ppg)) / 2) : 0;
                    
                    // Store patient data in localStorage for the doctor dashboard
                    const patientRecord = {
                      id: `P${Date.now().toString().slice(-3)}`, // Generate a simple ID
                      name: patientData.name,
                      age: parseInt(patientData.age),
                      lastVisit: new Date().toISOString().split('T')[0],
                      status: parseFloat(patientData.hba1c) > 8 ? 'Needs Review' : 'Stable',
                      hba1c: parseFloat(patientData.hba1c),
                      glucoseAvg: glucoseAvg,
                      phone: patientData.phone,
                      weight: parseFloat(patientData.weight),
                      height: parseFloat(patientData.height),
                      bmi: bmi ? parseFloat(bmi) : 0,
                      fpg: parseFloat(patientData.fpg),
                      ppg: parseFloat(patientData.ppg)
                    };
                    
                    // Store in localStorage
                    const existingPatients = JSON.parse(localStorage.getItem('patientData') || '[]');
                    existingPatients.push(patientRecord);
                    localStorage.setItem('patientData', JSON.stringify(existingPatients));
                    
                    // Navigate to patient dashboard after successful submission
                    setShowPatientInput(false);
                    navigate('/patient', { state: { submitted: true } });
                  }}
                >
                  Submit Data
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
