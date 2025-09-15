import React, {useState} from 'react'

export default function LoginPage(){
  const [role,setRole] = useState<'doctor'|'patient'>('doctor')

  return (
    <div style={{maxWidth:480,margin:'24px auto'}}>
      <div className="card">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{fontSize:36}}>🩺</div>
          <div>
            <h2 style={{margin:0}}>Diabetes AI Assistant</h2>
            <div className="small muted">Role-based access for Doctors and Patients</div>
          </div>
        </div>

        <div style={{marginTop:16}}>
          <label className="small">Role</label>
          <div style={{display:'flex',gap:12,marginTop:6}}>
            <label><input type="radio" name="role" checked={role==='doctor'} onChange={()=>setRole('doctor')} /> Doctor</label>
            <label><input type="radio" name="role" checked={role==='patient'} onChange={()=>setRole('patient')} /> Patient</label>
          </div>

          <div style={{marginTop:12}}>
            <label className="small">Email or Phone</label>
            <input className="search" placeholder="you@example.com or +1 555 555" />
          </div>

          <div style={{marginTop:12}}>
            <label className="small">Password</label>
            <input className="search" type="password" placeholder="••••••••" />
          </div>

          <div style={{marginTop:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <button className="btn">Login / Signup</button>
            <a className="small muted" href="#">Forgot?</a>
          </div>
        </div>
      </div>
    </div>
  )
}
