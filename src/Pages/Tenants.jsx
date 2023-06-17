import React, { useEffect, useState } from 'react'
import TableComponent from '../UIComponents/TableComponent';

const Tenants = () => {
  const [tenants, setTenants] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const { tenants } = await response.json();

        setTenants(tenants);
      } catch (error) {
        setError(error)
      }
    }

    fetchData();
  }, []);

  return (
    <div className="table-widget">
      <div className="d-flex justify-content-between">
      <h2>Tenants</h2>
        <div>
          <button className='btn btn-primary'>Add Tenants</button>
        </div>
      </div>
     
      {tenants.length > 0 ? (<TableComponent data={tenants}/>) : (<p>No tenants available</p>)}
    </div>
  )
}

export default Tenants