import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
  @media (max-width:930px){
    width:60%;
    padding-top:150px;

  }
  @media (max-width:680px){
      width:80%;
  }
  @media (max-width:500px){
      width:100%;
  }
`;

export const Left = styled(ArrowBackIcon)`
filter:invert(1);`

export const Right = styled(ArrowForwardIcon)`
filter:invert(1);`