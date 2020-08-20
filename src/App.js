import React, { useState } from 'react';
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
        return <Create changeView={setView} />;
      
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
      <div className='menu'>
        {/* <h3>|||</h3> */}
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

function Create({changeView}) {

  const [name, setName] = useState('');
  const handleChange = e => setName(e.target.value);

  const [playlist, setPlaylist] = useState('');
  const handlePlaylist = e => setPlaylist(e.target.value);
  
  const [color, setColor] = useState('');
  const handleColor = e => setColor(e.target.value);

  const [hours, setHours] = useState(12);
  const handleHours = e => setHours(e.target.innerHTML);

  const [minutes, setMinutes] = useState(0);
  const handleMinutes = e => setMinutes(e.target.innerHTML);

  const [noon, setNoon] = useState('PM');
  const handleNoon = e => setNoon(e.target.innerHTML);
  
  const handleSubmit = e => {
    e.preventDefault();
    changeView('main');
  }
  
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' name='name' value={name} onChange={handleChange} autoComplete='off' />

        <h3>Select a playlist</h3>
        <input className='playlist' type='radio' id='playlist1' name='playlist' value='playlist1' checked={playlist === 'playlist1'} onChange={handlePlaylist} />
        <label className='playlist-for' htmlFor='playlist1'>Playlist 1</label>
        <input className='playlist' type='radio' id='playlist2' name='playlist' value='playlist2' checked={playlist === 'playlist2'} onChange={handlePlaylist} />
        <label className='playlist-for' htmlFor='playlist2'>Playlist 2</label>
        <input className='playlist' type='radio' id='playlist3' name='playlist' value='playlist3' checked={playlist === 'playlist3'} onChange={handlePlaylist} />
        <label className='playlist-for' htmlFor='playlist3'>Playlist 3</label>
        <input className='playlist' type='radio' id='playlist4' name='playlist' value='playlist4' checked={playlist === 'playlist4'} onChange={handlePlaylist} />
        <label className='playlist-for' htmlFor='playlist4'>Playlist 4</label>

        <h3>Color</h3>
        <div className='colors'>
          <input className='color' type='radio' id='ff7300' name='color' value='#ff7300' checked={color === '#ff7300'} onChange={handleColor} />
          <label className='color-for' htmlFor='ff7300' style={{backgroundColor: '#ff7300'}}></label>
          <input className='color' type='radio' id='#ff0000' name='color' value='#ff0000' checked={color === '#ff0000'} onChange={handleColor} />
          <label className='color-for' htmlFor='#ff0000' style={{backgroundColor: '#ff0000'}}></label>
          <input className='color' type='radio' id='#ae00ff' name='color' value='#ae00ff' checked={color === '#ae00ff'} onChange={handleColor} />
          <label className='color-for' htmlFor='#ae00ff' style={{backgroundColor: '#ae00ff'}}></label>
          <input className='color' type='radio' id='#00ccff' name='color' value='#00ccff' checked={color === '#00ccff'} onChange={handleColor} />
          <label className='color-for' htmlFor='#00ccff' style={{backgroundColor: '#00ccff'}}></label>
          <input className='color' type='radio' id='#d9ff00' name='color' value='#d9ff00' checked={color === '#d9ff00'} onChange={handleColor} />
          <label className='color-for' htmlFor='#d9ff00' style={{backgroundColor: '#d9ff00'}}></label>
        </div>
        
        <h3>Time</h3>
        <div className='timer'>
          <Wheel num={hours} type='hours' set={handleHours} handle={handleHours} />
          <Wheel num={minutes} type='minutes' set={handleMinutes} handle={handleMinutes} />
          <Wheel num={noon} set={handleNoon} handle={handleNoon} />
        </div>
        
        <button type='submit'>Create Timer</button>
      </form>
  );
}

const Wheel = ({num, type, set, handle}) => {

  const hours = [...new Array(13).keys()].slice(1);
  const minutes = [...new Array(60).keys()];
  const noon = ['AM', 'PM']
  let showing, above, below, index;

  switch(type) {

    case 'hours':
      index = hours.findIndex( h => h === num );
      above = hours[index - 1]
      showing = hours[index]
      below = hours[index + 1]
      break;
    
    case 'minutes':
      index = minutes.findIndex( m => m === num );
      above = minutes[index - 1]
      showing = minutes[index]
      below = minutes[index + 1]
      break;

    default:

      break;
  }

  const mouseDown = (set, e) => {
    console.log(e.targetTouches)
  }

  console.log(type, showing)
  
  const leadingZero = num => num.toString().length === 1 ? '0' + num : num;

  return (
    <div>
      <h2 className='arrow'>▲</h2>
      <div className='wheel-box' onTouchMove={ e => mouseDown(set, e) }>
        <div className='wheel'>
          <h2>{leadingZero(num)}</h2>
          <h2 onMouseUp={set} onChange={handle}>{leadingZero(num)}</h2>
          <h2>{leadingZero(num)}</h2>
        </div>
      </div>
      <h2 className='arrow'>▼</h2>
    </div>
  );
}


export default App;
