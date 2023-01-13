import React from 'react';
import { useState } from 'react';

import './App.css';

import Controls from './components/Controls/Controls';
import Histroy from './components/History/History';
import Character from './components/Character/Character';
import Phrases from './components/Phrases/Phrases';

function App() {
  const [head, setHead] = useState('blue');
  const [torso, setTorso] = useState('blue');
  const [legs, setLegs] = useState('black');

  return (
    <div className="App">
      <header className="App-header">Character Designer</header>
      <Controls {...{ head, setHead, torso, setTorso, legs, setLegs }} />
      <Histroy />
      <Character {...{ head, torso, legs }} />
      <Phrases />
    </div>
  );
}

export default App;
