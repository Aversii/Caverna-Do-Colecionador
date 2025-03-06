import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({theme}) => (theme.colors.bgPrimary)};
    font-family: ${({theme}) => theme.fontFamily};
  }

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}`