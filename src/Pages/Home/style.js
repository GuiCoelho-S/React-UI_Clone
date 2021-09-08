import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: rgb(252, 255, 248);
  background: linear-gradient(
    250deg,
    rgba(252, 255, 248, 1) 0%,
    rgba(66, 73, 208, 0.4107678016919768) 0%,
    rgba(205, 248, 255, 1) 63%
  );
`;

export const FlexContainer = styled.main`
  margin: 0 auto;
  max-width: 1280px;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h1 {
    font-weight: bold;
    color: #f7c922;
    padding: 40px 10px;

    @media (max-width:420px){
      font-size:24px;
    }
  }

  a {
    color: red;
  }
`;

export const Topics = styled.article`
  max-width: 1000px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  section {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
  h2 {
    padding: 20px 10px;
  }

  h3 {
    font-size: 25px;
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid white;
    border-radius: 20px;
    padding: 10px;
    width: 300px;
    height: 200px;
    li {
      display: flex;
      justify-content: start;

      p {
        padding-left: 18px;
      }
    }
  }
`;

export const Description = styled.p`
  font-size: 20px;
  align-self: center;
  text-align: center;
  padding-bottom: 10px;
  line-height: 2rem;
  word-spacing: 0.2rem;
`;
export const Author = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 20px;
  width: 100%;

  * {
    padding-bottom: 5px !important;
    padding-left: 0 !important;
  }
`;

export const socialNetworks = styled.article`
  display: flex;
  gap: 40px;
  align-self: center;

  a {
    color: black;
  }
`;

export const Dev = styled.h2`
  align-self: flex-end;
  padding-right: 20px;
  font-size: 16px;
  padding-bottom: 0 !important;
`;
