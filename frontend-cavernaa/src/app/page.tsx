"use client";
import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme/theme";
import { GlobalStyle } from "./global/globalStyles";
import ToggleButton from "./components/toggleTheme/toggleTheme";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Main } from "./main/main";

export default function Home() {
  const [theme, setTheme] = useState(lightTheme);
  const [isdarkmode, setIsDarkMode] = useState(false);

  // Carregar tema de localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setTheme(darkTheme);
      setIsDarkMode(true);
    } else {
      setTheme(lightTheme);
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Atualizar o tema dependendo do isdarkmode
  useEffect(() => {
    setTheme(isdarkmode ? darkTheme : lightTheme);
  }, [isdarkmode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header>

        <ToggleButton toggleTheme={toggleTheme} isdarkmode={isdarkmode} />

      </Header>

      <Main>  

      </Main>
    </ThemeProvider>
  );
}
