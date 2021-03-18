import React from 'react'
import User from './User'

const Testimonial = () => {
    return (
        <section className="testimonial" id="testimonials">
            <div className="wrapper">
            <h1 className="heading">Testimonial</h1>
            <div className="profiles">

            <User />
            <User />
            <User />
            <User />
            
            </div>
            </div>
        </section>
    )
}

export default Testimonial
