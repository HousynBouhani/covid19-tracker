import React from 'react'
import {Bar} from 'react-chartjs-2';
const Chart = ({data}) => {


const barChart = (
  data.TotalConfirmed ? (
  <Bar
  data={{
      labels:['Total Infected',' Total Reovered','Total Deaths'],
      datasets:[{
          label:'People',
          backgroundColor:[
              'rgba(0,0,255,0.5)',
              'rgba(0,255,0,0.5)',
              'rgba(255,0,255,0.5)'
          ],
          data:[data.TotalConfirmed,data.TotalRecovered,data.TotalDeaths]
      }]
  }}

  option={{
      legend:{display:false},
      title:{display:true,text:`Current state in`}
  }}
  
  />): null
)


  return (
 
      <div className="container mt-5 chart col-md-6">
         {barChart}
      </div>
  )
}

export default Chart
