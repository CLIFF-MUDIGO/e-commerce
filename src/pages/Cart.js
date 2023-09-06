import { styled } from "styled-components"
import Navbar from "../components/Navbar"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"


const Container = styled.div`

`;
const Wrapper = styled.div`

`;
const Title = styled.h1`
font-weight: 300;
text-align: center;


`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;

`;

const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border: ${props => props.type === "filled" && "none"};
background-color: ${props => props.type === "filled" ? "black" : "transparent"};
color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`


`;
const TopText = styled.span`
text-decoration: underline;
cursor:pointer;
margin: 0px 10px;
`;
const Bottom = styled.div`
display:flex;
justify-content: space-between;


`;
const Info= styled.div`
flex:3;
`;
const Product = styled.div``;
const ProductDetail = styled.div``;
const Image  = styled.img``;
const Details = styled.div``;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div``;
const ProductSize = styled.span``;
const PriceDetail = styled.div``;
const Summary = styled.div`
flex:1;

`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECOUT NOW</TopButton>
        </Top>
        <Bottom>
        <Info>
            <Product>
                <ProductDetail>
                    <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                    <Details>
                        <ProductName><b>Product:</b> JESSIE THUNDER SHOE</ProductName>
                        <ProductId><b>ID:</b> 7895785893</ProductId>
                        <ProductColor />
                        <ProductSize><b>Size:</b> 37.5</ProductSize>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    price
                </PriceDetail>
            </Product>
        </Info>
        <Summary>summary</Summary>

        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
