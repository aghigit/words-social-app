import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';




function Login() {
  return (
    <>
      <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
        <div className="container w-100 mt-5" style={{ border: '1px solid #b7b7b7', borderRadius: '5px' }}>
          <div className='d-flex justify-content-center align-items-center mt-2' style={{fontSize:'200%'}}>Words</div>
          <div className='d-flex justify-content-center align-items-center mb-3' style={{fontSize:'120%', fontStyle:'italic'}}>
            "speak your words to the world loudly"
          </div>
          <div className="row">
            {/* loginimage */}
            <div className="col-md-6 justify-content-center align-items-center p-3">
            <Form>
            <Form.Group className="mb-4 mt-1" controlId="formBasicEmail">
                  <Form.Control className="bg-dark text-light" type="email" placeholder="Enter email" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPsw">
                  <Form.Control className="bg-dark text-light" type="password" placeholder="Enter password" />
                </Form.Group>
              </Form>
              <div className='d-flex align-items-center justify-content-end '>
              <Link to={'/feed'} className='btn btn-success'>LOG-IN</Link>
              {/* <button className='btn btn-dark'>Log in</button> */}
              </div>
  
            </div>

            <div className="col-md-6  justify-content-center align-items-center">

              <Form>
               
                <Form.Group className="mb-3 mt-1" controlId="formBasicName">
                  <Form.Control className="bg-dark text-light" type="text" placeholder="Enter Name" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control className="bg-dark text-light" type="email" placeholder="Enter email" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPsw">
                  <Form.Control className="bg-dark text-light" type="password" placeholder="Enter password" />
                </Form.Group>
              </Form>
              <div className='d-flex align-items-center justify-content-end mb-3'>
              <button className='btn btn-primary'>Sign up</button>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login