import React, { Component } from 'react';
import './Videos.css';
import ClapprPlayer from './ClapprComponent';

class PlayVideo extends Component {
  render() {
    //initially the first video is played by default else the user last played
    return (
      <div >
        <ClapprPlayer id="video" width="900" height="500"
        source={(localStorage.getItem('videoSource')!=null)?localStorage.getItem('videoSource'): "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"}  />
        <h3 className="video-main-title">{(localStorage.getItem('title')!=null)?localStorage.getItem('title'): "Freerunning Across Rooftops in Greece"}</h3>
        <p className="video-sub-title">{(localStorage.getItem('subtitle')!=null)?localStorage.getItem('subtitle'): "Red Bull Art of Motion"}</p>
      </div>
    );
  }
}

export default PlayVideo;
