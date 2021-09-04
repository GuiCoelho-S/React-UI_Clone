import styled from "styled-components";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VideoBooks from '../../../assets/images/BookPage/5.1.jpg';
import { FlexColumn } from '../../../Pages/BookPage/style';
import { CircleButton } from '../../../Pages/BookPage/style';

export const Play = styled(PlayArrowIcon)`
filter:invert(1);
`
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

export const Room = styled.div`
  padding-top: 160px;
  width: 100%;
  display: grid;
  place-items: center;
`;
export const ContentRoom = styled.article`
  margin: 0 auto;
  min-height: 500px;
  width: 100%;
  height: 100%;
  max-width: 900px;

  transform: translateY(-100px);
  border-radius: 80px;
  display: flex;
  border: 1px solid grey;

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
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 20px;
    ${FlexColumn} {
      flex-wrap: wrap;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
      
    }
    ${CircleButton} {
      align-self: end;
      justify-self: end;
      bottom: 0;
      position: relative;
      width: 82px;
      height: 82px;
      
    }
  }
  @media (max-width: 920px) {
    flex-direction: column-reverse;
    align-items: center;
    border: none;
    height: 100%;

    * {
      text-align: Center;
      padding-top: 20px;
    }
    aside {
      display: none;
    }
    section {
      width: 94%;

      align-items: center;
      p {
        width: 60%;
      }

      ${CircleButton} {
        margin: 20px auto;
        align-self: center;
        padding: 0;
      }
      ${FlexColumn} {
        justify-content: space-evenly;

        
      }
    }
  }
  @media (max-width: 480px) {
    width: 94%;

    section {
      padding: 2px;

      p {
        width: 94%;
      }
    }
  }
`;
