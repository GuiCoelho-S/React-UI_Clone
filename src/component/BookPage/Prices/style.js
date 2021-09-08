import styled from 'styled-components';

import { FlexColumn } from '../../../Pages/BookPage/style';
import VideoBooks from '../../../assets/images/BookPage/5.1.jpg';
import ItemsDetails from '../../../assets/images/BookPage/items_details.jpg';

export const Main = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  padding: 20px 0 20px 0;
  color: black;
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

export const CardVideo = styled(FlexColumn)`
  flex-direction: row;
  width: 900px;
  min-height: 300px;
  height: 100%;
  z-index: 10;
  transform: translateY(100px);

  h2 {
    align-self: center;
    padding-bottom: 10px !important;
    font-size: 20px;
  }
  ${FlexColumn} {
    flex-direction: column-reverse;
    width: 100%;
    background-image: url(${VideoBooks});
    * {
      height: 50%;

      width: 100%;
      padding: 8px 8px 20px 3px;
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

  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 740px) {
    flex-direction: column;

    ${FlexColumn} {
      background-image: none;
      align-items: center;
      * {
        height: 70%;
        width: 60%;
        align-self: center;
      }
      p {
        width: 94%;
      }
    }
  }
  @media (max-width: 370px) {
    ${FlexColumn} {
      * {
        width: 100%;

        h2 {
          width: auto;
        }
      }
    }
  }
`;

export const TablePrice = styled.section`
  padding: 50px 0 0 0;
  display: grid;
  height: 100%;
  align-self: center;
  width: 100%;
  gap: 16px;
  justify-content: space-evenly;
  align-content: start;
  grid-template-columns: repeat(auto-fit, minmax(auto, 300px));

  
`;

export const ItemDetails = styled(FlexColumn)`
  background-image: url(${ItemsDetails});
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
