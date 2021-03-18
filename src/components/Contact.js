import React from 'react'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="wrapper">
              <h1 className="heading">Contact Us</h1>
              <div className="contact-container">
                  <div className="address">
                    <div className="location">
                      <h2 className="add-head"><i className="fas fa-map-marker-alt"></i> Location</h2>
                      <p>San Fransisco,USA</p>
                      <p>Mumbai,India</p>
                      <p>Mumbai,India</p>
                    </div>

                    <div className="phone">
                      <h2 class="add-head"><i className="fas fa-mobile-alt"></i> Phone</h2>
                      <p>+91 1234567894</p>
                      <p>+91 1234567894</p>
                      <p>+91 1234567894</p>
                    </div>

                    <div className="email">
                      <h2 className="add-head"><i className="fas fa-envelope"></i> Email</h2>
                      <p>awx@awesome.com</p>
                     
                    </div>
                    
                  </div>
                  <div className="contact-form">
                    <form>
                      <input type="text" placeholder="Full Name" /><br/>
                      <input type="email" placeholder="Email" /><br/>
                      <textarea rows="10" placeholder="Your Message"></textarea><br/>
                      <input type="submit" value="SEND" className="login submit"/>
                    </form>
                  </div>
              </div>
            </div>
          </section>
    )
}

export default Contact
