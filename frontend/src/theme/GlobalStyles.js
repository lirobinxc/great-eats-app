import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body_background};
    transition: all 0.40s ease-in-out;
  }
  `;
