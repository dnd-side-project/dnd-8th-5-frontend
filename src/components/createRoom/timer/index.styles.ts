import styled from '@emotion/styled';
import Slider from 'react-slick';
import theme from '@/styles/theme';

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 412px;
  overflow: hidden;
  touch-action: none;
  z-index: 1;
  padding: 0 40px 0 0;
`;

export const GreyBox = styled.div`
  position: absolute;
  max-width: 412px;
  left: 20px;
  right: 20px;
  height: 48px;
  background-color: ${theme.colors.gray02};
  z-index: 2;
  border-radius: 4px;
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const TimeText = styled.div`
  ${theme.typography.semibold03}
`;

export const TextContainer = styled.div`
  height: 195px;
  display: flex;
  flex-direction: row;
  ${theme.typography.medium01}
  color: ${theme.colors.gray07};
  align-items: center;
  z-index: 3;
`;

export const StyledSlider = styled(Slider)`
  .css-teqmh5 {
    ${theme.typography.semibold03}
  }

  .slick-slide {
    color: white;
    justify-items: flex-end;
    align-items: center;
    text-align: right;
    height: 40px;
  }

  .slick-slide div div {
    font-weight: 400;
  }

  .slick-list {
    z-index: 3;
    width: 62px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  .slick-vertical .slick-slide {
    display: block;
  }

  .slick-slide {
    color: ${theme.colors.gray03};
  }
  .slick-active {
    color: ${theme.colors.gray03};
  }
  .slick-current {
    color: ${theme.colors.purple05};
  }
  .slick-center {
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    display: block;
    height: 20px;
    width: 20px;
    line-height: 0px;
    font-size: 0px;
    cursor: pointer;
    background: transparent;
    color: transparent;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    padding: 0;
    border: none;
    outline: none;
    &:hover,
    &:focus {
      outline: none;
      background: transparent;
      color: transparent;
      &:before {
        opacity: $slick-opacity-on-hover;
      }
    }
    &.slick-disabled:before {
      opacity: $slick-opacity-not-active;
    }
    &:before {
      font-family: $slick-font-family;
      font-size: 20px;
      line-height: 1;
      color: $slick-arrow-color;
      opacity: $slick-opacity-default;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  .slick-prev {
    left: -25px;
    [dir='rtl'] & {
      left: auto;
      right: -25px;
    }
    &:before {
      content: $slick-prev-character;
      [dir='rtl'] & {
        content: $slick-next-character;
      }
    }
  }

  .slick-next {
    right: -25px;
    [dir='rtl'] & {
      left: -25px;
      right: auto;
    }
    &:before {
      content: $slick-next-character;
      [dir='rtl'] & {
        content: $slick-prev-character;
      }
    }
  }

  /* Dots */

  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    position: absolute;
    bottom: -25px;
    list-style: none;
    display: block;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 100%;
    li {
      position: relative;
      display: inline-block;
      height: 20px;
      width: 20px;
      margin: 0 5px;
      padding: 0;
      cursor: pointer;
      button {
        border: 0;
        background: transparent;
        display: block;
        height: 20px;
        width: 20px;
        outline: none;
        line-height: 0px;
        font-size: 0px;
        color: transparent;
        padding: 5px;
        cursor: pointer;
        &:hover,
        &:focus {
          outline: none;
          &:before {
            opacity: $slick-opacity-on-hover;
          }
        }
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          content: $slick-dot-character;
          width: 20px;
          height: 20px;
          font-family: $slick-font-family;
          font-size: $slick-dot-size;
          line-height: 20px;
          text-align: center;
          color: $slick-dot-color;
          opacity: $slick-opacity-not-active;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      }
      &.slick-active button:before {
        color: $slick-dot-color-active;
        opacity: $slick-opacity-default;
      }
    }
  }
`;
