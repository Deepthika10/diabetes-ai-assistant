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
    <div className="min-h-screen flex flex-col items-center bg-background text-gray-900 py-8 px-2" style={{background: 'linear-gradient(135deg, #e0f2fe 0%, #bbf7d0 100%)'}}>
      <div className="w-full max-w-2xl">
        <h3 className="text-2xl font-bold text-primary-dark mb-6 text-center">Input Processing</h3>

        <div className="card bg-white shadow-lg rounded-xl p-6 mb-6">
          <div className="flex flex-col gap-6">
            <div>
              <div className="small muted mb-2">Upload lab report (PDF/image)</div>
              <input type="file" onChange={handleUpload} className="mb-2" />
            </div>

            <div>
              <div className="small muted mb-2">Voice dictation</div>
              <button className="outline border-accent text-accent hover:bg-accent-light">Start Voice (mock)</button>
            </div>

            <div>
              <div className="small muted mb-2">Manual entry</div>
              <div className="flex gap-2 mt-2">
                <input className="search border border-primary-light rounded-lg p-2" placeholder="HbA1c (%)" />
                <input className="search border border-primary-light rounded-lg p-2" placeholder="FPG (mg/dL)" />
                <input className="search border border-primary-light rounded-lg p-2" placeholder="PPG (mg/dL)" />
              </div>
            </div>
          </div>
        </div>

        {processing && (
          <div className="card bg-primary-light text-primary-dark p-4 rounded-xl mb-4 text-center">Processing...</div>
        )}
        {summary && (
          <div className="card bg-accent-light text-accent-dark p-4 rounded-xl mb-4">
            <div className="font-bold mb-2">Summary</div>
            <div>FPG: <span className="font-semibold">{summary.fpg} mg/dL</span></div>
            <div>HbA1c: <span className="font-semibold">{summary.hba1c}%</span></div>
            <div>Weight: <span className="font-semibold">{summary.weight} kg</span></div>
            <div>BMI: <span className="font-semibold">{summary.bmi}</span></div>
            <div>Complication Risk: <span className="font-semibold">{summary.complicationRisk}</span></div>
          </div>
        )}
      </div>
    </div>
  )
}
