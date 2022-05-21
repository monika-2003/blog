import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const LogIn = () => {
  return (
    <div>
      <Link to='/log'>
        <button className='log-in'>Log In</button>
        </Link>
    </div>
  )
}

export default LogIn