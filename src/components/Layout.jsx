import React from 'react'
import Nav from './Nav'
import Footer from './Footer'


const Layout = ({ children }) => {
  return (
    <div className='d-flex flex-column' style={{ minHeight: '100vh'}}>
      <Nav />
      { children }
      <Footer />
    </div>
  )
}

export default Layout