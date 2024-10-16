import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='p-3 bg-dark' style={{boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}}>
      <Container>
        <div className='d-flex align-items-center justify-content-between'>
          <div>
            <h1 className='text-white'>STUdeNT dAtA</h1>
          </div>
          <div>
            <Link to={'/'} className='text-center text-white fw-medium me-3 text-decoration-none'>HOME</Link>
            <Link to={'/view'} className='text-center text-white fw-medium me-3 text-decoration-none'>VIEW</Link>
            <Link to={'/mui'} className='text-center text-white fw-medium me-3 text-decoration-none'>MUI</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
