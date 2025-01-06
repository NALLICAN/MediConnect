import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Navbar = () => {
    const navigate =useNavigate();

    const [showMenu,setShowMenu]=useState(false)
    const [token,setToken] =useState(true)//user is logged in if true
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
    <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo" onClick={() => navigate('/')} />        <ul className='hidden md:flex gap-5 font-medium'>
        <NavLink to="/" activeClassName="active">
          <li className='py-1'>Home</li>
          <hr className='border -none outline -none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/doctors" activeClassName="active">
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border -none outline -none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          <li className='py-1'>ABOUT</li>
          <hr className='border -none outline -none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          <li className='py-1'>CONTACT</li>
          <hr className='border -none outline -none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap 4'>
        {
            token 
            ?<div className='flex items-center gap-2 cursor-pointer group relative'>
                <img onClick={() => navigate('/')}className='w-8 rounded-full'src={assets.profile_pic} alt=""/>
                <img className='w-2.5' src={assets.dropdown_icon} alt=""/>
            
                 <div className='absolute top-0 right-0 pt-14 text-base font-medium test-gray-600 z-20 hidden  group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('MyProfile')} className='hover:text-pink-500 cursor-pointer'>My Profile</p>
                    <p  onClick={()=>navigate('MyAppointments')} className='hover:text-pink-500 cursor-pointer'>My Appointment</p>
                    <p onClick={()=>setToken(false)} className='hover:text-pink-500 cursor-pointer'>Logout</p>
                    </div>
                  </div>  
              </div>
            :<button onClick={()=>navigate('/login')}className='bg-primary text-white px-8  py-3 rounded-full font-light hidden md:block'>Create Account</button>
        }
      </div>
    </div>
  )
}

export default Navbar 