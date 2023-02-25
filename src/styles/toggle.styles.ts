import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ToggleBtn = styled.button<{ toggle: boolean }>`
  width: 100px;
  height: 26px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  border: none;

  cursor: pointer;

  background-color: #f6f6f6;

  transition: all 0.5s ease-in-out;
`;

export const ToggleText = styled.div`
  width: 45px;
  color: #b6b6b6;

  font-size: 14px;
`;

export const Circle = styled.div<{ toggle: boolean }>`
  width: 55px;
  height: 26px;

  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #6a7bff;

  font-size: 14px;

  background-color: white;
  border-radius: 50px;
  box-shadow: 0px 0px 14.34px 0px #6a7bff;

  left: 0%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    !props.toggle &&
    css`
      transform: translate(45px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;
