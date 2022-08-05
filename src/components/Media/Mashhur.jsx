import React, { useState } from 'react';
import M1 from "../../assets/images/Media/m1.png"
import M2 from "../../assets/images/Media/m2.png"
import M3 from "../../assets/images/Media/m3.png"
import Video1 from "../../assets/video/tribuna.mp4"
import Modal from "../Modal/Modal"

const Mashhur = () => {
  const data = [
    {
      img: M1,
      title: `"Manchester Siti" - "Shaxtyor" - 1:1`,
      date:"27 varaq. 2019",
      url: Video1
    },
    {
      img: M2,
      title: `"Manchester Siti" - "Shaxtyor" - 1:1`,
      date:"27 varaq. 2019",
      url: Video1
    },
    {
      img: M3,
      title: `"Manchester Siti" - "Shaxtyor" - 1:1`,
      date:"27 varaq. 2019",
      url: Video1
    },
  ]
  const [open, setOpen] = useState(false);
  const [video_url, setvideo_url] = useState("");
  const [title, settitle] = useState('');
  const OpenModal = (item) => {
    setvideo_url(item.url);
    settitle(item.title)
    setOpen(true);
  };
  return ( 
    <React.Fragment>
      <div className="container">
        <div className="mashhur">
          <div className='mashhur__info'>
            <h1>Eng Mashhur</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim LoremLorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim Lorem
            </p>
          </div>
          <div className='mashhur__content'>
            {data.map((item) =>{
              return(
                <div onClick={() => OpenModal(item)} className="mashhur__item">
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                  <p>{item.date}</p>
                </div>
              )
            })}
          </div>
        </div>
        <Modal video_url={video_url} open={open} setOpen={setOpen} title={title} />
      </div>
    </React.Fragment>
   );
}
 
export default Mashhur;