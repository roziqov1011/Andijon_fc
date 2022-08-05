import React, { Component } from 'react';
import Main from '../components/Academy/Main';
import Header from '../components/Academy/Header';
import Partnyors from "../components/Partnyors/Partnyors"

class Academy extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <Header/>
        <Main/>
        <Partnyors/>
      </React.Fragment>
    );
  }
}
 
export default Academy;