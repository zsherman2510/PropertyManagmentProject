import React, { useState, useEffect } from 'react'
import OverallSummary from './OverallSummary';

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [payments, setPayments] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mockResponse = await fetch("data.json");
        const res = await mockResponse.json();
        const { expenses, maintenanceRequests, payments, properties, tenants } = res;

        setExpenses(expenses);
        setPayments(payments);
        setProperties(properties);
        setTenants(tenants);
        setMaintenance(maintenanceRequests);

      } catch(e) {
        console.log(e);
      }
    }
    fetchData();
  }, [])
  const totalIncome = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const highPriorityMaintenance = maintenance.filter((request) => request.priority === "High");
  console.log(highPriorityMaintenance, 'high priority maintnenace')
  const calculateAverageMonthlyIncome = () => {
    const averageIncome = totalIncome / 12;
    return averageIncome;
  }
  const totalMonthlyIncome = calculateAverageMonthlyIncome();



  return (
    <div>
      <OverallSummary monthlyIncome={totalMonthlyIncome} totalIncome={totalIncome} totalExpenses={totalExpenses} highPriorityMaintenance={highPriorityMaintenance} />
    </div>
  )
}

export default Dashboard;