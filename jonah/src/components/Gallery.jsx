import React from 'react';
import './Gallery.css';

const galleryItems = [
  {
    id: 1,
    type: 'video',
    url: 'https://cdn.pixabay.com/video/2022/11/11/138588-770315514_tiny.mp4',
    description: 'Beach sunset',
  },
  {
    id: 2,
    type: 'video',
    url: 'https://cdn.pixabay.com/video/2023/03/13/154529-807726735_tiny.mp4',
    description: 'A thrilling safari adventure',
  },
  {
    id: 3,
    type: 'video',
    url: 'https://cdn.pixabay.com/video/2024/02/29/202393-918066374_tiny.mp4',
    description: 'Luxurious hotel with beautiful views',
  },
  {
    id: 4,
    type: 'video',
    url: 'https://cdn.pixabay.com/video/2023/10/12/184737-873923039_large.mp4',
    description: 'Ride in the hot air balloons',
  },
  {
    id: 5,
    type: 'video',
    url: 'https://cdn.pixabay.com/video/2022/11/22/140111-774507949_tiny.mp4',
    description: 'A thrilling safari adventure',
  },
  // Add more items as needed
];

const Gallery = () => {
  return (
    <div id="gallery" className="gallery-container">
      <h2 className="gallery-subtitle">Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map(item => (
          <div key={item.id} className="gallery-item">
            {item.type === 'image' ? (
              <img src={item.url} alt={item.description} />
            ) : (
              <video controls>
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
