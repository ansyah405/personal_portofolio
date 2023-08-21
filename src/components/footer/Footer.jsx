import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ardiansyah
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#project">Portfolio</a>
        </li>
        <li>
          <a href="#testi">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ardiansyah.</small>
      </div>
    </footer>
  );
};

export default Footer;
