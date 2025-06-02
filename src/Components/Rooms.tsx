import './Rooms.css';

type Room = {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  price: string;
};

const rooms: Room[] = [
  {
    id: 1,
    name: 'Classic Room',
    image: '/classic.jpg',
    description: 'Cozy and comfortable room perfect for solo travelers.',
    features: ['Free Wi-Fi', 'AC', 'TV', 'Breakfast'],
    price: '$80/night',
  },
  {
    id: 2,
    name: 'Executive Suite',
    image: '/executive.jpg',
    description: 'Spacious suite with elegant decor and top-notch amenities.',
    features: ['Free Wi-Fi', 'AC', 'TV', 'Mini Bar', 'Breakfast'],
    price: '$150/night',
  },
  {
    id: 3,
    name: 'Standard Deluxe',
    image: '/standard.jpg',
    description: 'Ideal for families or small groups looking for comfort.',
    features: ['Free Wi-Fi', 'AC', 'TV', 'Breakfast'],
    price: '$120/night',
  },
];

const Rooms = () => {
  return (
    <section className="rooms-section" id="rooms">
      <h2 className="rooms-title">Our Rooms</h2>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div className="room-card" key={room.id}>
            <img src={room.image} alt={room.name} className="room-image" />
            <div className="room-info">
              <h3 className="room-name">{room.name}</h3>
              <p className="room-description">{room.description}</p>
              <ul className="room-features">
                {room.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="room-bottom">
                <span className="room-price">{room.price}</span>
                <a href="#book" className="btn book-btn">Book Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
