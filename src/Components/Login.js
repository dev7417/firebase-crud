import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth } from '../firebase';
import './form.css'

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleOnSubmit = async(e) => {
    e.preventDefault()
    try{

      const result = await auth.signInWithEmailAndPassword(email, password);
    }catch(error){
      console.log(error)
    }
  }
  return (

    <>
      <div className='form-setup'>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}
