import { Send } from "@mui/icons-material";
import { styled } from "styled-components";

const Container = styled.div`
height: 60vh;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
background-color:#fcf5f5;
border-radius:10px;

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
  width: 40%;
  height: 10%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
border:none;
flex:8;
padding-left:20px;


`;
const Button = styled.button`
flex: 1;
border:none;
background-color:teal;
color:white;

`;

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
