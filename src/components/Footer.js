import { Instagram, Pinterest, Twitter } from "@mui/icons-material";
import { styled } from "styled-components"

const Container = styled.div`
display:flex;


`;
const Left= styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
margin:20px 0px;

`;
const SocialContainer = styled.div`
display:flex;

`;
const SocialIcon = styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color}

`;


const Center = styled.div`

flex:1;
`;
const Right = styled.div`
flex:1;

`;
const Footer = () => {
  return (
   <Container>
        <Left>
         <Logo>BALEZ.</Logo>
         <Desc>
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly believed
         </Desc>
         <SocialContainer>
            <SocialIcon color="E4405F"> 
                <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest />
            </SocialIcon>
         </SocialContainer>
        </Left>
        <Center>

        </Center>
        <Right>

        </Right> 
   </Container>
  )
};

export default Footer
