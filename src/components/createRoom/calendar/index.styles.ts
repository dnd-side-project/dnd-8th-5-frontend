import styled from '@emotion/styled';
import { Calendar } from 'react-multi-date-picker';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  position: relative;
  width: 308px;
  margin: 32px 0 0 0;
`;

export const CalendarComponent = styled(Calendar)`
  .rmdp-calendar > div:not(.rmdp-header) {
    width: 100%;
  }
  .rmdp-panel-body li {
    background-color: ${theme.colors.purple06};
  }

  .rmdp-week-day {
    color: ${theme.colors.gray06} !important;
    font-weight: 400 !important;
  }

  .rmdp-day.rmdp-deactive {
    color: var(--rmdp-secondary-calendar);
  }

  .rmdp-day.rmdp-today span {
    background-color: ${theme.colors.green01} !important;
    color: ${theme.colors.green02} !important;
    box-shadow: ${theme.colors.green01} -0.4px 0px 0px 3px;
  }

  .rmdp-arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    width: 10px !important;
    height: 10px !important;
  }

  .rmdp-day.rmdp-today.rmdp-range {
    background-color: #dadef3 !important;
    color: white;
    box-shadow: none;
  }

  .rmdp-day.rmdp-today.rmdp-range > span {
    border-radius: 50%;
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

  .rmdp-day:not(.rmdp-disabled):not(.rmdp-day-hidden) span:hover {
    background-color: #ffff;
    color: ${theme.colors.gray06};
  }

  .rmdp-day.rmdp-selected span:not(.highlight) {
    background-color: ${theme.colors.purple06} !important;
    color: white !important;
  }

  .rmdp-header-values {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.gray06};
    ${theme.typography.semibold02};
  }

  .rmdp-left > i {
    border-color: ${theme.colors.gray06};
  }

  .rmdp-left.disabled > i {
    border-color: ${theme.colors.gray03} !important;
  }

  .rmdp-right > i {
    border-color: ${theme.colors.gray06} !important;
  }

  .rmdp-arrow-container {
    display: null;
  }

  .rmdp-header {
    width: 150px;
    height: 40px;
  }

  .rmdp-week-day:nth-child(1) {
    color: #fd9090 !important;
  }

  .rmdp-week-day:last-child {
    color: #a1b1ff !important;
  }

  .rmdp-week-day {
    width: 44px !important;
    height: 44px !important;
    ${theme.typography.semibold06}
  }

  .rmdp-day {
    width: 44px;
    height: 44px;
    color: ${theme.colors.gray06};
  }

  .rmdp-day span {
    ${theme.typography.regular01}
  }

  .rmdp-year-picker {
    display: flex;
    width: 412px !important;
  }

  .rmdp-month-picker,
  .rmdp-year-picker {
    background-color: #fff;
    border-radius: 5px;
    bottom: unset;
    left: unset;
    width: 300px;
    height: 200px;
    padding: 10px;
    border: 2px solid #f6f6f6;
  }

  .rmdp-shadow {
    box-shadow: 0px !important;
    display: none !important;
  }

  .rmdp-calendar {
    height: max-content;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px;
    position: relative;
  }

  .rmdp-day-picker {
    margin: 16px 0 0 0;
    width: 308px;
    padding: 0;
  }

  .rmdp-day-picker > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .rmdp-week,
  .rmdp-ym {
    justify-content: center;
    ${theme.typography.regular01}
  }

  /* .rmdp-range.start {
    box-shadow: none !important;
    background: #dadef3;
  }

  .rmdp-range.start span {
    background-color: ${theme.colors.purple06} !important;
    color: white !important;
    box-shadow: none !important;
  } */

  .rmdp-range.start span {
    background: ${theme.colors.purple06} !important;
    color: white !important;
    box-shadow: ${theme.colors.purple06} 0px 0px 0px 3px;
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

  .rmdp-disabled {
    color: ${theme.colors.gray03} !important;
  }
`;
