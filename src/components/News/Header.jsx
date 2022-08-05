import React from "react";
import HeaderSlider from "./Slider/HeaderSlider";


function Header() {
return (
<div className='News_bg'>
      <div className="news__header">
        <div className="h_title">
          <h2>NEWS</h2>
        </div>
        <HeaderSlider />
      </div>
</div>
)
}

export default Header