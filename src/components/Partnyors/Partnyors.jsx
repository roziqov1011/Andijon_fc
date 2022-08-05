import React from "react";
import { Container, Img, LogoDiv } from "./style";
import { PartnyorsData } from "../../data/Partnyors";

import './partnyors.css'

const Partnyors = () => {

  return (
    <div className="container">
      <Container>
        <div className="brand-wheel">
          <div className="brand-slide">
            {PartnyorsData?.map((item, index) => {
              return (
                <LogoDiv className="logo-div" key={index}>
                  <Img src={item.logo}/>
                </LogoDiv>
              );
            })}
          </div>
          <div className="brand-slide delay">
          {PartnyorsData?.map((item, index) => {
              return (
                <LogoDiv className="logo-div" key={index}>
                  <Img src={item.logo}/>
                </LogoDiv>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
    
  );
};

export default Partnyors;