import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p className="tagline">
            At NovaStay, we believe in comfort, care, and unforgettable experiences.
          </p>
          <p>
            Founded over a decade ago, NovaStay blends modern luxury with heartfelt hospitality.
            Whether you're here for business, leisure, or celebration, we provide everything
            to make your stay memorable—from eco-conscious rooms to personalized service.
          </p>
          <p>
            Nestled in a prime location, our family-run hotel values sustainability, attention to
            detail, and guest satisfaction above all.
          </p>

          <ul className="usp-list">
            <li>✅ Prime Location</li>
            <li>🌿 Eco-Conscious Design</li>
            <li>🏅 Award-Winning Service</li>
            <li>👨‍👩‍👧‍👦 Family-Owned Since 2012</li>
          </ul>

          <div className="stats">
            <div className="stat-card">
              <h3>10+</h3>
              <p>Years of Service</p>
            </div>
            <div className="stat-card">
              <h3>5K+</h3>
              <p>Happy Guests</p>
            </div>
            <div className="stat-card">
              <h3>12</h3>
              <p>Hospitality Awards</p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src="/resort-4471852_1280.jpg" alt="Hotel Exterior" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
