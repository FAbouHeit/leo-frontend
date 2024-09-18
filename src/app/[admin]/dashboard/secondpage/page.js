'use client';  // Ensure this file runs in the client side

import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../../lib/axiosInstance.js';  // Adjust the path as needed

export default function Page() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axiosInstance.get('/api/images');
        setImages(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Images</h1>
      <div id="image-container">
        {images.map(({ name, link }) => (
          <div key={link}>
            <img src={link} alt={name} style={{ maxWidth: '100px', margin: '10px' }} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
