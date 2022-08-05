import React, { Component } from 'react';
import Main from '../components/HomePage/Main';
import Header from '../components/HomePage/Header';

class Homepage extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <div className="homepage">
          <Header/>
          <Main/>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Homepage;