import React from 'react'

const Header = () => {
    return (
        <header>
          <div className="logo">
            <div><span>a</span>wesome</div>
          </div>
          
          <nav>
            <ul>
              <li className="nav-link"><a href="#features">Features</a></li>
              <li className="nav-link"><a href="#testimonials">Testimonials</a></li>
              <li className="nav-link"><a href="#about">About Us</a></li>
              <li className="nav-link"><a href="#contact">Contact</a></li>
              <li className="nav-link free"><a href="#free">Try for Free</a></li>
              <li className="nav-link login"><a href="#login">Login</a></li>
            </ul>
          </nav>
        </header>
    )
}

export default Header
