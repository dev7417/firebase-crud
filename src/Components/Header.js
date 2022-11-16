import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { auth } from '../firebase';
import { Outlet } from 'react-router-dom';

export default function Header() {
    const [loggedin, setloggedin] = useState()

    const handleLogOut = () => {
        auth.signOut();
    }
    useEffect(() => {

        auth.onAuthStateChanged((user) => {
            if (user) {
                setloggedin(user);
            } else {
                setloggedin(null)
            }
        })

    }, [])


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className='my-2'>
                    <NavLink to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '22px' }}>Firebase - CRUD</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            {
                                (loggedin)?   
                                <>
                                    <button className='btn btn-danger' onClick={handleLogOut}>Logout </button>
                                </>
                                

                                : <>

                                    <NavLink to='/' style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold', fontSize: '22px', }}>
                                <button className='btn btn-danger'>Sign up</button>
                            </NavLink>
                            <NavLink to='/login'><button className='btn btn-danger mx-2'> login</button></NavLink>

                                </>
                            

}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>

    )
}
