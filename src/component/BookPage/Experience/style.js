import styled from 'styled-components';
import { CircleButton } from '../../../Pages/BookPage/style';
import VideoBooks from '../../../assets/images/BookPage/4.jpg';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export const FlexColumn = styled.article`
  display: flex;
  flex-direction: Column;
`;

export const Experience = styled.div`
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

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-self: center;
      align-items: center;
    }

    @media (max-width: 600px) {
      width: 100%;
      height:auto;
      
      *{
        padding:10px 0;
      }
      div {
        flex-direction:column;

        ${CircleButton}{
          padding:0;
        }
      }
    }
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
    align-self:center;
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
          width:auto;
        }
      }
    }
  }
`;

export const IconPlay = styled(PlayArrowIcon)`
filter:invert(1);
`