import React, {  useState } from 'react';
import ReactPlayer from 'react-player'
import Header from '../components/News/Header';
import SubHeaderSlider from '../components/News/Slider/SubHeaderSlider';
import winners from '../assets/images/news/news__winners-img.png'
import videosTop1 from '../assets/images/news/videos-top1.png'
import videosTop2 from '../assets/images/news/videos-top2.png'
import videosTop3 from '../assets/images/news/videos-top3.png'
import videosText from '../assets/images/news/news-videotext.png'
import playIcon from '../assets/images/news/play-icon.png'
import Partnyors from '../components/Partnyors/Partnyors';


function News() {
  const [playId, setPlayId] = useState(null)
  const fakeArr = [1,2,3,4,5,6]
  console.log(playId);
  return (
    <React.Fragment>
  <Header />
  <SubHeaderSlider />
  <div className="news__winners">
    <div className="container ">

      <div className="news__winners-inner">
        <div className="news__winners-img">
          <img src={winners} alt="" />
        </div>
        <div className="news__winners-info">
          <p>The Irish Times Irish Theatre Awards 2022: All the
            winners revealed</p>
        </div>
      </div>
    </div>
  </div>
  <div className="news__videos-top">
    <div className="container">
      <ul className='videos__top-list'>
        <li>
          <img src={videosTop1} alt="" />
          <p>The Irish Times Irish Theatre Awards 2022:
            All the winners revealed</p>
        </li>
        <li>
          <img src={videosTop2} alt="" />
          <p>The Irish Times Irish Theatre Awards 2022:
            All the winners revealed</p>
        </li>
        <li>
          <img src={videosTop3} alt="" />
          <p>The Irish Times Irish Theatre Awards 2022:
            All the winners revealed</p>
        </li>
      </ul>
    </div>
  </div>
  <div class="video-text">
    <img src={videosText} alt="" />
</div>
<div className="news-videos">
  <div className="container">
  <ul className='news__videos-list'>
    {fakeArr && fakeArr.map((item,i)=>(
      <li className='news__videos-item' key={item} onClick={()=> playId !== i ? setPlayId(i): setPlayId(null)}>
        <div className='news__player-wrap'>
          <ReactPlayer url='https://i.imgur.com/5lu97Fd.mp4' playing={playId === i ?  true: false}/>
          <button  onClick={()=> playId !== i ? setPlayId(i): setPlayId(null)} style={{display: playId === i? 'none': 'block'}}>
            <img src={playIcon} alt="" />
          </button>
        </div>
        <div className='news__videos-item-info'>
          <p>
          Tens of thousands of demonstrators gathered across the US on Saturday to advocate for gun control following last month's massacre at a Texas elementary school.
          </p>
          <span>By Reuters  <b>●</b>  Sun Jun 12 2022 - 09:42</span>
        </div>
     </li>
    ))}

  </ul>
  </div>
</div>
<Partnyors/>
</React.Fragment>
  )
}

export default News;

