import React from "react";
import "./Footer.css";
import youtubeIcon from "../../assets/youtube_icon.png";
import facebookIcon from "../../assets/facebook_icon.png";
import instagramIcon from "../../assets/instagram_icon.png";

import telegram_icon from "../../assets/telegram_images.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=61567525678489">
          <img src={facebookIcon} alt="" />
        </a>
        <a href="https://www.instagram.com/omonov_abbosbek/?utm_source=qr&r=nametag">
          <img src={instagramIcon} alt="" />
        </a>
        <a href="https://t.me/a_omonov01">
          <img src={telegram_icon} alt="" className="telegram-icon" />
        </a>
        <a href="https://www.youtube.com/">
          {" "}
          <img src={youtubeIcon} alt="" />
        </a>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Audio Description</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Contact Us</li>
      </ul>
      <p className="copywriteText">© 2025 Abbosbek All rights reserved </p>
    </div>
  );
};

export default Footer;
