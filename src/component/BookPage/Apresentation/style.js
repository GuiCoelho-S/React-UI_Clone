import styled from "styled-components";
import MainImage from "../../../assets/images/BookPage/main.jpg";
import KeyBook from "../../../assets/images/BookPage/5.1.jpg";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";

export const FlexColumn = styled.article`
  display: flex;
  flex-direction: Column;
`;

export const C_Apresentation = styled.main`
  grid-area: 2/1/2/3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${MainImage});
  background-position: 75% 55%;
  background-size:cover;
  @media (max-width: 930px) {
    flex-direction: column-reverse;
  }
`;

export const CardMain = styled.aside`
  align-self: end;
  width: 500px;
  height: 300px;
  transform: translateY(50%);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 930px) {
    align-self: start;
  }
  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
  }
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
  @media (max-width: 500px) {
    width: 70%;
    align-self: center;
    margin-top: 10px;
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

  * {
    padding-top: 30px;
  }
  ${FlexColumn} {
    flex-direction: row;
    justify-content: space-between;
    width: 230px;
    padding-top: 40px;

    * {
      padding-top: 0 !important;
    }
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
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const PlayIcon = styled(PlayArrowIcon)`
  filter: invert(1);
`;
