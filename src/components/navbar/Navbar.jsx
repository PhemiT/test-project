import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='test__navbar'>
        <div className="navbar__container">
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
                <p>BARBE AND CIMON NOTAIRES</p>
            </div>
            <div className="navbar__links">
                <ul>
                    <li><a href="#">A PROPOS</a></li>
                    <li><a href="#">NOS SERVICES</a></li>
                    <li><a href="#">ARTICLES</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">EN</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar