import React from 'react';
import './Controls.css';

export default function Controls({
  head,
  setHead,
  torso,
  setTorso,
  legs,
  setLegs,
  setHeadCount,
  setTorsoCount,
  setLegsCount,
}) {
  const headHandler = (event) => {
    setHead(event.target.value);
    setHeadCount((currentCount) => currentCount + 1);
  };
  const torsoHandler = (event) => {
    setTorso(event.target.value);
    setTorsoCount((currentCount) => currentCount + 1);
  };
  const legsHandler = (event) => {
    setLegs(event.target.value);
    setLegsCount((currentCount) => currentCount + 1);
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
      <div>
        <label>Legs</label>
        <select value={legs} onChange={legsHandler}>
          <option value="black">Black</option>
          <option value="pink">Pink</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
    </div>
  );
}
