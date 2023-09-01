import { Call, Email, Instagram, LocationOn, Pinterest, Twitter } from "@mui/icons-material";
import { styled } from "styled-components"

const Container = styled.div`
display:flex;


`;
const Left = styled.div`
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
background-color:#${props => props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;


`;


const Center = styled.div`
flex:1;
padding:20px;
`;
const Right = styled.div`
flex:1;
padding:20px;
`;
const Title = styled.h3`
margin-bottom:30px;

`;

const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display-flex;
flex-wrap:wrap;

`;

const ListItem = styled.li`
width:50%;
margin-bottom:10px;

`;

const ContactItem = styled.div`
margin-bottom: 20px;
display:flex;
align-items:center;


`;
const Payments = styled.img`
width:50%;
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
                <Title>Useful Links</Title>
                <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Accoint</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
              <Title>Contact</Title>
              <ContactItem><LocationOn style={{marginRight:"10px"}}/>
              Nairobi, Kenya
              </ContactItem>
              <ContactItem><Call style={{marginRight:"10px"}}/>
              +254 705949828
              </ContactItem>
              <ContactItem><Email style={{marginRight:"10px"}}/>
              cmudigo5@gmail.com
              </ContactItem>
              <Payments src="//i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
};

export default Footer
