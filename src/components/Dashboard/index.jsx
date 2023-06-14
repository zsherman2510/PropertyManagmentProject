import React, { useState, useEffect } from 'react'

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




  return (
    <div>index</div>
  )
}

export default Dashboard;