import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Contents from './Contents.jsx'

function NavBar(){
    return(
        <nav>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Employee Management Application</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/employees">All Employees</Nav.Link>
                    <Nav.Link href="/report">Reports</Nav.Link>
                </Nav>
                
            </Navbar>
        </nav>
    )
}

export default function Page(){
    return(
        <div>
            <NavBar />
            <Contents />
        </div>
    )
}