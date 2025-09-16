import React, {useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const SAMPLE = [
  {id:'P001',name:'John Doe',age:58,lastVisit:'2025-09-01',status:'Stable',hba1c:7.8,glucoseAvg:160},
  {id:'P002',name:'Maria Ruiz',age:44,lastVisit:'2025-08-25',status:'Needs Review',hba1c:9.1,glucoseAvg:210},
  {id:'P003',name:'Li Wei',age:35,lastVisit:'2025-09-10',status:'Stable',hba1c:6.4,glucoseAvg:120},
]

export default function DoctorDashboard(){
  const [query,setQuery] = useState('')
  const [allPatients, setAllPatients] = useState(SAMPLE)
  const [selected,setSelected] = useState(SAMPLE[0])
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/');
  };

  useEffect(() => {
    // Load patients from localStorage
    const storedPatients = JSON.parse(localStorage.getItem('patientData') || '[]');
    const combinedPatients = [...SAMPLE, ...storedPatients];
    setAllPatients(combinedPatients);
    
    // If there's a new patient from navigation state, select it
    if (location.state?.newPatient) {
      setSelected(location.state.newPatient);
    } else if (combinedPatients.length > 0) {
      setSelected(combinedPatients[0]);
    }
  }, [location.state]);

  const filtered = allPatients.filter(p=>p.name.toLowerCase().includes(query.toLowerCase())||p.id.toLowerCase().includes(query.toLowerCase()))
  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-gray-900 py-8 px-2" style={{background: 'linear-gradient(135deg, #e0f2fe 0%, #bbf7d0 100%)'}}>
      <div className="w-full max-w-5xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-primary-dark">Doctor Dashboard</h3>
          <button onClick={handleLogout} className="btn outline border-gray-400 text-gray-600 hover:bg-gray-100">
            Logout
          </button>
        </div>
        <div className="card bg-white shadow-lg rounded-xl p-6 mb-6">
          <input className="search w-full border border-primary-light rounded-lg p-2" placeholder="Search patients by name or ID" value={query} onChange={e=>setQuery(e.target.value)} />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="card bg-white shadow-lg rounded-xl p-4">
              <table className="table w-full">
                <thead>
                  <tr className="bg-primary-light text-primary-dark"><th>Name</th><th>Age</th><th>Last Visit</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {filtered.map(p=> (
                    <tr key={p.id} onClick={()=>setSelected(p)} className={selected?.id===p.id? 'bg-blue-100 cursor-pointer':'cursor-pointer hover:bg-blue-50'}>
                      <td>{p.name}</td>
                      <td>{p.age}</td>
                      <td>{p.lastVisit}</td>
                      <td className={p.status==='Needs Review'?'text-accent font-bold':'text-primary'}>{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="w-full md:w-80">
            <div className="card bg-white shadow-lg rounded-xl p-4">
              <h4 className="text-lg font-semibold text-primary mb-2">Patient Snapshot</h4>
              {selected && (
                <div>
                  <div className="font-bold text-lg">{selected.name}</div>
                  <div className="small muted mb-2">{selected.age} yrs • ID: {selected.id}</div>
                  {(selected as any).phone && <div className="small muted mb-2">Phone: {(selected as any).phone}</div>}
                  <div className="mb-2">
                    <div>Last HbA1c: <span className={selected.hba1c>8? 'text-accent font-bold':'text-primary'}>{selected.hba1c}%</span></div>
                    <div>Recent Glucose Avg: <span className={selected.glucoseAvg>180? 'text-accent font-bold':'text-primary'}>{selected.glucoseAvg} mg/dL</span></div>
                    {(selected as any).fpg && <div>Fasting Glucose: <span className={(selected as any).fpg>126? 'text-accent font-bold':'text-primary'}>{(selected as any).fpg} mg/dL</span></div>}
                    {(selected as any).ppg && <div>Post-meal Glucose: <span className={(selected as any).ppg>200? 'text-accent font-bold':'text-primary'}>{(selected as any).ppg} mg/dL</span></div>}
                    {(selected as any).weight && <div>Weight: <span className="text-primary">{(selected as any).weight} kg</span></div>}
                    {(selected as any).height && <div>Height: <span className="text-primary">{(selected as any).height} cm</span></div>}
                    {(selected as any).bmi && <div>BMI: <span className={(selected as any).bmi>30? 'text-accent font-bold':'text-primary'}>{(selected as any).bmi}</span></div>}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    <button className="btn bg-primary text-white hover:bg-primary-dark" onClick={() => navigate('/input')}>+ Add Input</button>
                    <button className="outline border-accent text-accent hover:bg-accent-light">Upload Lab</button>
                    <button className="outline border-primary text-primary hover:bg-primary-light">Voice Note</button>
                    <button className="outline border-primary text-primary hover:bg-primary-light">Text Input</button>
                    <button className="outline border-primary text-primary hover:bg-primary-light">Upload Image</button>
                    <button className="btn outline border-green-500 text-green-600 hover:bg-green-50" onClick={() => navigate('/analysis')}>View Analysis</button>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
        <div className="flex justify-end mt-4">
          <button className="btn outline border-gray-400 text-gray-600 hover:bg-gray-100" onClick={handleLogout}>Back to Login</button>
        </div>
      </div>
    </div>
  )
}
