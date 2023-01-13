import React from 'react';
import './Phrases.css';

export default function Phrases({ catchphrases }) {
  console.log('phrases.js has:', catchphrases);
  return (
    <div className="phrases">
      <p>Catchphrases go here</p>
      <ul>
        {catchphrases.map((phrase) => (
          <li key={phrase}>{phrase}</li>
        ))}
      </ul>
    </div>
  );
}
