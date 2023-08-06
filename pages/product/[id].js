import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import CartIcon from "@/components/icons/CartIcon";
import WhiteBox from "@/components/whiteBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Link from "next/link";
import { useContext } from "react";
import { styled } from "styled-components";

const ColWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    @media screen and (min-width:786px){
        grid-template-columns: .8fr 1.2fr;
    }
    gap: 40px;
    margin-top: 40px 0; 
`;
 const PriceRow = styled.div`
    display:flex;
    gap:20px;
    align-items:center;
 `;

 const Price = styled.span`
    font-size: 1.4rem;
 `;
export default function ProductPage({product}) {
    const {addProduct} = useContext(CartContext);
    return (
        <>  
          <Header/>
            <Center>
                <ColWrapper>
                <WhiteBox>
                  <ProductImages images={product.images}/>
                </WhiteBox>
                    <div>
                        <Title>{product.title}</Title>
                        <p>{product.description}</p>
                       <PriceRow>
                        <div>
                            <Price>€ {product.price}</Price>                       
                        </div>
                        <div>
                            <div>
                            <Link href={'/cart'}>
                                <Button 
                                        primary 
                                        onClick={() => addProduct(product._id)}>
                                <CartIcon />
                                    Add to cart
                                    </Button>  
                            </Link>
                            </div>
                        </div>
                       </PriceRow>
                    </div>
                </ColWrapper>
            </Center>
        </>
    );
}

export async function getServerSideProps(contex) {
    await mongooseConnect();
    const {id} = contex.query;
    const product = await Product.findById(id);
    return {
        props: {
            product:JSON.parse(JSON.stringify(product)),
        }
    }

}