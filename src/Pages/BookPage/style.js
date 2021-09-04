import VideoBooks from "../../assets/images/BookPage/4.jpg";
import KeyBook from "../../assets/images/BookPage/5.1.jpg";

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

export const IconNetwork = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
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
  
`;

export const Footer = styled.div`
  width: 100%;
  padding-top: 10px;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 40px 0 40px;
    background-color: #313131;
    padding-bottom: 60px;
    @media (max-width: 940px) {
      flex-direction: column;
    }
  }
  ${FlexColumn} {
    width: 400px;
    color: white;
    justify-content: space-evenly;
    padding: 30px 20px 10px 40px;

    p {
      padding-top: 20px;
    }
    aside {
      display: flex;
      width: 160px;
      justify-content: space-between;
      padding-top: 30px;
    }
    @media (max-width: 940px) {
      width: 100%;
      align-items: center;
      padding-bottom: 20px;

      p {
        max-width: 600px;
        width: 100%;
        padding: 20px 0 20px 0;
      }
    }
  }
`;
export const Communication = styled.header`
  margin: 0 auto;
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 100px;
  flex-wrap: wrap;
  ul {
    a {
      text-decoration: underline;
    }

    h3 {
      color: #c18741;
    }
    li {
      display: flex;

      padding-top: 10px;
      align-items: center;
      width: 100%;

      p {
        padding-left: 20px;
      }
    }
    @media (max-width: 550px) {
      padding: 20px;

      h3 {
        text-align: center;
      }
    }
  }

  @media (max-width: 1120px) {
    padding: 0;
    width: 100%;
  }
  @media (max-width: 550px) {
    justify-content: space-evenly;
  }
`;
