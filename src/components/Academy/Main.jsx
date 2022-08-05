import React, { Component } from 'react';
import { Academy_data } from '../../data/Academy';

class Main extends Component {
  state = { 
    data: Academy_data[0]
   } 
  render() { 
    return (
      <React.Fragment>
        <div className="container">
          <div className="academy">
            <p className='bottom30'>{this.state.data.text1}</p>
            <p className='bottom30'>{this.state.data.text2}</p>
            <p className='bottom30'>{this.state.data.text3}</p>
            <p className='bottom30'>{this.state.data.text4}</p>
            <p className='bottom30'>{this.state.data.text5}</p>
            <h3>Sertifikat</h3>
            <p className='bottom30'>{this.state.data.sertifikat1}</p>
            <p className='bottom30'>{this.state.data.sertifikat2}</p>
            <p className='bottom30'>{this.state.data.sertifikat3}</p>
            <img src={this.state.data.img1} alt="" />
            <h3>Akademiya murabbiylari</h3>
            <p>{this.state.data.murabbiy1}</p>
            <p>{this.state.data.murabbiy2}</p>
            <p>{this.state.data.murabbiy3}</p>
            <p>{this.state.data.murabbiy4}</p>
            <p>{this.state.data.murabbiy5}</p>
            <img src={this.state.data.img2} alt="" />
            <h3>Andijon chempionlari</h3>
            <p>{this.state.data.chempion1}</p>
            <p>{this.state.data.chempion2}</p>
            <p>{this.state.data.chempion3}</p>
            <p>{this.state.data.chempion4}</p>
            <p>{this.state.data.chempion5}</p>
            <h3>Koʻrishlar</h3>
            <p className='bottom30'>{this.state.data.korish1}</p>
            <p>{this.state.data.korish2}</p>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}
 
export default Main;