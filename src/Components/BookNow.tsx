import { useState } from 'react';
import './BookNow.css';

const BookNow = () => {
  const [form, setForm] = useState({
    checkin: '',
    checkout: '',
    guests: '',
    room: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { checkin, checkout, guests } = form;

    if (!checkin || !checkout || !guests) {
      setMessage('Please fill in all required fields.');
      return;
    }

    if (new Date(checkin) >= new Date(checkout)) {
      setMessage('Check-out must be after check-in.');
      return;
    }

    setMessage('✔️ Booking request submitted! We’ll get back to you soon.');
  };

  return (
    <section className="book-section" id="book">
      <h2>Book Your Stay</h2>
      <p className="book-subtext">Ready for your getaway? Choose your dates and check availability.</p>

      <form className="book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="checkin">Check-in Date *</label>
          <input type="date" id="checkin" name="checkin" value={form.checkin} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="checkout">Check-out Date *</label>
          <input type="date" id="checkout" name="checkout" value={form.checkout} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests *</label>
          <input type="number" id="guests" name="guests" min={1} value={form.guests} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="room">Room Type</label>
          <select id="room" name="room" value={form.room} onChange={handleChange}>
            <option value="">Select a room</option>
            <option value="classic">Classic</option>
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
          </select>
        </div>

        <button type="submit">Check Availability</button>
      </form>

      {message && <p className="booking-message">{message}</p>}
    </section>
  );
};

export default BookNow;
