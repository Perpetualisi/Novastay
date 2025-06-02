import './Gallery.css';
import { useState } from 'react';

const galleryImages = [
  { id: 1, src: '/lobby.jpg', alt: 'Lobby' },
  { id: 2, src: '/hotelRoom.jpg', alt: 'Hotel Room' },
  { id: 3, src: '/pool.jpg', alt: 'Swimming Pool' },
  { id: 4, src: '/spa.jpg', alt: 'Spa' },
  { id: 5, src: '/gym.jpg', alt: 'Gym' },
  { id: 6, src: '/restaurant.jpg', alt: 'Restaurant' },
  { id: 7, src: '/outdoor.jpg', alt: 'Outdoor View' },
  { id: 8, src: '/suite.jpg', alt: 'Suite Room' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="gallery-section" id="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <p className="gallery-subtitle">A glimpse into your perfect getaway</p>

      <div className="gallery-grid">
        {galleryImages.map((img) => (
          <div key={img.id} className="gallery-item" onClick={() => setSelectedImage(img.src)}>
            <img src={img.src} alt={img.alt} className="gallery-image" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Preview" className="lightbox-image" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
