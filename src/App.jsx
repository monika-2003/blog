import React from 'react'
import './App.css';
import { Route , Switch } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogContent from './pages/BlogContent';
import Published from './pages/Published';
import Log from './pages/Log';
import Sign from './pages/Sign';


const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='/content' component={BlogContent} />
        <Route path='/published' component={Published} />
        <Route path='/log' component = {Log} />
        <Route path='/sign' component = {Sign} />
      </Switch>
    </div>
  )
}

export default App