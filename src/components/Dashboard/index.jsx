import React, { useState, useEffect } from 'react'
import OverallSummary from './OverallSummary';
import FinancialSummary from './FinancialSummary';
import Chart from "chart.js/auto"
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);
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
  const monthlyGoal = 100000;
  const months = [...new Set(payments.map(payment => payment.date.substring(0, 7)))];

  const totalIncome = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const highPriorityMaintenance = maintenance.filter((request) => request.priority === "High");
  const calculateAverageMonthlyIncome = () => {
    const averageIncome = totalIncome / 12;
    return averageIncome;
  }
  const totalMonthlyIncome = calculateAverageMonthlyIncome();



  return (
    <div>
      <OverallSummary monthlyIncome={totalMonthlyIncome} totalIncome={totalIncome} totalExpenses={totalExpenses} highPriorityMaintenance={highPriorityMaintenance} />
      <div className="wrapper container d-flex flex-wrap justify-content-around p-3 mt-4 align-items-center">
        <div className='col-12 col-md-8'>
          <FinancialSummary payments={payments} monthlyGoal={monthlyGoal} months={months}/>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard;