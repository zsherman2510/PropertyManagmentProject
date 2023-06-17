import React from 'react'
import { Line } from 'react-chartjs-2'

const FinancialSummary = ({ payments, months, monthlyGoal }) => {
  const monthlyTotals = months.map(month => {
    const monthlyPayments = payments.filter(payment => payment.date.startsWith(month));
    const totalAmount = monthlyPayments.reduce((sum, payment) => sum + payment.amount, 0);
    return totalAmount;
  });

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Total Rent Amount', 
        data: monthlyTotals,
        fill: false,
        borderColor: '#1a73e8',
        tension: 0.3,
      },
      {
        label: 'Goal', 
        data: Array(months.length).fill(monthlyGoal),
        fill: false,
        borderColor: '#4caf50',
        tension: 0.3,
      }
    ]
  }

  const options ={
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1000
        }
      }
    }
  }

  return (
    <div className="dashboard-background p-3">
      <h2 className="font-bold">Monthly Rent Payments</h2>
      <Line data={data} options={options}/>
    </div>
  )
}

export default FinancialSummary