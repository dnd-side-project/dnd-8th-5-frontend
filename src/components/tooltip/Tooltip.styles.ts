import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0px;
  width: 100%;
  max-width: 412px;
  height: 100%;
  z-index: 200;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const TooltipIcon = styled.img`
  position: fixed;
  top: 190px;
  width: 100%;
  height: 380px;
  max-width: 412px;
  padding-inline: 10px;
  z-index: 5;
`;

export const handleFade = keyframes`
0%{
  top:260px;
}
75% {
  top: 410px;
}
100%{
  top: 410px;
}

`;

export const TooltipHandleIcon = styled.img`
  position: absolute;
  top: 260px;
  left: 100px;
  width: 95px;
  height: 80px;
  max-width: 412px;
  padding-inline: 10px;
  z-index: 5;
  animation: ${handleFade} 2s 0s ease-in infinite forwards;
`;

export const CloseButton = styled.img`
  position: absolute;
  width: 80px;
  height: 66px;
  bottom: 80px;

  @media screen and (max-height: 700px) {
    bottom: 20px;
  }

  max-width: 412px;
  padding-inline: 10px;
  z-index: 5;
  cursor: pointer;
`;
