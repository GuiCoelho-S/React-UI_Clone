import styled from 'styled-components';

export const Button = styled.div`

width:70px; 
height:70px; 

border-radius: 50%;
opacity:0.2;
background-color:black;
position:relative;
display:grid; 
position:absolute;
place-items:center;
top:50%;
transform: translateY(-50%);
transition: all cubic-bezier(0.23, 1, 0.320, 1) 0.8s;
cursor:pointer;

&:hover{
    opacity:0.6;
}

button {
    background-color: transparent;
    cursor:pointer;
    border:none;
}
`;

export const Icon = styled.img`
align-self:center;
justify-self: center;
width:40px;
height:40px; 


filter:invert(1);

`

export const ButtonBook = styled(Button)`
width:40%;
height:30px;
`