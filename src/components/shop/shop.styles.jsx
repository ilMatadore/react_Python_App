import styled from "styled-components";

export const Container = styled.div`
  width: 75vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 40px;

  @media screen and (max-width: 800px) {
    width: 80vw;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin-top: 140px;
  }
`;

export const CardProduct = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 15px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
`;

export const PriceQtyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
