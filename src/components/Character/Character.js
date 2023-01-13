import React from 'react';
import './Character.css';

export default function Character({ head }) {
  return (
    <div className="character">
      <p>Character display goes here</p>
      <img src={`head/${head}.png`}></img>
    </div>
  );
}
