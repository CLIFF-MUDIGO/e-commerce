import { Send } from "@mui/icons-material";
import { styled } from "styled-components";

const Container = styled.div`
flex:1;
margin:5px;
min-width: 280px;
height: 350px;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
background-color:#fcf5f5;
border-radius:10px;
position:relative;
cursor:pointer;
transition: all 0.5s ease;

`;
const Title = styled.h1`
font-size: 70px;
margin-buttom:20px;
`;
const Desc = styled.div`
font-size:24px;
font-weight:300;
margin-buttom:20px;
`;
const InputContainer = styled.div`
width: 50%;
height: 40%;
background-color:white;
dispay:flex;
justify-content:space-between;
align-items:center;
border:1px solid lightgray;

`;
const Input = styled.input``;
const Button = styled.button``;

const Newsletter = () => {
  return (
   <Container>
    <Title>Newsletter</Title>
    <Desc>Get timely updates from your favorite products.</Desc>
    <InputContainer>
    <Input placeholder="your email"/>
    <Button>
        <Send />
    </Button>
    </InputContainer>
   </Container>
  )
}

export default Newsletter
