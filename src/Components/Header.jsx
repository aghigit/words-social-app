import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='d-flex align-items-center justify-content-between' 
    style={{fontSize: '300%'}}>
        <p className='ms-3'>words</p>
        <Link to={'/profile'} className='btn btn-primary me-3'>PROFILE</Link>
    </div>
    </>
  )
}

export default Header