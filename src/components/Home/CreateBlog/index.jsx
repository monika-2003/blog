import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const CreateBlog = () => {
  return (
    <div className='createBlog'>
        <Link to = '/content'>
            <button>Create</button>
        </Link>
        
    </div>
  )
}

export default CreateBlog