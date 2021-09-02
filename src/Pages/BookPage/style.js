import VideoBooks from '../../assets/images/BookPage/4.jpg';

import styled from 'styled-components';

export const Container = styled.div`
  margin:0 auto;
  max-width:1280px;
  height:100%;
  display:flex;
  flex-direction:column;
  color:white;
`;

export const FlexColumn = styled.article`display:flex; flex-direction:Column;`

export const Content = styled.div`
width:100%;
height:300px;
display:grid;
background-color: antiquewhite;
grid-template-columns: repeat(2, 1fr);

`

export const Header = styled.header`
background-color:pink;
height:30px;
grid-area: 1/1/2/3;
`

export const Apresentation = styled.article`
background-color:yellow;
height:200px;
`
export const CardMain = styled.aside`
background-color:green;

`
export const Details = styled.aside`
width:50%;
border:1px solid blue;
align-self:end;
height:200px;
`

export const Main = styled.div`
display:grid;
place-items:center;
padding:30px 0 0 0;
`
export const MainVideo = styled.div`
display:grid;
border:1px solid pink;
height:700px;
align-items:center;
justify-content:center;
background-image: url(${VideoBooks});

article {
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:200px;
    width:600px;
    border:1px solid red;
    
    div {
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-evenly;
        align-self:center;
    }
}
`

export const CardVideo = styled(FlexColumn)`
flex-direction:row;
width:900px;
height:300px;
z-index:10;
transform:translateY(100px);

${FlexColumn}{
    flex-direction:column-reverse;
    width:100%;
    background-image:url(${VideoBooks});
    * {
        height:50%;
        
        width:100%;
        padding:8px 8px 3px 3px;
        display:flex;
        flex-direction: column;
        justify-content:space-evenly;
        align-items: end;
    }
    div {
        background-color:#c0852a;
        
    }
    article {
        background-color:white;
        color:black;
    }
    aside {
        background-color:whitesmoke;
        color:black;
    }
}`