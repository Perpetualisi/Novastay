import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p className="contact-intro">We’d love to hear from you.</p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Address:</strong> 123 Palm Avenue, Lagos, Nigeria</p>
          <p><strong>Phone:</strong> <a href="tel:+1123456789">+112-345-6789</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@novastay.com">info@novastay.com</a></p>
          
          <div className="contact-socials">
            <a href="#" aria-label="Facebook">🌐</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              allowFullScreen
              loading="lazy"
              title="Hotel Location"
            ></iframe>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name *
            <input type="text" required />
          </label>
          <label>
            Email *
            <input type="email" required />
          </label>
          <label>
            Phone
            <input type="tel" />
          </label>
          <label>
            Message *
            <textarea rows={4} required></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
