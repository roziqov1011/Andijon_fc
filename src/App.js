import React from 'react';
import News from "./Pages/News";
import Shop from "./Pages/Shop";
import Club from "./Pages/Club";
import Media from "./Pages/Media";
import Navbar from './views/Navbar';
import Footer from './views/Footer';
import Academy from "./Pages/Academy";
import { FC } from "./context/Context";
import Homepage from "./Pages/HomePage";
import Statistika from "./Pages/Statistika";
import { Routes, Route, } from "react-router-dom";

import "./style/css/_Import.css"
import Table from './components/Statistika/Table/Table';
import Game from './components/Statistika/Game/Game';


function App() {
  return (
    <FC.Consumer>
      {(x)=>{
        return(
          <React.Fragment>
            
            <Navbar/>
            <div className='routes'>
              <Routes>
                <Route path='/'             element={<Homepage/>}/>
                <Route path='news'          element={<News/>}/>
                <Route path='shop'          element={<Shop/>}/>
                <Route path='club'          element={<Club/>}/>
                <Route path='media'         element={<Media/>}/>
                <Route path='academy'       element={<Academy/>}/>
                <Route path='satatistika'   element={<Statistika/>}>
                  <Route path='' element={<Table/>}/>
                  <Route path='game' element={<Game/>}/>
                </Route>
              </Routes>
            </div>
            <Footer/>

          </React.Fragment>
        )
      }}
    </FC.Consumer>
  );
}

export default App;
