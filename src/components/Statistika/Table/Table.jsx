import React from 'react'
import logo1 from '../../../assets/images/statistika/logo1.png';
import logo2 from '../../../assets/images/statistika/logo2.png';

function Table() {
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    return (
        <div className='statistika__table'>
            {
                arr && arr.map((e,i)=>(
            <div key={i} className="statistika__table-inner">
                <div className="statistika__club-name">
                    <span>{e}</span>
                    <img src={logo1} alt="" />
                    <h3>Andijon</h3>
                </div>
                <div className="statistika__shot">
                    <span>13</span>
                    <span>10</span>
                    <span>1</span>
                    <span>2</span>
                    <span>23-9</span>
                </div>
                <p className="statistika__club-ball">
                    31
                </p>
            </div>
                ))
            }
        </div>
    )
}

export default Table;
