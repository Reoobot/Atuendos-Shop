import Link from "next/link";
import { keyframes, styled } from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";


const StyleHeader = styled.header`
    background-color: #07091F;  
`;
const Logo = styled(Link)`
    color: #ffff;
    text-decoration:none;
    position: relative;
    z-index: 3;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${props =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding:70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 786px) {
    display: flex; 
    position: static;
    background-color: #07091F;
    padding: 10px;
  }
`;
const NavLink = styled(Link)`
    display:block;
    color:#aaa; 
    text-decoration:none;
    padding:10px 0;
    @media screen and (min-width:786px){
        padding:0;
    }
`;

const NavButton = styled.button`
    background-color: transparent;
    width:50px;
    height:30px;
    border:0;
    color:white;
    cursor:pointer;
    position: relative;
    z-index: 3;
    @media screen and (min-width:786px){
        display:none;
    }
`;

const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;
const AnimatedImage = styled.img`
  max-width: 100%;
  max-height: 80px;
  animation: ${slideInFromTop} 1.5s ease; /* Aplicar la animación */
  width:50px;
    @media screen and (min-width:786px){
        width:100px;
    }
`;
const LogoImage = styled.img`
    width:50px;
    @media screen and (min-width:786px){
        width:100px;
    }
`;

export default function Header() {
    const {cartProducts} = useContext(CartContext);
    const [mobileNavActive, setMobileNavActive] = useState(false);
    return (
        <StyleHeader>
            <Center>
                <Wrapper>
                 
                    <Logo href={'/'}>
                <AnimatedImage src="https://f-next-ecomerce.s3.amazonaws.com/1691320895420.jpeg" alt=""/>
                    </Logo>
                    <StyledNav mobileNavActive={mobileNavActive}>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/products'}>All products</NavLink>
                        <NavLink href={'/categories'}>Categories</NavLink>
                        <NavLink href={'/account'}>Account</NavLink>
                        <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
                    </StyledNav>
                    <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
                        <BarsIcon />
                    </NavButton>
                </Wrapper>
            </Center>   
        </StyleHeader>
    );
}