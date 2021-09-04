import styled from "styled-components";

export const Header = styled.header`
  grid-area: 1/1/2/3;
  display: flex;
  align-items: center;
  background-color: #000;
  position: relative;
  width: 100%;
  ul {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    select {
      width: 70px;
      height: 30px;
      border-radius: 6px;
      background-color: white;
      border: none;
    }
    li {
      display: inline-flex;
      transform: translateY(2px);

      span {
        padding-left: 10px;
      }
    }
    a {
      text-decoration: underline;
      padding: 0;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 20px 10px 5px 10px;
    align-items: Center;
    width: 100%;
    height: 100px;

    ul {
      justify-content: space-between;
    }
  }
`;
export const HideMenu = styled.div`
  width: 100%;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const menuHamburguer = styled.div`
  z-index: 20;
  transform: translateY(120px);
  background-color: black;
  right: 0;
  position: absolute;
  padding: 10px 20px 20px 40px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 20px;

    li {
      a {
        text-decoration: none;
        transition: all 0.2s;
        padding: 5px 3px;
        border-radius: 4px;
        &:hover{
          background-color: white;
          color: black;
          
        }
      }
    }
  }
  select {
    width: 70%;
    height: 30px;
    border-radius: 6px;
    background-color: white;
    border: none;
  }

  @media (min-width: 750px) {
    display: none;
  }
`;

export const Menu = styled.button`
  display: none;
  z-index: 4;
  background-color: white;
  border-radius: 50%;
  border: none;
  height: 30px;
  width: 30px;
  border: 1px solid white;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    scale: 1.1;
  }

  @media (max-width: 750px) {
    display: block;
  }
`;
