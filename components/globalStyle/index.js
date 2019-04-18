/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved */
import roboto from '!!raw-loader!typeface-roboto';
import anton from '!!raw-loader!typeface-anton';
/* eslint-enable */

import { createGlobalStyle } from 'styled-components';

// Global Styles
export default createGlobalStyle`
  ${roboto}
  ${anton}

  body {
    background: ${({ theme }) => theme.color.background};
    box-sizing: border-box;
    font-size: ${({ theme }) => theme.font.fontSize.root};
    font-family: ${({ theme }) => theme.font.fontFamily.sansSerif};
    margin: 0;
  }
`;
