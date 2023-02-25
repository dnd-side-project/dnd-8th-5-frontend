import styled from '@emotion/styled';
import Slider from 'react-slick';

export const MainContainer = styled.div`
  display: flex;
  width: 201px;
  overflow: hidden;
  height: 100%;
  touch-action: none;
`;

export const TimeText = styled.div`
  font-size: 16px;
`;

export const TextContainer = styled.div`
  width: 100px;
  padding-top: 10px;
  display: flex;
  align-items: center;
`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    background: $c1;
    color: white;
    padding: 10px 0 3px 0;
    font-size: 16px;
    font-family: 'Arial', 'Helvetica';
    text-align: center;
  }
  .slick-list {
    width: 60px;
    height: 300px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }

  .slick-slide {
    color: grey;
  }
  .slick-active {
    color: grey;
  }
  .slick-current {
    color: ${(props) => props.theme.colors.purple5};
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