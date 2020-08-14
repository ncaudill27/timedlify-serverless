import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [view, setView] = useState('new');

  const router = () => {
    switch(view) {

      case 'main':
        return <>
          <Timedify changeView={setView} />
        </>;

      case 'new':
        return <Create />;
      
      default:
        break;
    }
  }

  return (
    <div className="App">
      <Header/>
      { router() }
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Timedify</h1>
      <div class='menu'>
        <h3>|||</h3>
      </div>
  </header>
  );
}

function Timedify({changeView}) {
  return <>
    <main>
      <article style={{backgroundColor: '#ff7300'}}>
        <h2>HIIT Interval</h2>
      </article>
      <article style={{backgroundColor: '#ff0000'}}>
        <h2>Work Wake-Up</h2>
      </article>
      <article style={{backgroundColor: '#ae00ff'}}>
        <h2>Wind Down</h2>
      </article>
    </main>
    <footer>
      <article style={{backgroundColor: '#00ff22'}} onClick={() => changeView('new')}>
        <h2>New Timer</h2>
      </article>        
    </footer>
  </>;
}

function Create() {

  const [name, setName] = useState('');
  const handleChange = e => setName(e.target.value);
  
  return (
      <form>
        <label for='name'>Name</label>
        <input id='name' type='text' name='name' value={name} onChange={handleChange} autoComplete='off' />

        <h3>Select a playlist</h3>
        <input className='playlist' type='radio' id='playlist1' name='playlist' value='playlist1' />
        <label className='playlist-for' for='playlist1'>Playlist 1</label>
        <input className='playlist' type='radio' id='playlist2' name='playlist' value='playlist2' />
        <label className='playlist-for' for='playlist2'>Playlist 2</label>
        <input className='playlist' type='radio' id='playlist3' name='playlist' value='playlist3' />
        <label className='playlist-for' for='playlist3'>Playlist 3</label>
        <input className='playlist' type='radio' id='playlist4' name='playlist' value='playlist4' />
        <label className='playlist-for' for='playlist4'>Playlist 4</label>

        <h3>Color</h3>
        <div class='colors'>
          <input className='color' type='radio' id='ff7300' name='color' value='ff7300' />
          <label className='color-for' for='ff7300' style={{backgroundColor: '#ff7300'}}></label>
          <input className='color' type='radio' id='#ff0000' name='color' value='#ff0000' />
          <label className='color-for' for='#ff0000' style={{backgroundColor: '#ff0000'}}></label>
          <input className='color' type='radio' id='#ae00ff' name='color' value='#ae00ff' />
          <label className='color-for' for='#ae00ff' style={{backgroundColor: '#ae00ff'}}></label>
          <input className='color' type='radio' id='#00ccff' name='color' value='#00ccff' />
          <label className='color-for' for='#00ccff' style={{backgroundColor: '#00ccff'}}></label>
          <input className='color' type='radio' id='#d9ff00' name='color' value='#d9ff00' />
          <label className='color-for' for='#d9ff00' style={{backgroundColor: '#d9ff00'}}></label>
        </div>
        <button type='submit'>Create Timer</button>
      </form>
  );
}
export default App;
