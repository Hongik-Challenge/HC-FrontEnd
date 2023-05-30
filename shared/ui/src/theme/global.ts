import reset from "styled-reset";
import { media } from './theme';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    body{
        font-family: -apple-system, BlinkMacSystemFont, 
            "Apple SD Gothic Neo", 
            "Pretendard Variable", 
            Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 
            sans-serif;
    }

     -webkit-tap-highlight-color: transparent;
     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
 
    ${media.mobile} {
       -ms-overflow-style: none;
    } 
`;
//   button {
//     background: inherit;
//     border: none;
//     box-shadow: none;
//     border-radius: 0;
//     padding: 0;
//     overflow: visible;
//     cursor: pointer;
//   }
//   button:focus {
//     outline: none;
//   }
//   input:focus {
//     outline: none;
//   }
//   textarea:focus {
//     outline: none;
//   }

//   &::-webkit-scrollbar {
//     ${media.mobile} {
//       display: none;
//     }
//   }

//   :root {
//     --main-width: 600px;
//   }
//   a {
//     color: inherit;
//     text-decoration: none;
//   }

//   [data-rsbs-scroll] {
//     scrollbar-width: none !important;
//     -ms-overflow-style: none !important;
//   }
// `