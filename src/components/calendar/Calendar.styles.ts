import styled from '@emotion/styled';
import { Calendar } from 'react-multi-date-picker';
import theme from '../../styles/theme';

export const MainContainer = styled.div``;

export const CalendarComponent = styled(Calendar)`
  :root {
    --rmdp-primary-calendar: #6a7bff;
    --rmdp-secondary-calendar: #00796b;
    --rmdp-shadow-calendar: #26a69a;
    --rmdp-today-calendar: #cef0dd;
    --rmdp-hover-calendar: #6a7bff;
    --rmdp-deselect-calendar: #00695c;
  }

  .calendar .rmdp-wrapper {
    border: 1px solid var(--rmdp-secondary-calendar);
  }

  .calendar .rmdp-panel-body li {
    background-color: var(--rmdp-primary-calendar);
  }

  .calendar .rmdp-week-day {
    color: black;
  }

  .calendar .rmdp-day.rmdp-deactive {
    color: var(--rmdp-secondary-calendar);
  }

  .calendar .rmdp-day.rmdp-today span {
    background-color: var(--rmdp-today-calendar);
    color: #59ce8f;
    box-shadow: #cef0dd -0.4px 0px 0px 3px;
  }

  .rmdp-arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    width: 13px !important;
    height: 13px !important;
  }

  .calendar .rmdp-day.rmdp-today.rmdp-range span {
    background-color: var(--rmdp-primary-calendar);
    color: white;
    box-shadow: var(--rmdp-primary-calendar) -0.4px 0px 0px 3px;
  }

  .calendar .rmdp-panel-body::-webkit-scrollbar-thumb {
    background: var(--rmdp-primary-calendar);
  }

  .calendar .rmdp-rtl .rmdp-panel {
    border-left: unset;
    border-right: 1px solid var(--rmdp-secondary-calendar);
  }

  .calendar .rmdp-day.rmdp-selected span:not(.highlight) {
    background-color: var(--rmdp-primary-calendar);
    color: white;
    box-shadow: var(--rmdp-primary-calendar) -0.4px 0px 0px 2.5px;
    /* box-shadow: #cef0dd -0.4px 0px 0px 3px; */
  }

  .calendar .rmdp-arrow-container:hover {
    color: none;
    background-color: none;
  }

  .calendar .rmdp-day:not(.rmdp-day-hidden) span:hover {
    background-color: var(--rmdp-hover-calendar);
    box-shadow: var(--rmdp-primary-calendar) -0.4px 0px 0px 2.5px;
  }

  .calendar .b-deselect {
    color: var(--rmdp-deselect-calendar);
    background-color: white;
  }

  .calendar .rmdp-action-button {
    color: var(--rmdp-primary-calendar);
  }

  .calendar .rmdp-button:not(.rmdp-action-button) {
    background-color: var(--rmdp-primary-calendar);
  }

  .calendar .rmdp-button:not(.rmdp-action-button):hover {
    background-color: var(--rmdp-deselect-calendar);
    box-shadow: var(--rmdp-primary-calendar) -0.4px 0px 0px 3px;
  }

  .rmdp-header-values {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rmdp-arrow-container {
    display: null;
    top: 42%;
  }

  .rmdp-calendar {
    position: absolute;
    top: 158px;
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

  .rmdp-day-picker {
    position: absolute;
    width: 375px !important;
    left: -150px;
    top: 42px;
    right: 0px;
  }

  .rmdp-year-picker {
    position: absolute;
    display: flex;
    width: 375px !important;
    left: -150px;
    top: 42px;
    right: 0px;
    /* bottom: 0px !important; */
  }

  .rmdp-month-picker,
  .rmdp-year-picker {
    background-color: #fff;
    border-radius: 5px;
    bottom: unset;
    left: unset;
    position: absolute;
    /* right: 2px; */
    top: 50px;
    width: 310px;
    height: 310px;
    left: -120px;
    padding: 10px;
  }

  .rmdp-shadow {
    box-shadow: 0 0 0px white;
  }

  .rmdp-calendar {
    height: max-content;
    width: 308px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 4px; */
  }

  .rmdp-day-picker {
    width: 308px;
    flex-direction: column;
  }

  .rmdp-week,
  .rmdp-ym {
    justify-content: center;
    ${theme.typography.regular01}
  }

  .rmdp-range.start span {
    background-color: var(--rmdp-primary-calendar);
    color: white;
    box-shadow: var(--rmdp-primary-calendar) -0.4px 0px 0px 3px;
  }

  .rmdp-range.end span {
    background-color: var(--rmdp-primary-calendar);
    color: white;
    box-shadow: var(--rmdp-primary-calendar) 0px 0px 0px 3px;
  }

  .rmdp-selected {
    border-radius: 50%;
    /* background-color: var(--rmdp-primary-calendar); */
  }

  .rmdp-range {
    background-color: #dadeff;
    box-shadow: none;
    color: black;
  }
`;
