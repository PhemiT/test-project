import React from 'react'
import './header.css'
import headerImage from '../../assets/pen.png'

const Header = () => {
  return (
    <div className='test__header'>
        <div className="header__content">
            <div className="header__text">
                <h4>NOUS VALORISONS LA</h4>
                <h1>CLARTE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis, nihil id, nemo dolore sed quo expedita ad molestias quis accusamus, animi vero rem eveniet? Debitis assumenda quisquam rem possimus. Esse iste voluptatem quas quidem.</p>
                <a href="#">En savoir plus</a>
            </div>
            <div className="header__image">
                <img src={headerImage} alt="pen image" />
            </div>
        </div>
    </div>
  )
}

export default Header