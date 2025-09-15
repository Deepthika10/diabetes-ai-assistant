import React, {useState} from 'react'

export default function InputProcessing(){
  const [processing,setProcessing] = useState(false)
  const [summary,setSummary] = useState<any>(null)

  function handleUpload(e:any){
    const file = e.target.files?.[0]
    if(!file) return
    setProcessing(true)
    setTimeout(()=>{
      setProcessing(false)
      setSummary({fpg:110,hba1c:7.6,weight:82,bmi:28.4,complicationRisk:'Moderate'})
    },1800)
  }

  return (
    <div>
      <h3>Input Processing</h3>

      <div className="card">
        <div className="row">
          <div style={{flex:1}}>
            <div className="small muted">Upload lab report (PDF/image)</div>
            <input type="file" onChange={handleUpload} />

            <div style={{marginTop:12}}>
              <div className="small muted">Voice dictation</div>
              <button className="outline">Start Voice (mock)</button>
            </div>

            <div style={{marginTop:12}}>
              <div className="small muted">Manual entry</div>
              <div style={{display:'flex',gap:8,marginTop:6}}>
                <input className="search" placeholder="HbA1c (%)" />
                <input className="search" placeholder="FPG (mg/dL)" />
                <input className="search" placeholder="PPG (mg/dL)" />
              </div>
            </div>
          </div>

          <div style={{width:300}}>
            <div className="card">
              <div className="small muted">Processing status</div>
              {processing ? (
                <div>
                  <div style={{marginTop:8}}>Analyzing diabetes-related parameters...</div>
                  <div style={{height:8,background:'#eef2f6',borderRadius:8,marginTop:8}}>
                    <div style={{width:'70%',height:8,background:'var(--accent)',borderRadius:8}}></div>
                  </div>
                </div>
              ) : (
                <div className="small muted">Idle</div>
              )}

              {summary && (
                <div style={{marginTop:12}}>
                  <div style={{fontWeight:700}}>Auto-generated summary</div>
                  <div className="small muted">Fasting Glucose: {summary.fpg} mg/dL</div>
                  <div className="small muted">HbA1c: {summary.hba1c}%</div>
                  <div className="small muted">Weight: {summary.weight} kg • BMI: {summary.bmi}</div>
                  <div className="small muted">Complication risk: {summary.complicationRisk}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
