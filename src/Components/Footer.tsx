import React, { useContext } from 'react';
import './Footer.css';
import { ThemeContext } from '../Context/ThemeContext';

const Footer: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="logo">NovaStay</h2>
          <p className="tagline">Your gateway to comfort and luxury</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Luxury Lane, Ocean View City</p>
          <p><a href="tel:+123456789">+112 345 6789</a></p>
          <p><a href="mailto:info@novastay.com">info@novastay.com</a></p>
        </div>

        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            {['Home', 'Rooms', 'Amenities', 'Gallery', 'About', 'Contact', 'Book Now', 'FAQ'].map(link => (
              <li key={link}><a href={`#${link.toLowerCase().replace(/ /g, '-')}`}>{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LI</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Hotel Hours</h3>
          <p>Check-in: 2PM – 10PM</p>
          <p>Check-out: Before 12PM</p>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Get exclusive deals and travel tips.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
          <p className="copyright">© 2025 NovaStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
