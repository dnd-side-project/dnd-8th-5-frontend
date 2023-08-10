import styled from '@emotion/styled';
import { Calendar } from 'react-multi-date-picker';
import theme from '@/styles/theme';

export const MainContainer = styled.div``;

export const ToggleWrapper = styled.div`
  position: absolute;
  top: 123px;
  right: 34px;
`;

export const CalendarComponent = styled(Calendar)`
  .rmdp-wrapper {
    border: 1px solid var(--rmdp-secondary-calendar);
  }

  .rmdp-panel-body li {
    background-color: ${theme.colors.purple06};
  }

  .rmdp-week-day {
    color: black !important;
  }

  .rmdp-day.rmdp-deactive {
    color: var(--rmdp-secondary-calendar);
  }

  .rmdp-day.rmdp-today span {
    background-color: ${theme.colors.green01};
    color: ${theme.colors.green02};
    box-shadow: ${theme.colors.green01} -0.4px 0px 0px 3px;
  }

  .rmdp-arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    width: 10px !important;
    height: 10px !important;
  }

  .rmdp-day.rmdp-today.rmdp-range span {
    background-color: ${theme.colors.purple06};
    color: white;
    box-shadow: #dadef3 -0.4px 0px 0px 3px;
  }

  .rmdp-panel-body::-webkit-scrollbar-thumb {
    background: ${theme.colors.purple06};
  }

  .rmdp-rtl .rmdp-panel {
    border-left: unset;
    border-right: 1px solid var(--rmdp-secondary-calendar);
  }

  .rmdp-day.rmdp-selected span:not(.highlight) {
    background-color: ${theme.colors.purple06};
    color: white;
    box-shadow: ${theme.colors.purple06} -0.4px 0px 0px 3px;
  }

  @media (min-width: 860px) {
    .rmdp-arrow-container:hover {
      color: none;
      background-color: none;
    }
  }

  @media (min-width: 860px) {
    .rmdp-day:not(.rmdp-day-hidden) span:hover {
      background-color: ${theme.colors.purple06};
      box-shadow: ${theme.colors.purple06} -0.4px 0px 0px 3px;
    }
  }

  .b-deselect {
    color: var(--rmdp-deselect-calendar);
    background-color: white;
  }

  .rmdp-action-button {
    color: ${theme.colors.purple06};
  }

  .rmdp-button:not(.rmdp-action-button) {
    background-color: ${theme.colors.purple06};
  }

  @media (min-width: 860px) {
    .rmdp-button:not(.rmdp-action-button):hover {
      background-color: var(--rmdp-deselect-calendar);
      box-shadow: ${theme.colors.purple06} -0.4px 0px 0px 3px;
    }
  }

  @media (max-width: 860px) {
    .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover {
      background-color: white;
      color: black;
    }
  }

  .rmdp-day.rmdp-selected span:not(.highlight) {
    background-color: ${theme.colors.purple06} !important;
    color: white !important;
  }

  .rmdp-header-values {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rmdp-arrow-container {
    display: null;
    top: 50%;
  }

  .rmdp-header {
    position: absolute;
    left: 32px;
    top: 0px;
    width: 150px;
    height: 40px;
    ${theme.typography.semibold03}
  }

  .rmdp-week-day {
    width: 47px !important;
    height: 47px !important;
    ${theme.typography.semibold06}
  }

  .rmdp-day {
    width: 47px;
    height: 47px;
  }

  .rmdp-day span {
    ${theme.typography.regular01}
  }

  .rmdp-year-picker {
    position: absolute;
    display: flex;
    width: 412px !important;
    left: -150px;
    top: 42px;
    right: 0px;
  }

  .rmdp-month-picker,
  .rmdp-year-picker {
    background-color: #fff;
    border-radius: 5px;
    bottom: unset;
    left: unset;
    position: absolute;
    top: 50px;
    width: 300px;
    height: 200px;
    left: 20px;
    padding: 10px;
    border: 2px solid #f6f6f6;
  }

  .rmdp-shadow {
    box-shadow: 0px !important;
    display: none !important;
  }

  .rmdp-wrapper.rmdp-shadow.calendar.css-1djealw {
    display: none !important;
    box-shadow: 0 0 5px #00695c !important;
  }

  .rmdp-calendar {
    height: max-content;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px;
    top: 112px;
    position: relative;
  }

  .rmdp-day-picker {
    width: 100vw;
    flex-direction: column;
    position: absolute;
    max-width: 400px;
    top: 42px;
  }

  .rmdp-week,
  .rmdp-ym {
    justify-content: center;
    ${theme.typography.regular01}
  }

  .rmdp-range.start span {
    background-color: ${theme.colors.purple06} !important;
    color: white !important;
    box-shadow: ${theme.colors.purple06} -0.4px 0px 0px 3px !important;
  }

  .rmdp-range.end span {
    background: ${theme.colors.purple06} !important;
    color: white !important;
    box-shadow: ${theme.colors.purple06} 0px 0px 0px 3px;
  }

  .rmdp-selected {
    border-radius: 50%;
  }

  .rmdp-range {
    background-color: #dadef3;
    box-shadow: none;
    color: black;
  }

  @media (max-width: 860px) {
    .rmdp-range :hover {
      background-color: #dadef3 !important;
    }
  }
  .rmdp-wrapper.rmdp-shadow.calendar {
    box-shadow: 0 0 0px white !important;
  }

  .rmdp-top-class {
    width: 0px;
  }

  .rmdp-day.rmdp-disabled {
    pointer-events: none;
  }

  .rmdp-day.rmdp-day-hidden {
    pointer-events: none;
  }

  .rmdp-arrow-container:hover {
    background-color: white;
    box-shadow: none;
  }

  .rmdp-arrow-container:hover .rmdp-arrow {
    border: solid black !important;
    border-width: 0 2px 2px 0 !important;
  }
`;
