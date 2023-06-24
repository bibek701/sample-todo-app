import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='bg-black text-white flex justify-between px-5 py-3 items-baseline'>

      <div className='space-y-3'>
        <h1 className='text-2xl'>Demo</h1>
        {show && <nav className=' hidden sm:flex flex-col space-y-2  '>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </nav>}

      </div>

      <div>
        {show ? <button className='sm:flex hidden' onClick={() => setShow(!show)}  ><i className="fa-solid fa-xmark"></i></button> : <button onClick={() => setShow(!show)} className='sm:flex hidden'><i className="fa-solid fa-bars"></i></button>
        }
      </div>

      <nav className='space-x-5 sm:hidden'>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </nav>

    </div>
  )
}

export default Header