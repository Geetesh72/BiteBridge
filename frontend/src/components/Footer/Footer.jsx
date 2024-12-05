import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>

BiteBridge is an innovative food ordering and delivery app designed to connect food lovers with their favorite meals at the touch of a button. Whether you’re craving a quick snack, a hearty meal, or a sweet treat, BiteBridge offers a wide variety of options from local restaurants and eateries</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 98704450444</li>
                    <li>geetesh6517@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 BiteBridge.com</p>
        
    </div>
  )
}

export default Footer