import React from 'react'
import Post from '../Components/Post'
import Profileheader from '../Components/Profileheader'
import Userpostedit from '../Components/Userpostedit'


function Profile() {
  return (
    <>
    <Profileheader></Profileheader>
    <div>
      {/* <div className='mt-3'>
        <div className='d-flex align-items-center justify-content-center ms-3 mb-3' 
        style={{backgroundColor:'#000000', height:'100px', width:'100px',border:'3px solid #ffffff'
        , borderRadius:'100px'}}>username</div>
      </div> */}
      <hr />
      <div className='mt-3 mb-4 ms-4'>
        <div style={{fontSize:'180%'}}>username</div>
        <div>user discription: Lorem ipsum dolor sit amet consectetur adipisicing elit.
           odio doloribus quaerat blanditiis optio quam ipsum, acere suscipit.</div>
      </div>
      <hr />
      <div className='d-flex align-items-center justify-content-center'>
      <Post></Post>
      </div>
      <hr />
      <div className='d-flex align-items-center justify-content-center'>
      <Userpostedit></Userpostedit>
      </div>
    </div>
    </>
  )
}

export default Profile