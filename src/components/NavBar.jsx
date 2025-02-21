import React from 'react';
import {FaShoppingCart} from 'react-icons/fa'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <div className='flex flex-row justify-between'>
            <NavLink to='/'>
                <div>
                    <img src={logo} className="h-14" alt="Logo" />
                </div>
            </NavLink>
            <div>
                <NavLink>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/cart'>
                <div>
                    <FaShoppingCart/>
                </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar;