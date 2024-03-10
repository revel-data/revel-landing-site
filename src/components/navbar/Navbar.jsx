import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/full_logo.png'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#whatprofata'>What is Profata?</a></p>
    <p><a href='#features'>Features</a></p>
    <p><a href='#possibility'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
    <p><a href='#team'>Team</a></p>
  </>
)

//BEM --> Block Element Modifier annotation followed
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='profata__navbar'>
      <div className='profata__navbar-links'>
        <div className='profata__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='profata__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='profata__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className="profata__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="profata__navbar-menu_container scale-up-center">
            <div className="profata__navbar-menu_container-links">
              <Menu />
              <div className='profata__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
