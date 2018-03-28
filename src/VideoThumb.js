import React, { Component } from 'react';
import './Videos.css';
class VideoThumb extends Component {
  playSV = () =>{
    console.log('clicked:' ,  this);
    //console.log('clicked:' ,  this.props.title);
      // console.log('title', this.props.title);
      // console.log('subtitle',this.props.subtitle);
      // console.log('imgSource',this.props.imgSource);
      // console.log('videoSource',this.props.videoSource);
    localStorage.setItem('title', this.props.title);
    localStorage.setItem('subtitle',this.props.subtitle);
    localStorage.setItem('imgSource',this.props.imgSource);
    localStorage.setItem('videoSource',this.props.videoSource);

    const vCurr={
      title: this.props.title,
      subtitle:this.props.subtitle,
      imgSource:this.props.imgSource,
      videoSource:this.props.videoSource
    }
    console.log(vCurr);
    this.props.onClick(vCurr);

  }
  render() {

    return (
      <div id="thumb" className="video-list-each" onClick={this.playSV} >
        <img src={this.props.imgSource} alt={this.props.imgSource} width="250" height="150"></img>
        <div className="video-title">{this.props.title}</div>
        {/*<div className="video-sub-title">{this.props.subtitle}</div>*/}
      </div>
    );
  }
}

export default VideoThumb;
