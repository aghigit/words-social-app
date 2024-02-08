import React from 'react'

function Feedpost() {
  return (
    <>
    <div className='mb-3' style={{ width: '90%',  border:"1px solid #292929", borderRadius:'4px'}}>
        <p className='p-1 mt-2' style={{color:'#e2e2e2', fontWeight:'500', fontSize:'190%'}}>
          Winston Churchill</p>
        <p style={{textDecoration:"none", overflow:"hidden", fontSize:"150%"}}>
            "if you are walking through the hell keep going"
        </p>
        <div>
            <p className='p-1 text-success'>5.5M peoples shouted this word</p>
            <p className='p-1 text-primary'>511K peoples keep silent</p>
            <p className='p-1 text-danger'>999k peoples Rejected this word</p>
        </div>
        <hr />
        <div className='ms-4 mb-3'>
            <button className='btn btn-success'>Shout</button>
            <button className='ms-5 btn btn-primary'>Silent</button>
            <span className='ms-5 btn btn-danger'>Reject</span>
        </div>
    </div>
    </>
  )
}

export default Feedpost