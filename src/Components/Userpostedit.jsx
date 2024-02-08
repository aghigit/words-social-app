import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'


function Userpostedit() {
    const [show,setShow]= useState(false)
    const handleShow =() => setShow(true)
    const handleClose= () => setShow(false)
  
  return (
    <>
    <div className=' mb-3' style={{ width: '90%',  border:"1px solid #292929", borderRadius:'4px'}}>
        <p className=' ms-3 mt-3' style={{textDecoration:"none", overflow:"hidden", fontSize:"150%"}}>
            "i dont know what to say"
        </p>
        <div className='ms-3'>
            <p className='p-1 text-success'>5.5M peoples shouted this word</p>
            <p className='p-1 text-primary'>511K peoples keep silent</p>
            <p className='p-1 text-danger'>999k peoples Rejected this word</p>
        </div>
        <hr />
        <div className='ms-4 mb-3'>
          <button onClick={handleShow} className='me-2 btn btn-danger'>change your word</button>
        </div>
    </div>
        <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='bg-dark' closeButton>
          <Modal.Title className='bg-dark'>Do You Really Want To Change Your Word?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
        <div className='mb-3 bg-dark'>
                <input type="text" name="" id="" placeholder='Be With Your Word'  className= 'border rounded w-100 p-2'/>
              </div>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="light" className='shadow' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success">Update</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Userpostedit