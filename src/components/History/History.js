import React from 'react';
import './History.css';

export default function History({ headCount, torsoCount, legsCount }) {
  return (
    <div className="history">
      <p>History of edits goes here</p>
      <span>Head has been changed {headCount} times.</span>
      <span>Torso has been changed {torsoCount} times.</span>
      <span>Legs have been changed {legsCount} times.</span>
    </div>
  );
}
