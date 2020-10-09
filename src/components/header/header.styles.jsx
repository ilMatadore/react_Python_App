import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/baildon-15135.svg";

export const AppHeader = styled.div`
  /* background-color: #282c34; */
  display: flex;
  justify-content: space-between;
  font-size: 22px;

  height: 90px;
  width: 100%;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 100px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const LogoApp = styled(Logo)`
  height: 70px;
  width: 70px;
`;

export const OptionsContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: #282c34;
`;
