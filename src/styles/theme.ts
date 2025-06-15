import { css } from '@emotion/react';

const colors = {
  orange01: '#FDF2EE',
  orange02: '#ED7C55',
  orange03: '#FB7547',

  green01: '#E6F8EE',
  green02: '#59CE8F',

  purple00: '#E3E7FF',
  purple01: '#F3F4F9',
  purple02: '#EDEFFF',
  purple03: '#DADEFF',
  purple04: '#BCC4FF',
  purple05: '#97A3FF',
  purple06: '#6A7BFF',
  purple07: '#3C53FF',

  gray01: '#FFFFFF',
  gray02: '#F6F6F6',
  gray03: '#DBDBDB',
  gray04: '#B6B6B6',
  gray05: '#979797',
  gray06: '#545454',
  gray07: '#1A1A1A',

  red01: '#fbc9c9',
  red02: '#f14b4b',

  addTableBorder: '#DBDBDB',
  currentTableBorder: '#E7E7E7',
};

const typography = {
  semibold01: css`
    font-size: 24px;
    font-weight: 600;
    line-height: 130%;
  `,
  semibold02: css`
    font-size: 20px;
    font-weight: 600;
    line-height: 130%;
  `,
  semibold03: css`
    font-size: 18px;
    font-weight: 600;
    line-height: 130%;
  `,
  semibold04: css`
    font-size: 16px;
    font-weight: 600;
    line-height: 130%;
  `,
  semibold05: css`
    font-size: 15px;
    font-weight: 600;
    line-height: 130%;
  `,
  semibold06: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 130%;
  `,
  semibold07: css`
    font-size: 12px;
    font-weight: 600;
    line-height: 130%;
  `,

  medium01: css`
    font-size: 18px;
    font-weight: 500;
    line-height: 130%;
  `,
  medium02: css`
    font-size: 16px;
    font-weight: 500;
    line-height: 130%;
  `,
  medium03: css`
    font-size: 15px;
    font-weight: 500;
    line-height: 130%;
  `,
  medium04: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
  `,
  medium05: css`
    font-size: 12px;
    font-weight: 500;
    line-height: 130%;
  `,
  medium06: css`
    font-size: 10px;
    font-weight: 500;
    line-height: 130%;
  `,

  regular01: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
  `,
  regular02: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 130%;
  `,
  regular03: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 130%;
  `,
};

const theme = {
  colors,
  typography,
};

export default theme;
