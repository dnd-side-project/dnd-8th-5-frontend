import styled from '@emotion/styled';
import { css } from '@emotion/react';
import theme from '@/styles/theme';

export const ToggleBtn = styled.button<{ toggle: boolean }>`
  width: 100px;
  height: 26px;

  position: absolute;
  top: 15px;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  border: none;

  cursor: pointer;

  background-color: ${theme.colors.gray02};

  transition: all 0.5s ease-in-out;
`;

export const ToggleText = styled.div`
  width: 45px;
  color: #b6b6b6;

  ${theme.typography.semibold06}
`;

export const Circle = styled.div<{ toggle: boolean }>`
  width: 55px;
  height: 26px;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.purple06};

  ${theme.typography.semibold06}

  background-color: white;
  border-radius: 50px;
  box-shadow: 0px 0px 14.34px 0px rgba(106, 123, 255, 0.26);

  left: -5px;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    !props.toggle &&
    css`
      transform: translate(52px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
