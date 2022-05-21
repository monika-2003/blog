import React from 'react';
import './style.css';
import LogIn from '../../components/Home/LogIn'
import { Link } from 'react-router-dom';


const Sign = () => {
  return (
    <div className='outer'>
      <Link to='/' className='go-back'>Go Back</Link>

      <div className="btn">
        <LogIn />
      </div>
      

        <div className="container">
            <h1>Sign Up</h1>

            <input type='text' id = 'name' placeholder = 'User Name' autoFocus={true}/>
            <input type='email' id = 'email' placeholder = 'Email'/>
            <input type='password' id = 'password' placeholder = 'Password'/>
            <button id = 'btn'>Sign up</button>
        </div>

    </div>
  )
}

export default Sign