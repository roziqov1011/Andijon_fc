import React, { Component } from 'react';

class Header extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className="header__media">
          <div>
            <h1>Media</h1>
          </div>
          <div>
            <h2>Dukentdagi mashg'ulotlar davom etmoqda</h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Header;