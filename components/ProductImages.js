import { useState } from "react";
import { styled } from "styled-components";

const Image = styled.img`
    max-width:100%;
    max-height:100%;
    border-radius:5px;
`;

const BigImage = styled.img`
    max-width:100%;
    max-height:100%;
    border-radius:5px;
    box-shadow:10px 10px 10px;
`;

const ImageButtons = styled.div`
    display:flex;
    gap: 10px;
    flex-grow:0;
    aline-intems:center;
    margin-top: 10px;
`;

const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
    border-color: #fff;` : `border-color: transparent`}
    heigth:40px;
    padding:5px;
    cursor: pointer;
    border-radius:5px;
`;

const BigImageWrapper = styled.div`
    text-align: center;
`; 

export default function ProductImages({ images }) {
    const [activeImage, setActiveImage] = useState(images?.[0]);
  
    return (
      <>
      <BigImageWrapper>
            <BigImage src={activeImage} />
            <ImageButtons>
            {images.map((image, index) => (
                <ImageButton 
                    key={index}
                    active={image===activeImage} 
                    onClick={() => setActiveImage(image)}>
                <Image src={image} alt="" />
                </ImageButton>
            ))}
            </ImageButtons>
          </BigImageWrapper>
      </>
    );
  }
   