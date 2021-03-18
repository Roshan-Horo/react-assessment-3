import React from 'react'
import Card from './Card'

const About = () => {
    return (
        <section className="about" id="about">
             <div className="wrapper">
              <h1 className="heading">About Us</h1>
              <div className="cards">
                  
                <Card />
                <Card />
                <Card />

              </div>
            </div>
          </section>
    )
}

export default About
