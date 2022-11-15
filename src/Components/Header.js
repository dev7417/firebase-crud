import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router-dom';

export default function Header() {

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
                            <NavLink to='/login' className='px-2' style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold', fontSize: '22px' }}>Login</NavLink>
                            <NavLink to='/' style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold', fontSize: '22px', }}>
                                Sign up
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>

    )
}
