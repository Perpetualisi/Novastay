import './Hero.css';

const Hero = () => {
  return (
    <section id='home' className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Escape to Tranquility</h1>
        <p className="hero-subtitle">Discover luxury, comfort, and breathtaking views at NovaStay.</p>
        <div className="hero-buttons">
          <a href="#book" className="btn primary">Book Now</a>
          <a href="#rooms" className="btn secondary">Explore Rooms</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
