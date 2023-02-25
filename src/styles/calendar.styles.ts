import styled from '@emotion/styled';
import { Calendar } from 'react-multi-date-picker';
import { css } from '@emotion/react';

export const MainContainer = styled.div``;

export const ToggleBtn = styled.button<{ toggle: boolean }>`
  width: 100px;
  height: 26px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: #f6f6f6;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

export const ToggleText = styled.div`
  color: #b6b6b6;
  width: 50px;
  font-size: 14px;
`;

export const Circle = styled.div<{ toggle: boolean }>`
  color: #6a7bff;
  background-color: white;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  box-shadow: 0px 0px 14.34px 0px #6a7bff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    !props.toggle &&
    css`
      transform: translate(50px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

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

  .calendar .rmdp-arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    margin-top: 7px;
    margin-left: 1px;
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
    background-color: var(--rmdp-primary-calendar);
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

  .rmdp-header {
    height: 50px;
    width: 150px;
  }

  .rmdp-header-value {
    margin-top: 20px;
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
