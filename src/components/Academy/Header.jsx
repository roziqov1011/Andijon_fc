import React, { Component } from 'react';

class Header extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className="academy__bg">
          <div className="container">
            <div className="header__academy">
              <h1>Akademiya</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Header;