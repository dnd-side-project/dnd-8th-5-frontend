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

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const GuideImage = styled.img`
  position: absolute;
  top: 190px;
  width: 104%;
  max-width: 412px;
  padding-inline: 10px;
  z-index: 5;
`;

export const DragAreaWrapper = styled.div`
  position: relative;
  width: 168px;
  margin: 254px 0 0 52px;
`;

export const DragArea = styled.img`
  width: 100%;
`;

export const handleFade = keyframes`
0%{
  top: 0
}
75% {
  top: 224px;
}
100%{
  top: 224px;
}
`;

export const TooltipHandleIcon = styled.img`
  position: absolute;
  width: 72px;
  top: 0;
  left: 58px;
  z-index: 5;
  animation: ${handleFade} 2s 0s ease-in infinite forwards;
`;

export const CloseButton = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  z-index: 5;
  width: 64px;
  height: 64px;
  cursor: pointer;
`;
