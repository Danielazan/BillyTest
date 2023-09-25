import React from 'react'
import Form from "./Form"
import Background from 'asstes/BG2.jpg'
import Navbars from 'components/Navbars';

const SignUp = () => {
  return (
    <div className='w-screen h-screen  flex flex-col bg-formbg'>
      <Navbars/>
        <Form/>
    </div>
  )
}

export default SignUp