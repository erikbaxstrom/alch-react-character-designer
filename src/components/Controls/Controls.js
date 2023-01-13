import React from 'react';
import './Controls.css';

export default function Controls({ head, setHead, torso, setTorso }) {
  const headHandler = (event) => {
    setHead(event.target.value);
  };

  const torsoHandler = (event) => {
    setTorso(event.target.value);
  };

  return (
    <div className="controls">
      <p>Controls go here</p>
      <div>
        <label>Head</label>
        <select value={head} onChange={headHandler}>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="red">Red</option>
        </select>
      </div>
      <div>
        <label>Torso</label>
        <select value={torso} onChange={torsoHandler}>
          <option value="blue">Blue</option>
          <option value="orange">Orange</option>
          <option value="white">White</option>
        </select>
      </div>
    </div>
  );
}
