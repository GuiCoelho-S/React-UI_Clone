import VideoBooks from "../../assets/images/BookPage/4.jpg";
import MainImage from "../../assets/images/BookPage/1.jpg";
import KeyBook from "../../assets/images/BookPage/5.1.jpg";

import Play from "../../assets/icons/play-solid.svg";
import Left from "../../assets/icons/angle-left-solid.svg";
import Right from "../../assets/icons/angle-right-solid.svg";

import styled from "styled-components";

/* GLobal components*/
export const Images = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${KeyBook});
`;

export const Icon = styled.div`
  width: 50%;
  height: 50%;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  filter: invert(1);
`;
export const IconPlay = styled(Icon)`
  background-image: url(${Play});
`;
export const IconLeft = styled(Icon)`
  background-image: url(${Left});
`;
export const IconRight = styled(Icon)`
  background-image: url(${Right});
`;
export const IconNetwork = styled.img`
width:40px;
height:40px;
border-radius:50%;
`
export const CircleButton = styled.button`
  cursor: pointer;
  object-fit: contain;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c18741;
  border: none;
  transition: all 0.3s;
  display: grid;
  place-items: center;

  &:hover {
    scale: 1.1;
  }
`;
export const SquareButton = styled(CircleButton)`
  border-radius: 0;
`;
/*********************/

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const FlexColumn = styled.article`
  display: flex;
  flex-direction: Column;
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  background-color: antiquewhite;
  grid-template-rows: minmax(60px, auto) 500px;
  grid-template-columns: 50%;
`;

export const Main = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 20px 0 20px 0;
  color: black;
`;

export const Header = styled.header`
  background-color: pink;
  grid-area: 1/1/2/3;
`;

export const C_Apresentation = styled.main`
  grid-area: 2/1/2/3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${MainImage});
`;

export const CardMain = styled.aside`
  align-self: end;
  width: 500px;
  height: 300px;
  transform: translateY(50%);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const CardMainItem = styled.article`
  width: 160px;
  height: 100%;
  background-image: url(${KeyBook});
  object-fit: contain;
  opacity: 0.7;
  display: flex;
  align-items: end;
  border-radius: 18px;
  div {
    width: 100%;
    padding-bottom: 40px;
    text-align: center;
    color: blanchedalmond;
  }
`;

export const Apresentation = styled.div`
  padding: 40px 20px 10px 10px;
  width: 420px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  ${FlexColumn} {
    flex-direction: row;
    justify-content: space-between;
    width: 230px;
    padding: 0;
    article {
      width: 160px;
      display: grid;
      place-items: center;
      color: white;
      font-size: 16px;
      padding-right: 8px;
      background-color: #c18741;
    }
  }
