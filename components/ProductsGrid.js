import { styled } from "styled-components";
import ProductBox from "./ProductBox";

const StyleProductsGrid = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
gap: 30px;
@media screen and (min-width:786px){
    grid-template-columns: 1fr 1fr 1fr;
}
`;


export default function ProductsGrid({products}) {
    return (
        <StyleProductsGrid>
                {products?.length > 0 && products.map(product => (
                    <ProductBox key={product._id} {...product}/>
                ))}
      
        </StyleProductsGrid>
    );
}