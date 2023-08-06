import { styled } from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Link from "next/link";


const Bg = styled.div`
    background-color:#07091F;
    color:#fff;
    padding:50px 0;
    
`;
const Title = styled.h1`
    margin:0;
    font-weight:normal;
    font-size:1.5rem;
    @media screen and (min-width:786px){
        font-size:3rem;
    }
`;
const Desc = styled.p`
    color:#aaa;
    font-sice:.8rem;
    text-align: justify;
`;
const ColumnsWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    gap: 40px;
    img{
        max-width:100%;
        max-height:200px;
        display:block;
        margin: 0 auto;
    }
    div:nth-child(1) {
        order:2;
    }
    @media screen and (min-width:786px){
        grid-template-columns: 1.1fr 0.9fr;
        div:nth-child(1) {
            order:0;
        }
        img{
            max-width:100%
        }
    }
`;
const Column = styled.div`
    grid-template-columns: 1.1fr 0.9fr;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    gap:10px;
    margin-top:25px;
`;


export default function Featured({product}) {
    
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart(){
        addProduct(product._id);
    }
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.title}</Title>
                            <Desc>{product.description}</Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                                <Link href={'/cart'}>
                                <Button white onClick={addFeaturedToCart}>
                                    <CartIcon />
                                    Add to cart
                                </Button>
                                </Link>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <div>
                        <img src="https://f-next-ecomerce.s3.amazonaws.com/1691320903064.png" alt=""/>
                    </div>
                </ColumnsWrapper>    
            </Center>
        </Bg>
    );
}