import styled from "styled-components";

export const FlexColumn = styled.article`
  display: flex;
  flex-direction: Column;
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

export const IconNetwork = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;