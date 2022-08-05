import React from 'react';
import { FC } from '../context/Context';
import Header from '../components/Club/Header';
import Oyinchilar from '../components/Club/Oyinchilar';
import Statistika from '../components/Club/Statistika';
import Partnyors from '../components/Partnyors/Partnyors';

const Club = () => {
  return ( 
    <FC.Consumer>
      {(x)=>{
        return(
          <React.Fragment>
            <div className="club">
              <Header/>
              <Oyinchilar/>
              <Statistika/>
              <Partnyors/>
            </div>
          </React.Fragment>
        )
      }}
    </FC.Consumer>
   );
}
 
export default Club;