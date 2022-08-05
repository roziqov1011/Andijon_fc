import React, { Component } from 'react';
import Header from '../components/Media/Header';
import Mashhur from '../components/Media/Mashhur';
import Oxirgilar from '../components/Media/Oxirgilar';
import Partnyors from '../components/Partnyors/Partnyors';

class Media extends Component {
  state = {  } 
  render() { 
    return (
      <React.Fragment>
        <Header/>
        <Mashhur/>
        <Oxirgilar/>
        <Partnyors/>
      </React.Fragment>
    );
  }
}
 
export default Media;