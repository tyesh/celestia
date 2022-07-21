import React from 'react';

const HeroSection = () => {
  return (
    <section className='d-flex flex-column justify-content-center align-items-center hero-section'>
      <div className='overlay-image'></div>
      <div className='hero-text text-center'>
        <h1 className='border-bottom border-3'>Welcome to Celestia</h1>
        <p>Online Ephemerides Calculator</p>
      </div>
    </section>
  );
};

export default HeroSection;
