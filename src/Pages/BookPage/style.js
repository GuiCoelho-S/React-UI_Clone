import styled from "styled-components";

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
