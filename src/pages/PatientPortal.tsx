import React from 'react'
import { DailyGlucoseChart, CarbResponseChart } from '../components/GlucoseCharts'

export default function PatientPortal(){
  const name = 'Alexandra'
  return (
    <div>
      <h3>Welcome, {name}</h3>
      <div className="summary" style={{marginTop:12}}>
        <div className="card">
          <div className="small muted">Last HbA1c</div>
          <div style={{fontSize:20,fontWeight:700}}>7.4% <span className="small alert">(High)</span></div>
        </div>
        <div className="card">
          <div className="small muted">7-day Avg Glucose</div>
          <div style={{fontSize:20,fontWeight:700}}>152 mg/dL</div>
        </div>
        <div className="card">
          <div className="small muted">Hypo episodes (7d)</div>
          <div style={{fontSize:20,fontWeight:700}}>2</div>
        </div>
      </div>

      <div style={{marginTop:16}} className="card">
        <h4>Daily Glucose Trends</h4>
        <div style={{height:220}}><DailyGlucoseChart /></div>
      </div>

      <div style={{marginTop:12}} className="card">
        <h4>Carbs vs Glucose Response</h4>
        <div style={{height:220}}><CarbResponseChart /></div>
      </div>

      <div style={{marginTop:12}} className="card">
        <h4>Prescriptions</h4>
        <div className="small muted">Metformin 500mg twice daily</div>
        <h4 style={{marginTop:8}}>Lifestyle</h4>
        <div className="small muted">Reduce refined carbs, 30 min brisk walk daily</div>
      </div>
    </div>
  )
}
