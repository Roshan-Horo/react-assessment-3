import React from 'react'
import dashboard from '../images/dashboard.jpg'

const Landing = () => {
    return (
        <section className="landing">
          <div className="hero">
            <div className="hero-img"></div>
            <div className="hero-dash">
              <img src={dashboard} alt="hero-dash-img" />
            </div>
            <div className="hero-info">
              <h1>Hello! We are <br/> Here to help.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sed laborum non sapiente blanditiis voluptatum harum soluta, inventore dolorum consequuntur ex unde? Voluptas, dolore ipsam in recusandae ipsum soluta quidem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ut, cupiditate aliquam ad vel consectetur. Quidem blanditiis totam ducimus possimus iusto, ipsa expedita ea minima tenetur fugit voluptates suscipit odit.
              </p>
            </div>
          </div>
        </section>
    )
}

export default Landing
