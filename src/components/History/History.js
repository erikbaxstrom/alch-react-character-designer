import React from 'react';
import './History.css';

export default function History({ headCount, torsoCount, legsCount }) {
  return (
    <div className="history">
      <p>History of edits goes here</p>
      <p>Head has been changed {headCount} times.</p>
      <p>Torso has been changed {torsoCount} times.</p>
      <p>Legs have been changed {legsCount} times.</p>
    </div>
  );
}
