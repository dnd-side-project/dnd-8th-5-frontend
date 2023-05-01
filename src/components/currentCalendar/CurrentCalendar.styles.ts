// import styled from '@emotion/styled';
// import { Calendar } from 'react-calendar';
// import theme from '../../styles/theme';

// export const StyledCalendar = styled(Calendar)`
//   width: 336px;
//   margin-top: 16px;

//   background: ${theme.colors.gray01};
//   border: 1px solid ${theme.colors.gray03};
//   border-radius: 10px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .react-calendar__viewContainer {
//     width: 308px;
//     padding-bottom: 35px;
//   }

//   .react-calendar,
//   .react-calendar *,
//   .react-calendar *:before,
//   .react-calendar *:after {
//     -moz-box-sizing: border-box;
//     -webkit-box-sizing: border-box;
//     box-sizing: border-box;
//   }

//   .react-calendar button {
//     border: none;
//   }

//   .react-calendar .availableDate {
//     color: white;
//     background-color: rgba(106, 123, 255, 0.5);
//   }

//   .react-calendar button:enabled:hover {
//     /* cursor: default; */
//   }

//   /* 헤더 */
//   .react-calendar__navigation {
//     width: 152px;
//     height: 64px;

//     display: flex;
//     color: ${theme.colors.gray06};
//     ${theme.typography.semibold03};
//   }

//   /* 헤더 내 요소들 */
//   .react-calendar__navigation button {
//     background: none;
//     border: none;
//   }
//   .react-calendar__navigation button:disabled {
//     color: ${theme.colors.gray06};
//   }

//   /* 요일 표시 */
//   .react-calendar__month-view__weekdays {
//     height: 35px;

//     text-align: center;
//     color: ${theme.colors.gray06};
//     ${theme.typography.medium04};

//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   /* 요일 아래 뜨는 점선 지우기 */
//   .react-calendar__month-view__weekdays abbr {
//     text-decoration: none;
//   }

//   .react-calendar__month-view__weekdays__weekday {
//     width: 100%;
//   }

//   /* 일 블럭 Wrapper */
//   .react-calendar__month-view__days {
//     row-gap: 6px;
//   }

//   /* 일 블럭 */
//   .react-calendar__month-view__days__day {
//     width: 44px;
//     height: 44px;
//     border: none;
//     border-radius: 50%;
//     cursor: default;

//     &.valid {
//       cursor: pointer;
//     }
//   }

//   /* 주말 */
//   .react-calendar__month-view__days__day--weekend {
//     color: ${theme.colors.gray04};
//   }

//   /* 이전 달, 다음 달 날짜 */
//   .react-calendar__month-view__days__day--neighboringMonth {
//     color: blue;
//     cursor: none;
//   }

//   .react-calendar__tile {
//     background: none;
//     text-align: center;

//     width: 44px;
//     height: 44px;
//     color: ${theme.colors.gray04};
//     ${theme.typography.regular01};
//   }

//   /* 오늘 날짜 */
//   .react-calendar__tile--now {
//     color: #59ce8f;
//     background: #e6f8ee;
//   }
// `;

// export const PrevMonthIcon = styled.img`
//   width: 24px;
//   height: 24px;
//   cursor: pointer;
// `;

// export const NextMonthIcon = styled.img`
//   width: 24px;
//   height: 24px;
//   cursor: pointer;
// `;
