import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Djibouti Street 60m From Main Djibouti Street, Addis Ababa Ethiopia</p>
        <p className="p__opensans">+251 912-555-130</p>
        <p className="p__opensans">+251 912-555-230</p>
      </div>

      <div className="app__footer-links_logo">
        <h2 className="cheif_name">Cheif Dave</h2>
        <p className="p__opensans">&quot;Join us on a journey of discovery and growth.&quot;</p>
        <img src={images.spoon} alt='Spoon' className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Cheif Dave. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
