import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand >
            <Link to={''} style={{textDecoration:'none',color:'light',fontSize:'30px'}}>
         <span className='text-light'><i className="fa-solid fa-play fa-beat-fade me-2"></i></span>   
           Media Player
            
            </Link>
         
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header