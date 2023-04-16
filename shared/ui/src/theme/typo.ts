import { css } from '@emotion/react';

export const calcRem = (px: number) => `${px / 16}rem`;

export const typo = {
  Header_24: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(24)};
    line-height: 140%;
    font-weight: 700;
  `,
  Header_20: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(20)};
    line-height: 140%;
    font-weight: 600;
  `,
  SubTitle_18: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(18)};
    line-height: 140%;
    font-weight: 600;
  `,
  SubTitle_16: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    line-height: 140%;
    font-weight: 600;
  `,
  SubTitle_14: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    line-height: 140%;
    font-weight: 600;
  `,
  Text_16_M: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    line-height: 160%;
    font-weight: 500;
  `,
  Text_16_R: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(16)};
    line-height: 160%;
    font-weight: 400;
  `,
  Text_14_M: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    line-height: 160%;
    font-weight: 500;
  `,
  Text_14_R: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(14)};
    line-height: 160%;
    font-weight: 400;
`,
    Caption_12_M: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(12)};
    line-height: 160%;
    font-weight: 500;   
    `,
    Caption_12_R: css`
    font-family: 'Pretendard';
    font-size: ${calcRem(12)};
    line-height: 160%;
    font-weight: 400;   
    `,
} as const;
