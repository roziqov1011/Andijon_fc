import React, { useState } from 'react';
import { Outlet, NavLink} from "react-router-dom"
import proliga from '../assets/images/statistika/proliga.png'

function Statistika (){
  const [title, setTitle] = useState(1);

   return (
    <React.Fragment>
     <div className="statistika__bg">
      <h2 className='statistika__title'>{title === 1 ? 'JADVAL':  'O’YINLAR'}</h2>
      <div className="statistika__wrapper">
        <div className='statistika__nav'>
          <div className="link__list">
            <NavLink  to="" onClick={()=> setTitle(1)} 
            className={title === 1 ? 'aktivv': 'noaktiv'}
            >Jadval</NavLink>
              <NavLink to="game"  onClick={()=> setTitle(2)}
             className={title === 2 ? 'aktivv': 'noaktiv'}
              >O’yinlar</NavLink> 

          </div>
          <img src={proliga} alt="" />
          <div className="search-statistika">
            <select name="liga" id="">
              <option value="proliga">Pro liga</option>
              <option value="oliliga">Oli liga</option>
              <option value="superliga">super liga</option>
            </select>
            <select name="year" id="">
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>
        <div>
          <Outlet/>
        </div>
      </div>
     </div>
    </React.Fragment>
  );
}
 
export default Statistika;