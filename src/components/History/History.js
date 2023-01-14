import React from 'react';
import './History.css';

export default function History({ headCount, torsoCount, legsCount }) {
  return (
    <div className="history">
      <p>
        Head has been changed {headCount} time{headCount !== 1 && 's'}.
      </p>
      <p>
        Torso has been changed {torsoCount} time{torsoCount !== 1 && 's'}.
      </p>
      <p>
        Legs have been changed {legsCount} time{legsCount !== 1 && 's'}.
      </p>
    </div>
  );
}
