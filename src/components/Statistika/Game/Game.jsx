import React from 'react'
import logo1 from '../../../assets/images/statistika/logo1.png'
import logo2 from '../../../assets/images/statistika/logo2.png'
function Game() {
    let arr = [1,2,3,4,5,6,7,8,9]
    return (
        <div className='statistika__table'>
            {
                arr && arr.map((e,i)=>(
                    <div key={i} className="statistika__game-inner">
                <div className="statistika__table-date">
                    <span>19 iyul</span>
                    <span>22:30</span>
                </div>
                <div className="statistika__table-info">
                    <div className='club1'>
                        <img src={logo1} alt="" />
                        <h3>Andijon</h3>
                    </div>
                    <div className="bill">
                        <span>3</span>
                        <span>1</span>
                    </div>
                    <div className='club2'>
                        <h3>Navbahor</h3>
                        <img src={logo2} alt="" />
                    </div>
                </div>
            </div>
                ))
            }
        </div>
    )
}

export default Game;
