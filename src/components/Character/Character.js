import React from 'react';
import './Character.css';

export default function Character({ head, torso, legs }) {
  return (
    <div className="character">
      <p>Character display goes here</p>
      <img src={`head/${head}.png`}></img>
      <img src={`torso/${torso}.png`}></img>
      <img src={`legs/${legs}.png`}></img>
    </div>
  );
}
