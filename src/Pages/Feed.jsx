import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import Feedpost from '../Components/Feedpost'


function Feed() {
  return (
    <>
    <Header></Header>
    <hr />
    {/* <div className=' row d-flex align-items-center justify-content-center'> */}
      <Row  className=' d-flex align-items-center justify-content-center'>
      <Feedpost></Feedpost>
      </Row>
    {/* </div> */}
    </>
  )
}

export default Feed