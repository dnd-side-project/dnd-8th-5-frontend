import styled from '@emotion/styled';
import { Calendar } from 'react-calendar';

export const StyledCalendar = styled(Calendar)`
  width: 336px;
  background: white;
  border: 1px solid #dbdbdb;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .react-calendar__viewContainer {
    width: 308px;
    padding-bottom: 35px;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .react-calendar button {
    border: none;
  }

  .react-calendar .availableDate {
    color: white;
    background-color: rgba(106, 123, 255, 0.5);
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  /* 헤더 */
  .react-calendar__navigation {
    width: 152px;
    height: 64px;

    display: flex;
    font-weight: 600;
    font-size: 18px;
    color: #545454;
  }

  /* 헤더 내 요소들 */
  .react-calendar__navigation button {
    background: none;
    border: none;
  }
  .react-calendar__navigation button:disabled {
    color: #545454;
  }

  /* 요일 표시 */
  .react-calendar__month-view__weekdays {
    height: 35px;

    color: #545454;
    font-size: 14px;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 요일 아래 뜨는 점선 지우기 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }

  .react-calendar__month-view__weekdays__weekday {
    width: 100%;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
    border: 1px solid hotpink;
  }

  /* 일 블럭 Wrapper */
  .react-calendar__month-view__days {
    row-gap: 6px;
  }

  /* 일 블럭 */
  .react-calendar__month-view__days__day {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
  }

  /* 주말 */
  .react-calendar__month-view__days__day--weekend {
    color: #b6b6b6;
  }

  /* 이전 달, 다음 달 날짜 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: blue;
    cursor: none;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile {
    background: none;
    text-align: center;

    width: 44px;
    height: 44px;
    color: #b6b6b6;
    font-size: 16px;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }

  /* 클릭해도 */
  .react-calendar__tile--now {
    color: #59ce8f;
    background: #e6f8ee;
  }

  .react-calendar__tile--active {
    color: white;
    background: #6a7bff;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    color: white;
    background: #6a7bff;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;

export const PrevMonthIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const NextMonthIcon = styled.img`
  width: 24px;
  height: 24px;
`;
