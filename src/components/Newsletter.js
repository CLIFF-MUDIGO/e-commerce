import { Description, Send } from "@mui/icons-material";
import { styled } from "styled-components";

const Container = styled.div`
flex:1;
margin:5px;
min-width: 280px;
height: 350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfb;
border-radius:10px;
position:relative;
cursor:pointer;
transition: all 0.5s ease;

`;
const Title = styled.h1``;
const Desc = styled.p``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

const Newsletter = () => {
  return (
   <Container>
    <Title></Title>
    <Desc></Desc>
    <InputContainer>
    <Input />
    <Button>
        <Send />
    </Button>
    </InputContainer>
   </Container>
  )
}

export default Newsletter
