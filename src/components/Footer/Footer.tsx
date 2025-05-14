import React from "react";
import facebookIcon from "../../assets/social/facebook-white.svg";
import instagramIcon from "../../assets/social/instagram-white.svg";
import twitterIcon from "../../assets/social/twitter-white.svg";
import appStoreIcon from "../../assets/store/app-store.svg";
import googlePlayIcon from "../../assets/store/play-store.svg";
import windowsStoreIcon from "../../assets/store/windows-store.svg";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__content">
        <div className="footer__copyright">
          <ul className="footer__links">
            <li>
              <a href="#">Home</a>
              <span className="footer__separator">|</span>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
              <span className="footer__separator">|</span>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
              <span className="footer__separator">|</span>
            </li>
            <li>
              <a href="#">Collection Statement</a>
              <span className="footer__separator">|</span>
            </li>
            <li>
              <a href="#">Help</a>
              <span className="footer__separator">|</span>
            </li>
            <li>
              <a href="#">Manage Account</a>
            </li>
          </ul>
          <p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
        </div>

        <div className="footer__row">
          <div className="footer__social">
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>

          <div className="footer__apps">
            <a href="#">
              <img src={appStoreIcon} alt="App Store" />
            </a>
            <a href="#">
              <img src={googlePlayIcon} alt="Google Play" />
            </a>
            <a href="#">
              <img src={windowsStoreIcon} alt="Windows Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
