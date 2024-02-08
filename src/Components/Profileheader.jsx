import React from 'react'
import { Link } from 'react-router-dom'

function Profileheader() {
  return (
    <>
     <div className='d-flex align-items-center justify-content-between' 
    style={{fontSize: '300%'}}>
        <p className='ms-2'>words</p>
        <div>
        <Link to={'/feed'} className='btn btn-warning me-3'>FEED</Link>
        <Link to={'/'} className='btn btn-danger me-4'>LOG-OUT</Link>
        </div>
    </div>
    </>
  )
}

export default Profileheader