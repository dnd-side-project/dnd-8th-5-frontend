import { css } from '@emotion/react';

const colors = {
  orange1: '#ED7C55',

  green1: '#E6F8EE',
  green2: '#59CE8F',

  purple1: '#EDEFFF',
  purple2: '#DADEFF',
  purple3: '#BCC4FF',
  purple4: '#97A3FF',
  purple5: '#6A7BFF',

  gray1: '#FFFFFF',
  gray2: '#F6F6F6',
  gray3: '#DBDBDB',
  gray4: '#B6B6B6',
  gray5: '#979797',
  gray6: '#545454',
  gray7: '#1A1A1A',
};

const typography = {
  system_0_semibold: css`
    font-size: 24px;
    font-weight: 600;
  `,
  system_1_semibold: css`
    font-size: 20px;
    font-weight: 600;
  `,
  system_2_semibold: css`
    font-size: 18px;
    font-weight: 600;
  `,
  system_3_semibold: css`
    font-size: 16px;
    font-weight: 600;
  `,
  system_4_semibold: css`
    font-size: 14px;
    font-weight: 600;
  `,

  system_0_medium: css`
    font-size: 18px;
    font-weight: 500;
  `,
  system_1_medium: css`
    font-size: 16px;
    font-weight: 500;
  `,
  system_2_medium: css`
    font-size: 14px;
    font-weight: 500;
  `,
  system_3_medium: css`
    font-size: 12px;
    font-weight: 500;
  `,

  system_0_regular: css`
    font-size: 16px;
    font-weight: 400px;
  `,
  system_1_regular: css`
    font-size: 14px;
    font-weight: 400px;
  `,
  system_2_regular: css`
    font-size: 12px;
    font-weight: 400px;
  `,
};

const theme = {
  colors,
  typography,
};

export default theme;
