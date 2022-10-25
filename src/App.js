import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './button.css';
import './background.css';

import radioStations from './stations';

import ControlledCarousel from './Carousel';

function App() {
  const [index, setIndex] = useState(0);
  const [audioPlayer] = useState(new Audio());
  const [isActive, setActive] = useState("false");

  console.log(isActive);
  const handleClick= (e)=> {
    
    console.log(isActive);
    console.log(audioPlayer.paused);

    var playnow = document.getElementById("playnow");

    if(!audioPlayer.paused)
    {
      console.log("pauser player");
      audioPlayer.pause();

      setActive(true);
      playnow.innerText="";

      return;
    }

    audioPlayer.src = radioStations.radios[index].Playback;

    console.log("play player");
    audioPlayer.play();
    setActive(false);
    
    playnow.innerText=radioStations.radios[index].Name;
  }

  return (
    <div className="App">
      <div class='light x1'></div>
  <div class='light x2'></div>
  <div class='light x3'></div>
  <div class='light x4'></div>
  <div class='light x5'></div>
  <div class='light x6'></div>
  <div class='light x7'></div>
  <div class='light x8'></div>
  <div class='light x9'></div>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" widht="50px" height="50px"/>
      </header>
      
      <div className='App_frame'>
        <ControlledCarousel className="App_frame" id="carousel" index={index} setIndex={setIndex} radioStations={radioStations}/>
      </div>

      <footer className="App-footer">

          <div width="100px" className={isActive ? "divbutton control play" : "divbutton control pause"}
               onClick={(e) => handleClick(e)}>
            <span className="left"></span>
            <span className="right"></span>
          </div>

          <div className='App-footer-element playnow' id='playnow'></div>
        </footer>
    </div>
  );
}

export default App;
