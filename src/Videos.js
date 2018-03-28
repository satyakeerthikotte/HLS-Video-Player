import React, { Component } from 'react';
import './Videos.css';
// import ClapprPlayer from './clappr-player.jsx';
// import { Container, Row, Col } from 'reactstrap';
import VideoThumb from './VideoThumb';


class Videos extends Component {
  // playSelectedVideo = () =>{
  //   console.log('clicked:' ,  this);
  //   console.log('clicked:' ,  this.props.title);
  // }
  //
  render() {
//since there are limited number of videos just placing the components, ideally should map the details from a database so that all the
//videos are places without hardcoding the number of components
    return (
      <div className='video-list'>
        <VideoThumb imgSource="../thumb1.png" title="Freerunning Across Rooftops in Greece" subtitle="Red Bull Art of Motion"
        videoSource="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
        onClick={this.props.playSelectedVideo} />
        <VideoThumb imgSource="../thumb2.png" title="Sintel - Durian Open Movie" subtitle="Blender Foundation"
        videoSource="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" onClick={this.props.playSelectedVideo}/>
        <VideoThumb imgSource="../thumb3.png" title="Chevaliers de la Table ronde" subtitle="United We Stand"
        videoSource="https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8" onClick={this.props.playSelectedVideo}/>
        <VideoThumb imgSource="../thumb4.png" title="Big Buck Bunny" subtitle="Official Blender Foundation Short Film"
        videoSource="http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8" onClick={this.props.playSelectedVideo}/>
        <VideoThumb imgSource="../thumb5.png" title="Histoire, Geschichte" subtitle="Paris History"
        videoSource="http://www.streambox.fr/playlists/test_001/stream.m3u8" onClick={this.props.playSelectedVideo}/>

      </div>
    );
  }
}

export default Videos;
