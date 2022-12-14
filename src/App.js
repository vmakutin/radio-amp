import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import './button.css';
import './background.css';
import 'bootstrap/dist/css/bootstrap.css';

import radioStations from './stations';

import ControlledCarousel from './Carousel';

function App() {
  const [index, setIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [audioPlayer] = useState(new Audio());
  const [isActive, setActive] = useState("false");

  function onIndexChanged (newIndex) {

    setIndex(newIndex);
    setActive((newIndex === currentIndex  && !audioPlayer.paused) ? false : true);
  }

  const handleClick= (e)=> {

    var playnow = document.getElementById("playnow");

    if(index !== currentIndex)
    {
      audioPlayer.pause();  
    }
    else if(!audioPlayer.paused)
    {
      console.log("pauser player");
      audioPlayer.pause();

      setActive(true);
      setCurrentIndex(-1);
      playnow.innerText="";

      return;
    }

    audioPlayer.src = radioStations.radios[index].Playback;

    console.log("play player");
    audioPlayer.play();
    setActive(false);
    setCurrentIndex(index);
    
    playnow.innerText=radioStations.radios[index].Name;
  }

  const keyPress = useCallback(
    (e) => {
      var keyName = e.key;
  
      console.log(keyName);

      if (keyName === 'Enter') {
        handleClick(1);
        return;
      }
      else if(keyName === 'ArrowRight'){
         document.getElementsByClassName('carousel-control-next')[0].click();
      }
      else if(keyName === 'ArrowLeft'){
         document.getElementsByClassName('carousel-control-prev')[0].click();
      }
    }, [index, currentIndex]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <div className="App">
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" widht="50px" height="50px"/>
      </header>
      
      <div className='App_frame'>
        <ControlledCarousel className="App_frame" id="carousel" index={index} setIndex={onIndexChanged} radioStations={radioStations}/>
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
