import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  playInstrument(e) {
    console.log(e.target);
    var prettySound = new Audio(e.target.dataset.sound);
    console.log(e.target.dataset.sound);
    console.log(prettySound);
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
            <img src="pics/Instruments/TN_accordion.jpg" data-sound="music/electric-guitar1.wav" id="accordion" className="input" />
            <img src="pics/Instruments/TN_acoustic_guitar.jpg" data-sound="music/flute1.wav" className="input" />
            <img src="pics/Instruments/TN_bagpipe.jpg" data-sound="music/xylophone1.wav" className="input" />
            <img src="pics/Instruments/TN_banjo.jpg" data-sound="music/electric-guitar1.wav" className="input" />
            <img src="pics/Instruments/TN_cello.jpg" data-sound="music/electric-guitar1.wav" className="input" />
            <img src="pics/Instruments/TN_clarinet.jpg" className="input" />
            <img src="pics/Instruments/TN_drum.jpg" className="input" />
            <img src="pics/Instruments/TN_french_horn.jpg" className="input" />
            <img src="pics/Instruments/TN_harp.jpg" className="input" />
            <img src="pics/Instruments/TN_keyboard.jpg" className="input" />
            <img src="pics/Instruments/TN_red-color-electric-guitar.jpg" className="input" />
            <img src="pics/Instruments/TN_saxophone.jpg" className="input" />
            <img src="pics/Instruments/TN_trombone.jpg" className="input" />
            <img src="pics/Instruments/TN_trumpet.jpg" className="input" />
            <img src="pics/Instruments/TN_tuba.jpg" className="input" />
            <img src="pics/Instruments/TN_viola.jpg" className="input" />
            <img src="pics/Instruments/TN_violin.jpg" className="input" />
            <img src="pics/Instruments/TN_xylophone.jpg" className="input" />
          </div>
      </div>


    );
  }
}

export default App;
