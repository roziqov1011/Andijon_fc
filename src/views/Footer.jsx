import React, { Component } from 'react';

import Logo from "../assets/icons/Logo.png";
import Mail from "../assets/icons/mail.svg";
import Phone from "../assets/icons/phone.svg";
import Youtube from "../assets/icons/youtube.svg";
import Twitter from "../assets/icons/twitter.svg";
import Telegram from "../assets/icons/telegram.svg";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";

class Footer extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className="footer">
          <div className="footer__border"></div>
          <footer className='container'>
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="footer__title">
              <p>
                We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud equip ex ea commodo consequat...
                <a href="/">Read More</a>
              </p>
            </div>
            <div className="socialsets">
              <a href="https://instagram.com"><img src={Instagram} alt="" /></a>
              <a href="https://telegram.com"><img src={Telegram} alt="" /></a>
              <a href="https://facebook.com"><img src={Facebook} alt="" /></a>
              <a href="https://youtube.com"><img src={Youtube} alt="" /></a>
              <a href="https://twitter.com"><img src={Twitter} alt="" /></a>
            </div>
            <div className="footer__links">
              <a href="/">Home</a>
              <a href="news">News</a>
              <a href="media">Media</a>
              <a href="shop">Store</a>
              <a href="/">Structure</a>
              <a href="/">Team</a>
              <a href="club">Club</a>
              <a href="/">Fan</a>
              <a href="academy">Academy</a>
              <a href="/">Sponsors</a>
            </div>
            <div className="contact__us">
              <div className='contact'>
                <div><img src={Phone} alt="" /></div>
                <div>
                  <p>Have a question?</p>
                  <a href="tel: 998 97 234 34 07">+998 97 234 34 07</a>
                </div>
              </div>
              <div className='contact'>
                <div><img src={Mail} alt="" /></div>
                <div>
                  <p>Have a question?</p>
                  <a href="mailto: fc.andijon.com">fc.andijon.com</a>
                </div>
              </div>
            </div>
            <div className="footer__info">
              <p>© 2000-2021, All Rights Reserved</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Footer;