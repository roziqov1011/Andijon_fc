import React, { useState } from 'react';
import O1 from "../../assets/images/Media/o1.png"
import O2 from "../../assets/images/Media/o2.png"
import O3 from "../../assets/images/Media/o3.png"
import O4 from "../../assets/images/Media/o4.png"
import O5 from "../../assets/images/Media/o5.png"
import O6 from "../../assets/images/Media/o6.png"
import Video1 from "../../assets/video/stadion1.mp4"
import Modal from "../Modal/Modal"

const Oxirgilar = () => {
  const data = [
    {
      img: O1,
      title: `"Manchester Siti" - "Shaxtyor" - 1:1`,
      date:"27 varaq. 2019",
      url: Video1
    },
    {
      img: O2,
      title: `"Manchester Siti" - "Shaxtyor" - 1:1`,
      date:"27 varaq. 2019",
      url: Video1
    },
    {
      img: O3,
      title: `"Manchester Siti" - "Shaxtyor" - 1:1`,
      date:"27 varaq. 2019",
      url: Video1
    },
    {
      img: O4,
      title: `"Manchester Siti" - "Shaxtyor" - 1:1`,
      date:"27 varaq. 2019",
      url: Video1
    },
    {
      img: O5,
      title: `"Manchester Siti" - "Shaxtyor" - 1:1`,
      date:"27 varaq. 2019",
      url: Video1
    },
    {
      img: O6,
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
      <div className="oxirgilar_bg">
        <div className="container">
          <div className="oxirgilar">
            <h1>Oxirgilar</h1>
            <div className="oxirgilar__content">
              {data.map((item) =>{
                return(
                  <div onClick={() => OpenModal(item)} className="oxirgilar__item">
                    <img src={item.img} alt="" />
                    <p>{item.title}</p>
                    <p>{item.date}</p>
                  </div>
                )
              })}
            </div>
            <Modal video_url={video_url} open={open} setOpen={setOpen} title={title} />
          </div>
        </div>
      </div>
    </React.Fragment>
   );
}
 
export default Oxirgilar;