import './Amenities.css';

type Amenity = {
  id: number;
  icon: string;
  title: string;
  description?: string;
};

const amenities: Amenity[] = [
  { id: 1, icon: '📶', title: 'Free Wi-Fi', description: 'Stay connected anywhere' },
  { id: 2, icon: '🏊‍♂️', title: 'Swimming Pool', description: 'Outdoor relaxation' },
  { id: 3, icon: '💆‍♀️', title: 'Spa & Wellness', description: 'Pamper yourself' },
  { id: 4, icon: '🍽️', title: 'Restaurant', description: 'Fine dining experience' },
  { id: 5, icon: '🏋️‍♂️', title: 'Fitness Center', description: 'State-of-the-art gym' },
  { id: 6, icon: '🛬', title: 'Airport Shuttle', description: 'Easy airport transfers' },
  { id: 7, icon: '🛎️', title: 'Room Service', description: '24/7 in-room dining' },
  { id: 8, icon: '🅿️', title: 'Free Parking', description: 'Safe & spacious parking' },
];

const Amenities = () => {
  return (
    <section className="amenities-section" id="amenities">
      <h2 className="amenities-title">Amenities</h2>
      <p className="amenities-intro">Everything you need for a relaxing and memorable stay.</p>
      <div className="amenities-grid">
        {amenities.map((item) => (
          <div className="amenity-card" key={item.id}>
            <div className="amenity-icon">{item.icon}</div>
            <h3 className="amenity-title">{item.title}</h3>
            <p className="amenity-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
