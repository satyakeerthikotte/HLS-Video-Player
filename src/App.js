import React, { Component } from 'react';
import './App.css';
import './Videos.css';
import PlayVideo from './PlayVideo';
import Videos from './Videos';

class App extends Component {
  constructor(){
    super();
    this.playSelectedVideo=this.playSelectedVideo.bind(this);
    //initial state
    this.state={
      playingVideo:{}
    };
  }
  playSelectedVideo(currVideo){
    console.log("in playSelectedVideo function");
    //take a copy of prev vdieo
    const updateVideo={...this.state.playingVideo};
    updateVideo['curr']=currVideo;
    this.setState({playingVideo: updateVideo});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="../logo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Video Player</h1>
          <input type="text" className="App-search" placeholder="Search"></input>
        </header>
        <div className="video-thumb">
          <PlayVideo />
          <Videos playSelectedVideo={this.playSelectedVideo} />
        </div>
        <footer className="App-footer">
          <span className="App-footer-copyright">Copyright &copy; <img className="App-footer-logo" alt="logo" src="../keke.png" /></span>
        </footer>
      </div>
    );
  }
}

export default App;
