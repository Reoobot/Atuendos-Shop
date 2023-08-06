import { keyframes, styled } from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";


const ProductWrapper = styled.div`
`;

const WhiteBox = styled.div`
    background-color:#fff;
    box-shadow:2px 3px 10px 1px #66D;
    padding: 20px;
    height: 120px;
    text-align  :center;
    display: felx;
    align-items: center;
    justify-content:center;
    border-radius:10px;
    img{
        max-width:100%;
        max-height:80px;
        
    }
`;

const Title = styled(Link)`
    font-weight: normal;
    font-size:.9rem;
    color:inherit;
    text-decoration:none;
    margin:0;
`;

const ProductInfoBox = styled.div`
    margin-top:5px;
`;

const PriceRow = styled.div`
    display:block;
    @media screen and (min-width:786px){
        display:flex;
        gap:5px;
    }
    align-items:center;
    justify-content:space-between;
    margin-top:2px;
`;

const Price = styled.div`
    font-size:1rem;
    font-weight:400;
    text-align: right;
    @media screen and (min-width:786px){
        font-size:1.2rem;
        font-weight:600;
        text-align: left;
    }
`;



const slideInFromTop = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
const AnimatedImage = styled.img`
  max-width: 100%;
  max-height: 80px;
  animation: ${slideInFromTop} 1.5s ease; /* Aplicar la animación */
`;

const Stylecart = styled(Link)`
    text-decoration:none;
    color:black;
    font-weight:600;
`;

export default function ProductBox({_id,title,description,price, images}) {
    
    const {addProduct} = useContext(CartContext);
    const url = '/product/'+_id;

    return (
        <ProductWrapper>
            <WhiteBox >
                <Link href={url}>
                    <AnimatedImage src={images?.[0]} alt=""/>
                </Link>
            </WhiteBox>
            <ProductInfoBox>
               <Title href={url}>{title}</Title>
               <PriceRow>
                    <Price>
                        {/* ${price} */}
                            €{price}
                    </Price>
                        <Button href={url} block onClick={() => addProduct(_id)} primary outline>
                            <Stylecart href='/cart'>
                                Add to cart
                            </Stylecart>
                        </Button> 
               </PriceRow>
            </ProductInfoBox>
        </ProductWrapper>
    );
}