import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import Video from "../../assets/video/stadion2.mp4"

class Header extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className='header__home'>
          <ReactPlayer
            loop={true}
            muted
            playing
            playsinline
            className="back__video"
            url={Video} 
            width="100%"
            height="auto"
          />
        <div className="container">
          
        </div>
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default Header;