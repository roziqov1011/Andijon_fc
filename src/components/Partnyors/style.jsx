import styled from "styled-components";
// import styled, { keyframes } from "styled-components";

// const breatheAnimation = keyframes`
//     0% { height: 100px; width: 100px; }
//     30% { height: 400px; width: 400px; opacity: 1 }
//     40% { height: 405px; width: 405px; opacity: 0.3; }
//     100% { height: 100px; width: 100px; opacity: 0.6; }
// `;
export const Container = styled.div`
  width: calc(100% - 4px);
  height: 200px;
  border-top: 2px solid #BF0000;
  border-bottom: 2px solid #BF0000;
  margin-bottom: 100px;
  margin-top: 120px;
  @media (max-width:1000px){
    height: 80px;
    margin-bottom: 50px;
    margin-top: 60px;
  }
  max-width: 2000px;
`;
export const LogoDiv =styled.div`
  @media (max-width:1500px){
    width: 140px;
  }
  @media (max-width:1250px){
    width: 90px;
  }
  @media (max-width:900px){
    width: 70px;
  }
`
export const BrandWheel =styled.div`
    
`
export const BrandSlide =styled.div`
    
`
export const Img = styled.img`
  transition: 0.3s;
  width: 150px;
  &:hover{
    cursor: pointer;
    transform: scale(1.1);
  }
  @media (max-width:1500px){
    width: 130px;
  }
  @media (max-width:1250px){
    width: 80px;
  }
  @media (max-width:900px){
    width: 60px;
  }
`