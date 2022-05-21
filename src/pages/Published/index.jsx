import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Published = () => {
  return (
    <div className='publish-wrap'>
        <Link className='blog-goBack' to = '/'>Go Back</Link>
        <div className='publish-img'><img  src = '/images/check.png' /></div>
        <h1 style={{width: '380px' , fontSize: '2rem' , color: 'rgb(11 136 43)'}}>Your blog is published</h1>
    </div>
  )
}

export default Published