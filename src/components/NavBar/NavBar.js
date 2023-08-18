import React from 'react'
import '../../components/NavBar/navbar.css'
function NavBar() {
  return (
    <div className='header'>
       <a href=' nairarefill.com '><span id='black'>naira</span><span id='orange'>refill</span></a>
       <div className='button'>
        <button id='btn1'>Register</button>
        <button id='btn2'>Login</button>
       </div>
    </div>
  )
}

export default NavBar