import styled from '@emotion/styled';
import { BottomSheet } from 'react-spring-bottom-sheet';
import theme from '../../styles/theme';

export const BottomSheetComponent = styled(BottomSheet)`
  [data-rsbs-overlay] {
    border-top-left-radius: 16px;
    border-top-left-radius: var(--rsbs-overlay-rounded, 16px);
    border-top-right-radius: 16px;
    border-top-right-radius: var(--rsbs-overlay-rounded, 16px);
    display: flex;
    background: #fff;
    background: var(--rsbs-bg, #fff);
    flex-direction: column;
    height: 0px;
    height: 323px;
    transform: translate3d(0, 0px, 0);
    transform: translate3d(0, var(--rsbs-overlay-translate-y, 0px), 0);
    will-change: height;
    width: none !important;
  }

  [data-rsbs-overlay]:focus {
    outline: none;
  }

  [data-rsbs-is-blocking='false'] [data-rsbs-overlay] {
    box-shadow: 0 -5px 60px 0 rgba(38, 89, 115, 0.11),
      0 -1px 0 rgba(38, 89, 115, 0.05);
  }

  [data-rsbs-overlay],
  [data-rsbs-root]:after {
    max-width: auto;
    max-width: var(--rsbs-max-w, auto);
    margin-left: env(safe-area-inset-left);
    margin-left: var(--rsbs-ml, env(safe-area-inset-left));
    margin-right: env(safe-area-inset-right);
    margin-right: var(--rsbs-mr, env(safe-area-inset-right));
  }

  [data-rsbs-overlay],
  [data-rsbs-backdrop],
  [data-rsbs-root]:after {
    z-index: 3;
    -ms-scroll-chaining: none;
    overscroll-behavior: none;
    touch-action: none;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    max-width: 412px !important;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  [data-rsbs-backdrop] {
    top: -60px;
    bottom: -60px;
    background-color: rgba(0, 0, 0, 0.6);
    background-color: var(--rsbs-backdrop-bg, rgba(0, 0, 0, 0.6));
    will-change: opacity;
    cursor: pointer;
    opacity: 1;
  }

  [data-rsbs-is-dismissable='false'] [data-rsbs-backdrop] {
    cursor: ns-resize;
  }

  [data-rsbs-root]:after {
    content: '';
    pointer-events: none;
    background: #fff;
    background: var(--rsbs-bg, #fff);
    height: 1px;
    transform-origin: bottom;
    transform: scale3d(1, 0, 1);
    transform: scale3d(1, var(--rsbs-antigap-scale-y, 0), 1);
    will-change: transform;
  }

  [data-rsbs-footer],
  [data-rsbs-header] {
    flex-shrink: 0;
    cursor: ns-resize;
    padding: 16px;
  }

  [data-rsbs-header] {
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-shadow: 0 1px 0 rgba(46, 59, 66, calc(1 * 0.125));
    box-shadow: 0 1px 0
      rgba(46, 59, 66, calc(var(--rsbs-content-opacity, 1) * 0.125));
    z-index: 1;
    padding-top: calc(20px + env(safe-area-inset-top));
    padding-bottom: 8px;
  }

  [data-rsbs-header]:before {
    position: absolute;
    content: '';
    display: block;
    width: 36px;
    height: 4px;
    top: calc(8px + env(safe-area-inset-top));
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    background-color: hsla(0, 0%, 0%, 0.14);
    background-color: var(--rsbs-handle-bg, hsla(0, 0%, 0%, 0.14));
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
    [data-rsbs-header]:before {
      transform: translateX(-50%) scaleY(0.75);
    }
  }

  [data-rsbs-has-header='false'] [data-rsbs-header] {
    box-shadow: none;
    padding-top: calc(12px + env(safe-area-inset-top));
  }

  [data-rsbs-scroll] {
    flex-shrink: 1;
    flex-grow: 1;
    -webkit-tap-highlight-color: revert;
    -webkit-touch-callout: revert;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    -moz-user-select: auto;
    user-select: auto;
    overflow: visible;
    -ms-scroll-chaining: none;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  [data-rsbs-scroll]:focus {
    outline: none;
  }

  [data-rsbs-has-footer='false'] [data-rsbs-content] {
    padding-bottom: env(safe-area-inset-bottom);
  }

  [data-rsbs-content] {
    /* The overflow hidden is to ensure any margin on child nodes are included when the resize observer is measuring the height */
    overflow: hidden;
  }

  [data-rsbs-footer] {
    box-shadow: 0 -1px 0 rgba(46, 59, 66, calc(1 * 0.125)), 0 2px 0 #fff;
    box-shadow: 0 -1px 0 rgba(46, 59, 66, calc(var(--rsbs-content-opacity, 1) *
              0.125)),
      0 2px 0 var(--rsbs-bg, #fff);
    overflow: hidden;
    z-index: 1;
    padding-bottom: calc(16px + env(safe-area-inset-bottom));
  }

  [data-rsbs-is-dismissable='true'] [data-rsbs-header] > *,
  [data-rsbs-is-dismissable='true'] [data-rsbs-scroll] > *,
  [data-rsbs-is-dismissable='true'] [data-rsbs-footer] > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='opening']
    [data-rsbs-header]
    > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='closing']
    [data-rsbs-header]
    > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='opening']
    [data-rsbs-scroll]
    > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='closing']
    [data-rsbs-scroll]
    > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='opening']
    [data-rsbs-footer]
    > *,
  [data-rsbs-is-dismissable='false'][data-rsbs-state='closing']
    [data-rsbs-footer]
    > * {
    opacity: 1;
    opacity: var(--rsbs-content-opacity, 1);
  }

  [data-rsbs-is-dismissable='true'] [data-rsbs-backdrop],
  [data-rsbs-is-dismissable='false'][data-rsbs-state='opening']
    [data-rsbs-backdrop],
  [data-rsbs-is-dismissable='false'][data-rsbs-state='closing']
    [data-rsbs-backdrop] {
    opacity: 1;
    opacity: var(--rsbs-backdrop-opacity, 1);
  }

  [data-rsbs-state='closed'],
  [data-rsbs-state='closing'] {
    /* Allows interactions on the rest of the page before the close transition is finished */
    pointer-events: none;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 412px;
  height: 300px;
  padding-inline: 20px;
`;

