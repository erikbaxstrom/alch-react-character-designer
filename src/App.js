// import logo from './logo.svg';
import './App.css';
import Controls from './components/Controls/Controls';
import Histroy from './components/History/History';
import Character from './components/Character/Character';
import Phrases from './components/Phrases/Phrases';

function App() {
  return (
    <div className="App">
      <header className="App-header">Character Designer</header>
      <Controls />
      <Histroy />
      <Character />
      <Phrases />
    </div>
  );
}

export default App;
