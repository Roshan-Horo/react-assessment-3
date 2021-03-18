import React from 'react'
import profile from '../images/profile.jpg'

const User = () => {
    return (
        <div className="user">
              <div className="profile-img">
                <img src={profile} alt="profile-img" />
              </div>
              <div className="user-info">
                <h2>Manzi</h2>
                <h3>Frontend engineer</h3>
              </div>
              <div className="user-comments">
                <p>"It was a very useful platform for me and my categories"</p>
              </div>
        </div>
    )
}

export default User
