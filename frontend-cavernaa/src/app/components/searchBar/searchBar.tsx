import { PiMagnifyingGlassFill } from "react-icons/pi";
import { styled } from "styled-components";
import {
  SearchGroup,
  SearchInput,
  SearchLabel,
  ClearButton,
  SearchButton,
} from "./styles";
import { useState, useRef, useEffect } from "react";

export const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node) &&
      inputValue === ""
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputValue]);

  const handleFocus = () => {
    if (!isOpen) setIsOpen(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    if (!isOpen) setIsOpen(true);
  };

  return (
    <SearchGroup $isOpen={isOpen} ref={searchRef}>
      <SearchInput
        $isOpen={isOpen}
        type="text"
        id="search"
        required
        value={inputValue}
        onFocus={handleFocus}
        onChange={handleChange}
      />
      <SearchLabel $isOpen={isOpen} htmlFor="search">
        Pesquisar
      </SearchLabel>
      {inputValue && (
        <ClearButton onClick={() => setInputValue("")}>
          <svg viewBox="0 0 24 24">
            <path d="M18.3 5.7a1 1 0 0 0-1.4 0L12 10.6 7.1 5.7a1 1 0 1 0-1.4 1.4L10.6 12l-4.9 4.9a1 1 0 1 0 1.4 1.4L12 13.4l4.9 4.9a1 1 0 0 0 1.4-1.4L13.4 12l4.9-4.9a1 1 0 0 0 0-1.4z" />
          </svg>
        </ClearButton>
      )}
      <SearchButton onClick={handleSearchClick}>
        <PiMagnifyingGlassFill />
      </SearchButton>
    </SearchGroup>
  );
};
