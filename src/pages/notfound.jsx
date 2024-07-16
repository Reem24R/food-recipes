// import React from 'react'
import {Link} from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Home from './home'
export default function Notfound() {
  return (
    <div className='grid place-content-center place-items-center'>
        <h1>   Not Found</h1>
        <Link path='/' element={<Home />}/>
    </div>
    
  )
}
