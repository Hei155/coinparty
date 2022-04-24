import React from 'react';
import {Line} from 'react-chartjs-2';

const Charts = () => {

  const state = {
    labels: ['09.2021', '10.2021', '11.2021', '12.2021'],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgb(0,0,0)',
        borderColor: '#43009c',
        borderWidth: 6,
        data: [4000, 5000, 3800, 12000],
        pointRadius: 0,
      }
    ]
  }

  return (
    <div>
      <Line
        data={state}
        options={{
          title: {
            display:true,
            text:'Average Rainfall per month',
            fontSize: 20
          },
          legend: {
            display: true,
            position:'right'
          },
          scales: {
            y: {
              grid: {
                color: 'white',
                drawBorder: false,
               
              },
              position: 'top',
              ticks: {
                display: false,
                beginAtZero: false,
                  min: 0,
                  max: 100,
              },
            },
            x: {
              grid: {
                drawBorder: false,
                color: 'white'
              },
              ticks: {
                font: {
                  size: 25,
                }
              }
            },
          }
        }}
      />
    </div>
  );
}

export default Charts;
