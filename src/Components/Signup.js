import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth } from '../firebase';
import { useState } from 'react';
import './form.css'

export default function Signup() {
    const [fName, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = auth.createUserWithEmailAndPassword(email, password);
            console.log(result)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='form-setup'>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" value={fName} placeholder="Enter your Name" onChange={(e) => setFname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={lname} placeholder="Enter your last name" onChange={(e) => setLname(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}