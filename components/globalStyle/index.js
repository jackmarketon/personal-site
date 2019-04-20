import { createGlobalStyle } from 'styled-components';

// Global Styles
export default createGlobalStyle`
  body {
    background: ${({ theme }) => theme.color.background};
    font-size: ${({ theme }) => theme.font.fontSize.root};
    font-family: ${({ theme }) => theme.font.fontFamily.sansSerif};
    margin: 0;
    * {
      box-sizing: border-box;
    }

    .bookTitle {
      font-style: italic;
    }
  }

  head {
    display: none;
  }
`;
