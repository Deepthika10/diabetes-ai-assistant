import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)

export function DailyGlucoseChart(){
  const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  const data = {
    labels,
    datasets:[{label:'Glucose (mg/dL)',data:[120,150,140,160,155,148,132],borderColor:'#0ea5a4',backgroundColor:'rgba(14,165,164,0.1)'}]
  }
  return <Line data={data} options={{responsive:true}} />
}

export function CarbResponseChart(){
  const labels = ['Breakfast','Lunch','Dinner']
  const data = {labels,datasets:[{label:'Glucose change',data:[25,40,30],borderColor:'#fb923c',backgroundColor:'rgba(251,146,60,0.08)'}]}
  return <Line data={data} options={{responsive:true}} />
}
