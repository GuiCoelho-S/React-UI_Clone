import styled from "styled-components";
import { ContainerFlex } from "../../component/Container";

/* Global components*/

export const FitIcon = styled.img`
  width: 20px;
  height: 20px;
`;
export const BarsIcon = styled.img`
  width: 15px;
  height: 15px;
  filter: invert(1);
`;

/*********************/

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: auto;
  background-color: rgba(236, 240, 247, 255);
  font-family: "Teko", sans-serif;
  font-weight: 300;
`;

export const Header = styled.div`
  width: 100%;
  height: auto;
`;
export const ContentHeader = styled.header`
  margin: 0 auto;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  padding-top: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      font-size: 40px;
      color: #fa621a;
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  padding-right: 4px;
`;

export const Nav = styled.nav`
  max-width: 650px;
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 630px) {
      flex-direction: column;
    }

    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @media (max-width: 630px) {
        justify-content: space-evenly;
      }
      li {
        list-style-type: none;
        font-size: 20px;

        p {
          color: #fa621a;
          font-size: 22px;
        }
        div {
          background-color: black;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: grid;
          place-content: center;
          transform: translateY(-5px);
        }
      }
    }
  }
`;

/*Main*/
export const ContainerMain = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
`;

export const Main = styled(ContainerFlex)`
  flex-direction: row;
  justify-content: center;
  position: relative;

  @media (max-width: 760px) {
    flex-direction: column;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 760px) {
      align-items: center;
    }
    h2 {
      font-size: 70px;
      letter-spacing: 1.2rem;
      padding: 0;
      @media (max-width: 520px) {
        text-align: center;
      }
    }
  }
`;
export const Bridge = styled.img`
  width: 680px;

  @media (max-width: 760px) {
    width: 600px;
  }
  @media (max-width: 520px) {
    width: 100%;
  }
`;

export const Circle = styled.div`
  width: 520px;
  height: 520px;
  border: 1px dashed #fa621a;
  border-radius: 50%;
  position: absolute;
  top: -20px;
  left: 10%;

  @media (max-width: 1200px) {
    left: 5%;
  }
  @media (max-width: 900px) {
    width: 430px;
    height: 430px;
  }
  @media (max-width: 760px) {
    left: 20%;
  }
  @media (max-width: 630px) {
    top: 20px;
    left: 5%;
  }
  @media (max-width: 420px) {
    width: 300px;
    height: 300px;
    left: 10%;
  }
`;
export const GridContainer = styled.article`
  padding-top: 40px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentGrid = styled(ContainerFlex)`
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const InfoFit = styled.article`
  width: 100%;
  height: 100%;
  background-color: white;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 40px 20px 20px 40px;

  h3 {
    color: #fa621a;
    font-weight: 100;
  }
  p {
    font-weight: 50;
    font-style: normal;
  }
  span {
    color: #ec4f16;
  }
`;

export const ImgFit = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
`;
export const GridItem = styled.div`
  width: 100%;
  height: 100%;
  p {
    width: 300px;
  }
`;
export const GridItemText = styled(ContainerFlex)`
  width: 80%;
  height: 60%;
  align-items: start;
  padding-left: 60px;

  @media (max-width: 750px) {
    height: 440px;
    padding: 10px;
  }
`;
export const Readme = styled.button`
  background-color: #fa621a;
  color: white;
  width: 120px;
  height: 40px;
  cursor: pointer;
`;

export const Assessments = styled(ContainerFlex)`
  background-color: white;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
  article {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;

    div {
      width: 180px;
      height: 180px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-evenly;

      h1 {
        font-size: 40px;
        color: #ed3f0b;
      }
      h2 {
        text-align: center;
      }
    }
  }
`;

export const Notices = styled(ContainerFlex)``;
export const Aside = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 30px;
  * {
    text-align: center;
  }

  h2 {
    font-size: 50px;
  }
  p {
    width: 400px;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;
export const NoticesArticle = styled(ContainerFlex)`
  flex-direction: row;
  align-items: start;
  padding-top: 80px;

  @media (max-width: 930px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Card = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  width: 300px;
  height: 420px;

  @media (max-width: 930px) {
    flex-direction: row;
    width: 80%;
    height: auto;
    padding-top: 20px;
    border: none;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }

  div {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 40px 5px 30px 40px;

    @media (max-width: 930px) {
      padding: 0 10px;
    }

    span {
      color: grey;
    }
    p {
      color: gray;
    }
    h3 {
      color: #fa621a;
    }
  }
`;

export const Newsletter = styled.article`
  width: 300px;
  height: 390px;
  border: 1px solid red;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 30px;
  border: none;
  outline: none;

  @media (max-width: 930px) {
    margin: 20px auto;
    width: 80%;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: whitesmoke;
  padding-left: 8px;
`;

export const GridMessage = styled.div`
  width: 800px;
  gap: 30px;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 40px 0px 40px 20px;

  @media (max-width: 780px) {
    width: 90%;
    padding: 20px 0 20px 0;
  }
`;
export const InputGrid = styled(Input)`
  width: 90%;
  background-color: white;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  padding: 20px;
  width: 740px;
  height: 200px;
  background-color: white;
  grid-column: 1/3;
  resize: none;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

/*Footer*/

export const ContainerFooter = styled.div`
  width: 100%;
  height: auto;
  background-color: #2f2f2f;
`;
export const Footer = styled(ContainerFlex)`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;

  div {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 10px;

    p {
      color: white;
    }
  }
`;
export const FooterContent = styled.article`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 60px;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 1050px) {
    flex-direction: column;
  }
  @media (max-width: 560px) {
    width: 100%;
  }
`;
export const CardFooter = styled.article`
  height: 260px;
  width: 200px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 20px 10px 10px 20px;
  color: gray;
  h2 {
    color: #fa621a;
  }

  p {
    font-weight: 10;
  }

  @media (max-width: 560px) {
    padding: 10px;
    width: 90%;
    h2 {
      font-size: 17px;
    }
    h3 {
      font-size: 15px;
    }
    p {
      font-size: 14px;
    }
  }
`;
export const FollowUs = styled(ContainerFlex)`
  max-width: 200px;
  flex-direction: row;
  p {
    transform: translateY(2px);
  }
`;
export const InputFooter = styled(Input)`
  padding-left: 3px;
  width: 90%;
  height: 24px;
`;
export const TextAreaFooter = styled(TextArea)`
  padding: 2px;
  width: 90%;
  height: 30%;
`;

export const ButtonF = styled(Readme)`
  height: 22px;
  width: 100px;
  border: none;
`;
