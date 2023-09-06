import { styled } from "styled-components"
import Navbar from "../components/Navbar"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import { Add, Remove } from "@mui/icons-material";


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
const Product = styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail = styled.div`
flex: 2;
display: flex;
`;
const Image  = styled.img`
width: 200px;
`;
const Details = styled.div`
padding: 20px;
display: flex;
flex-dierection: column;
justify-content: space-around;

`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${props => props.color}
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;

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
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
        <Info>
            <Product>
                <ProductDetail>
                    <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"/>
                    <Details>
                        <ProductName><b>Product:</b> JESSIE THUNDER SHOE</ProductName>
                        <ProductId><b>ID:</b> 7895785893</ProductId>
                        <ProductColor color="black" />
                        <ProductSize><b>Size:</b> 37.5</ProductSize>
                    </Details>
                </ProductDetail>
                <PriceDetail>
                    <ProductAmountContainer>
                        <Add />

                        <Remove />
                    </ProductAmountContainer>
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
