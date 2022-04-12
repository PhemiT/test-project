import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='test__footer'>
        <div className="footer__container">
            <div className="footer__logo">
                <img src={logo} alt="logo" />
                <p>BARBE AND CIMON NOTAIRES</p>
            </div>
            <div className="footer__links">
                <ul>
                    <li><a href="#">A PROPOS</a></li>
                    <li><a href="#">NOS SERVICES</a></li>
                    <li><a href="#">ARTICLES</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">EN</a></li>
                </ul>
            </div>
            <div className="footer__contact">
                <h4>BUREAU</h4>
                <p>101, BOULEVARD SAINT JOSEPH O, MONTREAL, QC H2T 2P7</p>   
                <h4>NOUS SUIVRE</h4>                 
            </div>
        </div>
    </div>
  )
}

export default Footer