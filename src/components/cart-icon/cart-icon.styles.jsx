import styled from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CartIconSVG = styled(ShoppingIcon)`
  width: 26px;
  height: 26px;
`;

export const CountIcon = styled.span`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  bottom: 30px;
  color: red;
`;
