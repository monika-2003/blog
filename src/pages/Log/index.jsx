import React from 'react';
import './style.css';
import SignIn from '../../components/Home/SignIn';
import { Link } from 'react-router-dom';

const Log = () => {
  return (
    <div className='outer2'>
      <Link to='/' className='go-back'>Go Back</Link>
      <div className="btn">
        <SignIn />
      </div>

        <div className="container2">
            <h1>Log In</h1>
            <input type='email' id = 'email2' placeholder = 'Email' autoFocus={true}/>
            <input type='password' id = 'password2' placeholder = 'Password'/>
            <button id = 'btn2'>Log In</button>
        </div>

    </div>
  )
}

export default Log