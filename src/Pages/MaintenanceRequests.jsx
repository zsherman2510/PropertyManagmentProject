import React, {useState, useEffect} from 'react'
import TableComponent from '../UIComponents/TableComponent';

const MaintenanceRequests = () => {
  const [ maintenance, setMaintenance ] = useState([]);
  const [ error, setError ] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const { maintenanceRequests } = await response.json();

        setMaintenance(maintenanceRequests);
      } catch (error) {
        setError(error)
      }
    }

    fetchData();
  }, []);

  return (
    <div className="table-widget">
      <div className="d-flex justify-content-between">
      <h2>Maintenance Requests</h2>
        <div>
          <button className='btn btn-primary'>Add Maintenance</button>
        </div>
      </div>
     
      {maintenance.length > 0 ? (<TableComponent data={maintenance}/>) : (<p>No maintenance available</p>)}
    </div>
  )
}

export default MaintenanceRequests