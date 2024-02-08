import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Post() {
  return (
    <>
      <div className='mb-3 ' style={{ width: '90%' }}>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicText">
            <Form.Control className='bg-dark text-light'
              as="textarea"
              placeholder="Say some words here"
              style={{ height: '100px' }}
            />
          </Form.Group>
        </Form>

        <div className='d-flex justify-content-end'>
          <button className='btn btn-success'>POST</button>
        </div>

      </div>
    </>
  )
}

export default Post