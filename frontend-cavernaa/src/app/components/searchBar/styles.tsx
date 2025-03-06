import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  $isOpen: boolean;
}

export const SearchInput = styled.input<SearchInputProps>`
  width: 100%;
  height: 32px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  padding: 0 36px 0 12px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: border 0.2s ease-in-out;

  &:focus,
  &:valid {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    display: none;
  `}
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  z-index: 1;

  svg {
    width: 16px;
    height: 16px;
    fill: ${({ theme }) => theme.colors.textSecondary};
  }

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(1);
  }
`;

export const SearchGroup = styled.div<{ $isOpen: boolean }>`
  position: relative;
  width: ${({ $isOpen }) => ($isOpen ? "300px" : "40px")};
  transition: width 0.3s ease;
  padding-right: 20px;
`;

export const SearchLabel = styled.label<SearchInputProps>`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  pointer-events: none;
  transition: all 0.2s ease-in-out;

  ${SearchInput}:focus ~ &,
  ${SearchInput}:valid ~ & {
    top: -6px;
    left: 170px;
    font-size: 0.6rem;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    padding: 0 12px;
    border: solid 1px ${({ theme }) => theme.colors.textSecondary};
    border-bottom: none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  ${({ $isOpen }) =>
    !$isOpen &&
    `
    opacity: 0;  // Torna o label invisível quando a barra encolhe
  `}
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: 55px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in-out;

  svg {
    width: 14px;
    height: 14px;
    fill: ${({ theme }) => theme.colors.textSecondary};
  }

  ${SearchInput}:focus ~ &,
  ${SearchInput}:valid ~ & {
    opacity: 1;
  }
`;
