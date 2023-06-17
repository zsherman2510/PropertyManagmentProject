import React from 'react'
import DashboardWidget from '../../UIComponents/DashboardWidget'

const OverallSummary = ({ monthlyIncome, totalIncome, totalExpenses, highPriorityMaintenance }) => {

  const dollarMonthly = monthlyIncome.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  const dollarTotal = totalIncome.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  const dollarTotalExpenses = totalExpenses.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

  const amountOfHighPriorityRequests = highPriorityMaintenance.length;

  return (
   <div className="container property-summary" style={{ padding: '40px'}}>
      <DashboardWidget title="Monthly Income" value={ dollarMonthly } color="#1a73e8" />
      <DashboardWidget title="Total Income" value={ dollarTotal } color="#4caf50" />
      <DashboardWidget title="Total Expenses" value={ dollarTotalExpenses } color="#e53935" />
      <DashboardWidget title="High Priority M/R" value={ amountOfHighPriorityRequests } color="#ff9800" />

   </div>
  )
}

export default OverallSummary