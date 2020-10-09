import styled from "styled-components";
import CustomButton from "../custom-button/custom-button";

export const Container = styled.div`
  width: 80vw;
  height: 70vh;
  margin: auto;
  display: grid;
  grid-template-columns: 40% 40% 20%;
  grid-template-rows: 10% 60% 30%;
  gap: 5px 5px;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 75px 140px 140px 120px 150px;
    gap: 10px;
    justify-content: center;
  }
`;

export const ProductTitle = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 48px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 40px;

  @media screen and (max-width: 800px) {
    grid-column-start: 1;
    grid-column-end: end;
    grid-row-start: 1;
    grid-row-end: 2;
    padding-bottom: 5px;
  }
`;

export const ProductImage = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
  width: 30vw;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border-radius: 15px;
  margin: auto;
  justify-self: center;
  align-self: center;

  @media screen and (max-width: 800px) {
    grid-column-start: 1;
    grid-column-end: end;
    grid-row-start: 2;
    grid-row-end: 4;
    width: 75%;
    margin: 0 auto;
    margin-bottom: 5px;
  }
`;
export const ProductDetails = styled.div`
  grid-column-start: 2;
  grid-column-end: end;
  grid-row-start: 2;
  grid-row-end: 2;
  font-size: 36px;
  align-self: center;

  @media screen and (max-width: 800px) {
    grid-column-start: 1;
  grid-column-end: end;
  grid-row-start: 4;
  grid-row-end: 5;
  
    
    
`;

export const ProductWrap = styled.div`
  grid-column-start: 2;
  grid-column-end: end;
  grid-row-start: 3;
  grid-row-end: 3;
  font-size: 36px;
  display: grid;
  justify-self: center;
  align-self: end;
  justify-content: space-around;
  width: 100%;
  height: 5=30%;
  position: relative;
  vertical-align: middle;
  grid-template-columns: auto auto auto;

  @media screen and (max-width: 800px) {
    grid-column-start: 1;
  grid-column-end: end;
  grid-row-start: 5;
  grid-row-end: 6;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-self: center;
    
`;

export const QtyContainer = styled.div`
  font-size: 22px;
  align-self: center;
`;
export const PriceContainer = styled.div`
  font-size: 48px;
  align-self: center;
`;

export const AddToCart = styled(CustomButton)`
  align-self: center;
`;
