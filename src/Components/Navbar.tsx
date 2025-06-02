import { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="logo">NovaStay</a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Home', 'Rooms', 'Amenities', 'Gallery', 'About', 'Contact'].map(link => (
            <a
              href={`#${link.toLowerCase()}`}
              key={link}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}

          <button
            className="book-btn"
            onClick={() => {
              const bookSection = document.getElementById("book");
              bookSection?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Book Now
          </button>

          <button className="dark-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>

<div className="hamburger" onClick={toggleMenu}>
  <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
  <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
  <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
</div>
      </div>
    </header>
  );
};

export default Navbar;
