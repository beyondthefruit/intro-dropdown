import React from 'react';

const Main = () => {
  return (
    <article>
      <div className='text'>
        {' '}
        <h1> Make remote work great again</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button> Learn more</button>
      </div>
      <div className='photo'>
        <img src={require('../assets/image-hero-desktop.png')} alt='laptop' />
      </div>
    </article>
  );
};

export default Main;
