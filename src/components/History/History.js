import React from 'react';
import './History.css';

export default function History({ headCount }) {
  return (
    <div className="history">
      <p>History of edits goes here</p>
      <span>Head has been changed {headCount} times.</span>
    </div>
  );
}
