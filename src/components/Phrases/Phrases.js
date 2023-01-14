import React from 'react';
import './Phrases.css';

export default function Phrases({ catchphrases }) {
  return (
    <div className="phrases">
      <h2>Catchphrases</h2>
      <ul>
        {catchphrases.map((phrase, index) => (
          <li key={index}>{phrase}</li>
        ))}
      </ul>
    </div>
  );
}
