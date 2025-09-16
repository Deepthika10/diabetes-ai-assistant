import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function PatientPortal(){
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
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if patient just submitted data
    if (location.state?.submitted) {
      setSubmitted(true);
    }
  }, [location.state]);

  const handleSubmit = () => {
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
    
    // Clear form and show success message
    setPatientData({
      name: '',
      age: '',
      phone: '',
      hba1c: '',
      fpg: '',
      ppg: '',
      weight: '',
      height: ''
    });
    setSubmitted(true);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-gray-900 py-8 px-2" style={{background: 'linear-gradient(135deg, #e0f2fe 0%, #bbf7d0 100%)'}}>
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-primary-dark">Patient Dashboard</h3>
          <button onClick={handleLogout} className="btn outline border-gray-400 text-gray-600 hover:bg-gray-100">
            Logout
          </button>
        </div>

        {submitted ? (
          <div className="card bg-white shadow-lg rounded-xl p-8 text-center">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h4 className="text-xl font-bold text-green-700 mb-2">Data Submitted Successfully!</h4>
            <p className="text-gray-600 mb-6">Your health information has been securely sent to your healthcare provider.</p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => setSubmitted(false)} 
                className="btn btn-primary"
              >
                Submit New Data
              </button>
              <button 
                onClick={() => navigate('/input')} 
                className="btn outline border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                Advanced Input Tools
              </button>
              <button 
                onClick={handleLogout} 
                className="btn outline border-gray-400 text-gray-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="card bg-white shadow-lg rounded-xl p-6">
            <h4 className="text-lg font-semibold text-primary mb-4">Health Information Input</h4>
            <p className="text-gray-600 mb-6">Please provide your current health information. This data will be securely sent to your healthcare provider.</p>
            
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
              onClick={handleSubmit}
              className="btn btn-primary w-full mt-6"
              disabled={!patientData.name || !patientData.age}
            >
              Submit Health Information
            </button>
            
            <div className="text-center mt-4">
              <button 
                onClick={() => navigate('/input')} 
                className="btn outline border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                Use Advanced Input Tools (Upload Files, Voice, etc.)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
