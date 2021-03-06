import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  playInstrument(e) {
    var prettySound = new Audio(e.target.dataset.sound);
    prettySound.play();
  }

  render() {
    return (
      <div className="App scrollbar">
          <div className="container">
            <img src="backgrounds/musicRoomBackground3.png" 
            alt="Music Room" style={{width:"100%"}} />
            <div className="text-block">
              <h3>Pick your instrument!</h3>
            </div>
          </div>

          <div className="scrolling-wrapper" onClick={this.playInstrument}>
            <img src="pics/Instruments/TN_accordion.jpg" 
            alt="accordion" className="input" />
            <img src="pics/Instruments/TN_acoustic_guitar.jpg" data-sound=" " 
            alt="acoustic_guitar" className="input" />
            <img src="pics/Instruments/TN_bagpipe.jpg" data-sound=" " 
            alt="acoustic_guitar"className="input" />
            <img src="pics/Instruments/TN_banjo.jpg" data-sound="music/banjo.mp3" 
            alt="acoustic_guitar"className="input" />
            <img src="pics/Instruments/TN_cello.jpg" data-sound=" " 
            alt="cello" className="input" />
            <img src="pics/Instruments/TN_clarinet.jpg" data-sound="music/clarinet.mp3" 
            alt="clarinet" className="input" />
            <img src="pics/Instruments/TN_drum.jpg" data-sound="music/snare-drum.mp3"
            alt="drum" className="input" />
            <img src="pics/Instruments/TN_french_horn.jpg" 
            alt="french_horn" className="input" />
            <img src="pics/Instruments/TN_harp.jpg" 
            alt="harp" className="input" />
            <img src="pics/Instruments/TN_keyboard.jpg" data-sound="music/keyboard.wav"
            alt="keyboard" className="input" />
            <img src="pics/Instruments/TN_red-color-electric-guitar.jpg" data-sound="music/electric-guitar1.wav"
            alt="electric-guitar" className="input" />
            <img src="pics/Instruments/TN_saxophone.jpg" 
            alt="saxophone" className="input" />
            <img src="pics/Instruments/TN_trombone.jpg" data-sound="music/trombone2.mp3"
            alt="trombone" className="input" />
            <img src="pics/Instruments/TN_trumpet.jpg" 
            alt="trumpet" className="input" />
            <img src="pics/Instruments/TN_tuba.jpg" data-sound="music/tuba.mp3"
            alt="tuba" className="input" />
            <img src="pics/Instruments/TN_viola.jpg" data-sound="music/viola.mp3"
            alt="viola" className="input" />
            <img src="pics/Instruments/TN_violin.jpg" 
            alt="violin" className="input" />
            <img src="pics/Instruments/TN_xylophone.jpg" data-sound="music/xylophone1.wav"
            alt="xylophone" className="input" />
          </div>
      </div>


    );
  }
}

export default App;
