import React from 'react';
import './Landing.css';
import globo from './globo.png';

export default function LandingPage() {
  return (
    <>
      <h1>Globo Gym welcomes you to <span>The League</span></h1>
    
      <img src={`./${globo}`} />
    </>
  );
}


