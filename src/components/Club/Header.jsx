import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import Video from "../../assets/video/stadion1.mp4"

class Header extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className="club__bg">
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
            <div className="header__club">
              <h1>BIZNING JAMOA</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Header;