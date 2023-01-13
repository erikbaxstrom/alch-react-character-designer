import React from 'react';
import { useState } from 'react';

import './App.css';

import Controls from './components/Controls/Controls';
import Histroy from './components/History/History';
import Character from './components/Character/Character';
import Phrases from './components/Phrases/Phrases';

function App() {
  const [head, setHead] = useState('blue');

  return (
    <div className="App">
      <header className="App-header">Character Designer</header>
      <Controls {...{ head, setHead }} />
      <Histroy />
      <Character {...{ head }} />
      <Phrases />
    </div>
  );
}

export default App;
