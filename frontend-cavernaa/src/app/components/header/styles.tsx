import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";


export const HeaderContainer = styled.header`
  width: 100dvw;
  height: 9dvh;
  background-color: ${({ theme }) => theme.colors.bgTerciary};
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
  padding: 0 1rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 1rem;
`;

