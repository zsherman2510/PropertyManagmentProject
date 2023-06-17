import React from 'react'

const DashboardWidget = ({ title, value, color }) => {

  const widgetStyle = {
    borderBottom: `5px solid ${color}`,
    background: '#fff'
  }
  return (
    <div className="dashboard-widget" style={ widgetStyle }>
      <h3 className="widget-value">{value}</h3>
      <p className="widget-title">{title}</p>
    </div>
  )
}

export default DashboardWidget