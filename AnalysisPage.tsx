import React from 'react'
import { DailyGlucoseChart } from '../components/GlucoseCharts'

export default function AnalysisPage(){
  return (
    <div>
      <h3>AI Analysis & Prescription Suggestions</h3>

      <div className="card">
        <div style={{display:'flex',gap:12}}>
          <div style={{flex:1}}>
            <div>FPG: <strong className="alert">110 mg/dL</strong></div>
            <div>PPG: <strong>165 mg/dL</strong></div>
            <div>HbA1c: <strong className="alert">7.6%</strong></div>
            <div>Blood Pressure: <strong>130/82 mmHg</strong></div>
          </div>
          <div style={{width:320}}>
            <div className="small muted">HbA1c vs Target (3 months)</div>
            <canvas style={{width:'100%',height:100,background:'#f3f6f9',borderRadius:8}}></canvas>
          </div>
        </div>
      </div>

      <div style={{marginTop:12}} className="card">
        <h4>Glucose Variability (CGM-style)</h4>
        <div style={{height:220}}><DailyGlucoseChart /></div>
      </div>

      <div style={{marginTop:12}} className="card">
        <h4>Editable Prescription Draft</h4>
        <textarea style={{width:'100%',minHeight:120}} defaultValue={`Metformin 500 mg twice daily\nStart lifestyle: reduce refined carbs, exercise 30 min/day`} />

        <div style={{display:'flex',gap:8,marginTop:12}}>
          <button className="btn">Save to History</button>
          <button className="outline">Continue Same Patient</button>
          <button className="outline">Start New Patient</button>
        </div>
      </div>
    </div>
  )
}
