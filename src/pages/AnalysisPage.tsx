import React from 'react'
import { DailyGlucoseChart } from '../components/GlucoseCharts'
import { useNavigate } from 'react-router-dom';

export default function AnalysisPage(){
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-gray-900 py-8 px-2" style={{background: 'linear-gradient(135deg, #e0f2fe 0%, #bbf7d0 100%)'}}>
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-primary-dark">AI Analysis & Prescription Suggestions</h3>
          <button onClick={handleLogout} className="btn outline border-gray-400 text-gray-600 hover:bg-gray-100">
            Logout
          </button>
        </div>

        <div className="card bg-white shadow-lg rounded-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-2">
              <div>FPG: <strong className="text-primary">110 mg/dL</strong></div>
              <div>PPG: <strong className="text-primary-dark">165 mg/dL</strong></div>
              <div>HbA1c: <strong className="text-accent">7.6%</strong></div>
              <div>Blood Pressure: <strong className="text-accent-dark">130/82 mmHg</strong></div>
            </div>
            <div className="w-full md:w-80">
              <div className="small muted mb-2">HbA1c vs Target (3 months)</div>
              <canvas style={{width:'100%',height:100,background:'#f3f6f9',borderRadius:8}}></canvas>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-lg rounded-xl p-6 mb-6">
          <h4 className="text-lg font-semibold text-primary mb-2">Glucose Variability (CGM-style)</h4>
          <div style={{height:220}}><DailyGlucoseChart /></div>
        </div>

        <div className="card bg-white shadow-lg rounded-xl p-6">
          <h4 className="text-lg font-semibold text-accent mb-2">Editable Prescription Draft</h4>
          <textarea className="w-full min-h-[120px] border border-primary-light rounded-lg p-2 mb-4" defaultValue={`Metformin 500 mg twice daily\nStart lifestyle: reduce refined carbs, exercise 30 min/day`} />

          <div className="flex gap-4 mt-2">
            <button className="btn bg-primary text-white hover:bg-primary-dark">Save to History</button>
            <button className="outline border-accent text-accent hover:bg-accent-light" onClick={() => navigate('/doctor')}>Back to Dashboard</button>
            <button className="outline border-primary text-primary hover:bg-primary-light" onClick={() => navigate('/input')}>Start New Input</button>
          </div>
        </div>
        
        <div className="flex justify-between mt-6">
          <button className="btn outline border-gray-500 text-gray-600 hover:bg-gray-100" onClick={() => navigate('/doctor')}>
            ← Back to Doctor Dashboard
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/doctor')}>
            Return to Patients
          </button>
        </div>
      </div>
    </div>
  )
}
