import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from "./App";
import Layout from './components/Layout';
import MaintenanceRequests from './Pages/MaintenanceRequests';
import Payments from './Pages/Payments';
import Properties from './Pages/Properties';
import Tenants from './Pages/Tenants';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<App />}/>
          <Route exact path="/properties" element={<Properties />}/>
          <Route exact path="/payments" element={<Payments />}/>
          <Route exact path="/tenants" element={<Tenants />}/>
          <Route exact path="/maintenance" element={<MaintenanceRequests />}/>
          

        </Routes>
      </Layout>    
    </Router>
  )
}

export default AppRouter