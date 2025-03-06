import React from "react";
import Image from "next/image";
import { HeaderContainer, LogoContainer, ToggleContainer } from "./styles";
import { SearchBar } from "../searchBar/searchBar";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image
          src="/Aversi_logo-removebg-preview(1).png"
          alt="Logo"
          width={75}
          height={50}
        />
      </LogoContainer>

      <ToggleContainer>
        <SearchBar />
        {children}
      </ToggleContainer>
    </HeaderContainer>
  );
};
