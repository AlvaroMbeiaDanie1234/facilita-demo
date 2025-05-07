// src/components/Networks.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/networks.css';
import { FaInstagram, FaYoutube, FaSpotify, FaTiktok } from 'react-icons/fa';

const Networks = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const links = [
    {
      name: 'TikTok',
      username: '@facilitate',
      icon: <FaTiktok size={30} color="#ff0066" />,
      color: '#ff0066',
    },
    {
      name: 'Instagram',
      username: '@facilitate',
      icon: <FaInstagram size={30} color="#a855f7" />,
      color: '#a855f7',
    },
    {
      name: 'YouTube',
      username: 'Canal Oficial',
      icon: <FaYoutube size={30} color="#ef4444" />,
      color: '#ef4444',
    },
    {
      name: 'Spotify',
      username: 'facilitate',
      icon: <FaSpotify size={30} color="#22c55e" />,
      color: '#22c55e',
    },
  ];

  return (
    <section className="networks-section">
      <h2 className="networks-title">Redes Sociais</h2>
      <div className="networks-grid">
        {links.map((link, index) => (
          <div
            className="network-card"
            key={index}
            data-aos="fade-up"
            style={{ '--border-color': link.color }}
          >
            {link.icon}
            <h4>{link.name}</h4>
            <p>{link.username}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Networks;