`;
export const Details = styled.aside`
  width: 400px;
  align-self: end;
  height: auto;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-evenly;
  padding: 20px;

  h2 {
    font-size: 20px;
  }
  p {
    padding: 10px 8px;
    font-size: 14px;
  }

  aside {
    width: 120px;
    height: auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.div`
  padding-top: 60px;
  border-bottom: 5px solid #fa621a;
  width: 300px;

  * {
    text-align: center;
  }
  h2 {
    padding-bottom: 10px;
    font-size: 30px;
  }
`;

export const MainVideo = styled.div`
  display: grid;
  border: 1px solid pink;
  height: 700px;
  align-items: center;
  justify-content: center;
  background-image: url(${VideoBooks});

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 200px;
    width: 600px;
    border: 1px solid red;

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-self: center;
      align-items: center;
    }
  }
`;

export const CardVideo = styled(FlexColumn)`
  flex-direction: row;
  width: 900px;
  height: 300px;
  z-index: 10;
  transform: translateY(100px);

  ${FlexColumn} {
    flex-direction: column-reverse;
    width: 100%;
    background-image: url(${VideoBooks});
    * {
      height: 50%;

      width: 100%;
      padding: 8px 8px 3px 3px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: end;
    }
    div {
      background-color: #c0852a;
      color: white;
    }
    article {
      background-color: white;
    }
    aside {
      background-color: whitesmoke;
    }
  }
`;

export const TablePrice = styled.section`
  padding: 50px 0 0 0;
  display: grid;

  align-self: center;
  width: 100%;
  gap: 16px;
  justify-content: space-evenly;
  align-content: start;
  grid-template-columns: repeat(auto-fit, minmax(auto, 300px));
`;

export const ItemDetails = styled(FlexColumn)`
  background-image: url(${KeyBook});
  width: 100%;
  height: 140px;
  justify-content: space-evenly;
  background-color: white;
  opacity: 0.6;
  color: black;
  transition: all 0.6s;
  align-self: start;
  border: 1px solid red;
  align-items: center;

  div {
    display: none;
    width: 100%;
    padding: 5px 10px;

    p {
      text-align: center;
    }
  }

  &:hover {
    div {
      display: block;
    }
    background-image: none;
    background-color: #c18741;
    color: white;
    height: 500px;
    opacity: 1;
  }
`;

export const Room = styled.div`
  padding-top: 60px;
  width: 100%;
  height: 500px;
  transform: translateY(160px);
  display: grid;
  place-items: center;
  position: relative;
`;
export const ContentRoom = styled.article`
  margin: 0 auto;
  min-height: 500px;
  width: 100%;
  height: 100%;
  max-width: 900px;
  position: absolute;
  transform: translateY(-100px);
  border-radius: 80px;
  display: flex;
  border:1px solid grey;

  aside {
    width: 40%;
    background-image: url(${VideoBooks});
    border-radius: 80px 0 0 80px;
  }
  section {
    width: 60%;
    background-color: white;
    border-radius: 0px 80px 80px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 20px;
    ${FlexColumn} {
      flex-wrap: wrap;
      flex-direction: row;
      width: 100%;
      border: 1px solid red;
      justify-content: space-between;
      ${Images} {
        width: 120px;
        height: 100px;
        object-fit: contain;
      }
    }
    ${CircleButton} {
      align-self: end;
      justify-self: end;
      bottom: 0;
      position: relative;
      width: 82px;
      height: 82px;
      ${IconPlay} {
        background-color: transparent !important;
        width: 50%;
      }
    }
  }
  @media (max-width:920px){
    flex-direction:column-reverse;
    align-items:center;

    aside {
      width:100%;
      height:200px;
      border-radius:0px 0px 80px 80px;
    }
    section {
      width:94%;
      align-items:center;
      p {
        width:60%;
      }
    
    ${CircleButton}{
      align-self:center;
    }
    }
    
  }
`;

export const Footer = styled.div`
  width: 100%;
  padding-top: 200px;
  
  
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding:0 40px 0 40px;
    background-color: #313131;
    padding-bottom:60px;
    @media (max-width:940px){
      flex-direction: column;
    }
  }
  ${FlexColumn} {
    width: 400px;
    color:white;
    justify-content: space-evenly;
    padding: 30px 20px 10px 40px;

    p {
      padding-top:20px;
    }
    aside {
      display: flex;
      width:160px;
      justify-content: space-between;
      padding-top:30px;
    }
    @media (max-width:940px){
      width:100%;
      align-items:center;
      padding-bottom:20px;

      p {
        max-width:600px;
        width:100%;
        padding: 20px 0 20px 0;
      }
    }
    }
`;
export const Communication = styled.header`
  margin:0 auto;
  width: 700px;
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding-right:100px;
  flex-wrap:wrap;
  ul {
    
  a {
    text-decoration:underline;
  }

  h3 {
    color: #c18741;
  }
    li {
      display:flex;
      
      padding-top:10px;
      align-items:center;
      width:100%;

      p{
        padding-left:20px;
      }
    }
    @media (max-width:550px){
    padding:20px;
    
    h3 {
      text-align:center;
    }
  }
  }

  @media (max-width:1120px){
    padding:0;
    width:100%;
  }
  @media (max-width:550px){
    justify-content: space-evenly;
  }
  
`;
