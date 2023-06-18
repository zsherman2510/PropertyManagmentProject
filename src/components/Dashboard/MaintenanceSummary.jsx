import React from 'react'
import { Pie } from 'react-chartjs-2'

const MaintenanceSummary = ({ maintenanceRequests }) => {
  const statusCounts = {
    Open: 0,
    "In Progress": 0,
    Closed: 0
  };

  const priorityCounts = {
    Low: 0,
    Medium: 0, 
    High: 0
  }

  maintenanceRequests.forEach((request) => {
    statusCounts[request.status]++;
    priorityCounts[request.priority]++;
  });

  const statusData = {
    maintainAspectRatio: true,
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: "Status",
        data: Object.values(statusCounts),
        backgroundColor: [
          "#1a37e8",
          "rgba(255,206,85,0.5)",
          "#4caf50",
        ],
        borderColor: [
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
        ],
        borderWidth: 1,

      },
    ],
  };
  return (
    <div className="dashboard-background p-3 align-self-center">
      <h2 className="font-bold mb-3 text-center">Maintenance Requests - Status</h2>
      <div className="my-4">
        <Pie id="custom-pie" data={statusData} />
      </div>
    </div>
  )
}

export default MaintenanceSummary