// src/components/Galeria.js
import React from 'react';
import './styles/gallery.css'; // Arquivo CSS para estilização
import { motion } from 'framer-motion';
import img1 from '../images/gallery/lateral.jpg'
import img2 from '../images/gallery/person1.jpg'
import img3 from '../images/gallery/person2.jpg'
import img4 from '../images/gallery/person3.jpg'

const images = [

  img1,
  img2,
  img3,
  img4,  
];

const Galeria = () => {
  return (
    <section className="galeria-section">
      <h2 className="galeria-title">Nossa Galeria</h2>
      <div className="galeria-grid">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="galeria-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img src={src} alt={`Galeria ${index + 1}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Galeria;
