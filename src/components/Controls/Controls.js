import React from 'react';
import './Controls.css';

export default function Controls({ head, setHead }) {
  const headHandler = (event) => {
    setHead(event.target.value);
  };

  return (
    <div className="controls">
      <p>Controls go here</p>
      <div>
        <label>Hair</label>
        <select value={head} onChange={headHandler}>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="red">Red</option>
        </select>
      </div>
    </div>
  );
}
