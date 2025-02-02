import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/images/Logo.png'
import toggle from '../../assets/images/toggle.png'
import { Link, NavLink } from 'react-router-dom';
export default function NavBar() {
    const [isOpen, setISOpen] = useState(false);
    const handleOpen = () => {
      setISOpen (!isOpen)
    }
  return (
    <>
    <section className='MH-NAV'> 
        <div className='MH-NAVBAR'>
        <img src={logo} alt="" />
        <ul className={ `MH-navTogle ${ isOpen ? "open" : ""}`}>
            <NavLink to={'/'}className='MH-button'>HOME</NavLink>
            <NavLink to={'/ServicesPage'} className='MH-button'>SERVICES</NavLink>
            <NavLink to={'/ProjectsPage'} className='MH-button'>PROJECTS</NavLink>
            <NavLink to={'/AboutPage'} className='MH-button'>ABOUT</NavLink>
            <NavLink to={'/CareersPage'} className='MH-button'>CAREERS</NavLink>
            <NavLink to={'/BlogsPage'} className='MH-button'>BLOGS</NavLink>
            <Link to={'/ContactPage'} className='MH-lbutton'> CONTACT US</Link>
        </ul>
        <button className='togle ' onClick={handleOpen} ><img src={toggle} className='toggle-img' /></button>
        </div>
        
    </section>
    </>
  )
}
