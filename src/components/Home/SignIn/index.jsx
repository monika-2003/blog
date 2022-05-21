import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SignIn = () => {
  return (
    <div> 
      <Link to = '/sign'>
        <button className='sign-in'>Sign Up</button>
      </Link>
    </div>
  )
}

export default SignIn