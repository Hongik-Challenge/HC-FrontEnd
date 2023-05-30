// import { css } from '@emotion/react';
// import emotionReset from 'emotion-reset';
// import { media } from './theme';

// export const globalStyle = css`
//     ${emotionReset}

//   @font-face {
//     font-family: 'Pretendard';
//     font-style: normal;
//     font-weight: 700;
//     src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
//       format('woff');
//   }
//   @font-face {
//     font-family: 'Pretendard';
//     font-style: normal;
//     font-weight: 600;
//     src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
//       format('woff');
//   }
//   @font-face {
//     font-family: 'Pretendard';
//     font-style: normal;
//     font-weight: 500;
//     src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff')
//       format('woff');
//   }
//   @font-face {
//     font-family: 'Pretendard';
//     font-style: normal;
//     font-weight: 400;
//     src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
//       format('woff');
//   }

//   body {
//     font-family: 'Pretendard', Pretendard, -apple-system, BlinkMacSystemFont,
//       system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
//       'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
//       'Segoe UI Symbol', sans-serif !important;
//     box-sizing: border-box;

//     -webkit-tap-highlight-color: transparent;
//     -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

//     ${media.mobile} {
//       -ms-overflow-style: none;
//     }
//   }
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