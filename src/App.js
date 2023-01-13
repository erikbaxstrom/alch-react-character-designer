import React from 'react';
import { useState } from 'react';

import './App.css';

import Controls from './components/Controls/Controls';
import History from './components/History/History';
import Character from './components/Character/Character';
import Phrases from './components/Phrases/Phrases';

function App() {
  const [head, setHead] = useState('blue');
  const [torso, setTorso] = useState('blue');
  const [legs, setLegs] = useState('black');
  const [headCount, setHeadCount] = useState(0);
  const [torsoCount, setTorsoCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">Character Designer</header>
      <Controls
        {...{ head, setHead, torso, setTorso, legs, setLegs, setHeadCount, setTorsoCount }}
      />
      <History {...{ headCount, torsoCount }} />
      <Character {...{ head, torso, legs }} />
      <Phrases />
    </div>
  );
}

export default App;
