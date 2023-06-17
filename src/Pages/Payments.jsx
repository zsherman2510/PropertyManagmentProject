import React, { useState, useEffect } from 'react'
import TableComponent from '../UIComponents/TableComponent';
const Payments = () => {
  const [ payments, setPayments ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const { payments } = await response.json();

        setPayments(payments);
      } catch (error) {
        setError(error)
      }
    }

    fetchData();
  }, []);

  return (
    <div className="table-widget">
      <div className="d-flex justify-content-between">
      <h2>Payments</h2>
        <div>
          <button className='btn btn-primary'>Add Payments</button>
        </div>
      </div>
     
      {payments.length > 0 ? (<TableComponent data={payments}/>) : (<p>No payments available</p>)}
    </div>
  )
}

export default Payments