export const HeaderRabbit = styled.img`
  position: fixed;
  z-index: 5;
  top: -127px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  padding-top: 10px;
`;

export const UrlContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.gray04};
  border-radius: 5px;
  width: 100%;
  height: 50px;
  margin-top: 24px;
`;

export const UrlWrapper = styled.div`
  display: block;
  width: 300px;
  height: 48px;
  padding: 15px;
  outline: none;
  color: ${theme.colors.gray04};
  ${theme.typography.regular01};
  margin-right: 30px;
`;

export const UrlText = styled.div`
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ClipBoardWrapper = styled.div`
  cursor: pointer;
`;

export const ClipBoard = styled.img`
  width: 24px;
  height: 24px;
`;

export const ShareButtonWrapper = styled.div`
  top: 0px;
  padding-bottom: 30px;
`;

export const RateButtonWrapper = styled.div`
  ${theme.typography.medium02};
  color: ${theme.colors.gray04};
  position: absolute;
  width: calc(100% - 40px);
  max-width: 412px;
  top: 271px;
  text-align: center;
  cursor: pointer;
`;

export const ShareButton = styled.button<{ isActivated: boolean }>`
  position: absolute;
  display: flex;
  top: 203px;
  left: 0;
  right: 0;
  width: calc(100% - 40px);
  max-width: 412px;
  height: 52px;
  margin: 0 auto;

  border-radius: 6px;

  ${theme.typography.semibold03};
  color: ${({ isActivated }) =>
    isActivated ? theme.colors.gray01 : theme.colors.gray06};
  background: ${({ isActivated }) =>
    isActivated ? theme.colors.purple06 : theme.colors.gray03};

  align-items: center;
  justify-content: center;

  outline: 0;
`;
