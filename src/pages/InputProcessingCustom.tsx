import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InputProcessingCustom() {
  const [inputMode, setInputMode] = useState<'placeholder' | 'textarea'>('placeholder');
  const [inputData, setInputData] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      // Store the processed data and navigate
      localStorage.setItem('lastProcessedData', inputData);
      navigate('/patient', { state: { submitted: true } });
    }, 2000);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-gray-900 py-8 px-2" style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #bbf7d0 100%)' }}>
      <div className="w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-primary-dark">Advanced Input Tools</h3>
          <button onClick={handleLogout} className="btn outline border-gray-400 text-gray-600 hover:bg-gray-100">
            Logout
          </button>
        </div>
        
        <div className="card bg-white shadow-lg rounded-xl p-6 mb-6">
          <div className="card-header mb-4">
            <h2 className="card-title text-xl font-bold mb-2">AI-Powered Data Analysis</h2>
            <p className="card-subtitle text-gray-500">Upload or input patient data for instant AI insights</p>
          </div>
          <div className="card-body">
            <div className="input-container mb-4" onClick={() => setInputMode('textarea')} style={{ cursor: 'pointer' }}>
              {inputMode === 'placeholder' ? (
                <div className="input-placeholder text-gray-400 p-4 border border-dashed border-blue-300 rounded-lg bg-blue-50">
                  Describe patient symptoms, upload lab reports, or paste medical data...
                </div>
              ) : (
                <textarea 
                  className="input-area w-full border border-primary-light rounded-lg p-2 min-h-[120px]" 
                  placeholder="Enter patient information, symptoms, or paste lab results here..." 
                  autoFocus 
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                />
              )}
            </div>
            
            {isProcessing ? (
              <div className="text-center p-4">
                <div className="text-blue-600 text-lg mb-2">Processing your data...</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
                </div>
              </div>
            ) : (
              <>
                <button 
                  className="run-button btn btn-primary w-full mb-4"
                  onClick={handleAnalyze}
                  disabled={!inputData.trim()}
                >
                  Analyze & Submit to Doctor
                </button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                  <button className="btn btn-secondary">Upload Lab Report</button>
                  <button className="btn btn-secondary">Voice Input</button>
                  <button className="btn btn-secondary">Glucose Meter Photo</button>
                  <button className="btn btn-secondary">Manual Data Entry</button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="btn outline border-gray-500 text-gray-600 hover:bg-gray-100" onClick={() => navigate('/patient')}>
            ← Back to Patient Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
