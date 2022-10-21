import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './button.css';

import radioStations from './stations';

import ControlledCarousel from './Carousel';

function App() {
  const [index, setIndex] = useState(0);
  const [oldIndex, setOldIndex] = useState(0);
  const [audioPlayer] = useState(new Audio());
  const [isActive, setActive] = useState("false");


  console.log(isActive);
  const handleClick= (e)=> {
    
    console.log(isActive);

    console.log(audioPlayer.paused);
    console.log(audioPlayer);

    var playnow = document.getElementById("playnow");

    if(index !== oldIndex)
    {
      console.log("index != oldIndex");
      audioPlayer.pause();

    }
    else if(!audioPlayer.paused)
    {
      console.log("pauser player");
      audioPlayer.pause();

      setActive(true);
      playnow.innerText="";

      return;
    }
    else {
      console.log("stop player");
      audioPlayer.pause();
      setActive(true);
    }

    audioPlayer.src = radioStations.radios[index].Playback;

    console.log("play player");
    audioPlayer.play();
    setOldIndex(index);
    setActive(false);
    
    playnow.innerText=radioStations.radios[index].Name;
  }

  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" widht="50px" height="50px"/>
      </header>
      
      <div className='App_frame'>
        <ControlledCarousel className="App_frame" id="carousel" index={index} setIndex={setIndex} radioStations={radioStations}/>
      </div>

      <footer className="App-footer">

          <divbutton width="100px" className={isActive ? "control play" : "control pause"}
               onClick={(e) => handleClick(e)}>
            <span class="left"></span>
            <span class="right"></span>
          </divbutton>

          <div className='App-footer-element playnow' id='playnow'></div>
        </footer>
    </div>
  );
}

export default App;
