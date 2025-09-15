import React, {useState} from 'react'

const SAMPLE = [
  {id:'P001',name:'John Doe',age:58,lastVisit:'2025-09-01',status:'Stable',hba1c:7.8,glucoseAvg:160},
  {id:'P002',name:'Maria Ruiz',age:44,lastVisit:'2025-08-25',status:'Needs Review',hba1c:9.1,glucoseAvg:210},
  {id:'P003',name:'Li Wei',age:35,lastVisit:'2025-09-10',status:'Stable',hba1c:6.4,glucoseAvg:120},
]

export default function DoctorDashboard(){
  const [query,setQuery] = useState('')
  const [selected,setSelected] = useState(SAMPLE[0])

  const filtered = SAMPLE.filter(p=>p.name.toLowerCase().includes(query.toLowerCase())||p.id.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      <h3>Doctor Dashboard</h3>
      <div className="card">
        <input className="search" placeholder="Search patients by name or ID" value={query} onChange={e=>setQuery(e.target.value)} />
      </div>

      <div style={{marginTop:12}} className="columns">
        <div>
          <div className="card">
            <table className="table">
              <thead>
                <tr><th>Name</th><th>Age</th><th>Last Visit</th><th>Status</th></tr>
              </thead>
              <tbody>
                {filtered.map(p=> (
                  <tr key={p.id} onClick={()=>setSelected(p)} style={{cursor:'pointer',background:selected?.id===p.id? '#f1f5f9':'transparent'}}>
                    <td>{p.name}</td>
                    <td>{p.age}</td>
                    <td>{p.lastVisit}</td>
                    <td>{p.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside>
          <div className="card">
            <h4>Patient Snapshot</h4>
            {selected && (
              <div>
                <div style={{fontWeight:700}}>{selected.name}</div>
                <div className="small muted">{selected.age} yrs • ID: {selected.id}</div>
                <div style={{marginTop:8}}>
                  <div>Last HbA1c: <span className={selected.hba1c>8? 'alert':''}>{selected.hba1c}%</span></div>
                  <div>Recent Glucose Avg: <span className={selected.glucoseAvg>180? 'alert':''}>{selected.glucoseAvg} mg/dL</span></div>
                </div>

                <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:12}}>
                  <button className="btn">+ Add Input</button>
                  <button className="outline">Upload Lab</button>
                  <button className="outline">Voice Note</button>
                  <button className="outline">Text Input</button>
                  <button className="outline">Upload Image</button>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}
