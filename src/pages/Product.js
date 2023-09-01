import { styled } from "styled-components";
import Annoucement from "../components/Annoucement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Container = styled.div``;
const Wrapper = styled.div`
padding:50px;
display:flex;
`;
const ImgContainer = styled.div`
flex:1;
`;
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
`;
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;
`;
const Title = styled.h1`
font-weigh:200;`;
const Desc = styled.p`
margin:20px 0px;`;
const Price = styled.span`
font-weight:100;
font-size:40px;
`;

const Product = () => {
  return (
    <Container>
     <Navbar/>
     <Annoucement/>
     <Wrapper>
        <ImgContainer>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
            <Title>
               Denim Jumpsuit
            </Title>
            <Desc>
            Versatile denim jumpsuit for a stylish and comfortable look. Features include durable denim fabric, 
            easy-to-wear design with adjustable straps and pockets
            </Desc>
            <Price>
             $ 20
            </Price>
            
        </InfoContainer>
     </Wrapper>
     <Newsletter/>
     <Footer/>
    </Container>
  )
}

export default Product
