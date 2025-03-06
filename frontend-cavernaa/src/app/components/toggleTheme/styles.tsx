import { styled } from 'styled-components';

export const SwitchWrapper = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const Switch = styled.div<{ $isdarkmode: boolean }>`
  position: relative;
  width: 60px;
  height: 30px;
  background-color: ${({ $isdarkmode, theme }) => theme.colors.bgSecondary};
  border-radius: 30px;
  transition: background-color 0.5s ease;
`;

export const Circle = styled.div<{ $isdarkmode: boolean }>`
  position: absolute;
  top: 3px;
  left: ${({ $isdarkmode }) => ($isdarkmode ? '30px' : '3px')};
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 50%;
  transition: left 0.3s ease;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease;
  width: 100%;
  height: 100%;
`;
