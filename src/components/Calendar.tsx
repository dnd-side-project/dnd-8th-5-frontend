import React, { useState, useEffect, useCallback } from 'react';
import {
  Calendar,
  DateObject,
  getAllDatesInRange,
} from 'react-multi-date-picker';
import '../styles/calendar.css';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const CalendarPage = () => {
  const [value, setValue] = useState();
  const [isRange, setIsRange] = useState(false);
  const [dateArray, setDateArray] = useState(['']);
  const [toggle, setToggle] = useState(false);

  const ko = {
    name: 'ko',
    months: [
      ['1월', '1월'],
      ['2월', '2월'],
      ['3월', '3월'],
      ['4월', '4월'],
      ['5월', '5월'],
      ['6월', '6월'],
      ['7월', '7월'],
      ['8월', '8월'],
      ['9월', '9월'],
      ['10월', '10월'],
      ['11월', '11월'],
      ['12월', '12월'],
    ],
    weekDays: [
      ['토요일', '토'],
      ['일요일', '일'],
      ['월요일', '월'],
      ['화요일', '화'],
      ['수요일', '수'],
      ['목요일', '목'],
      ['금요일', '금'],
    ],
    digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    meridiems: [
      ['오전', '오전'],
      ['오후', '오후'],
    ],
  };

  const clickedToggle = useCallback(() => {
    setIsRange((prev) => !prev);
  }, [isRange]);

  const handleDatesRangeMake = (dates: DateObject[] | Date[]) => {
    if (dates.length < 2) return;
    const dateArray = [];
    for (const a of dates) {
      const date = new Date(String(a));
      dateArray.push(
        `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      );
    }
    return dateArray;
  };

  return (
    <MainContainer>
      <ToggleBtn onClick={clickedToggle} toggle={isRange}>
        <ToggleText>기간</ToggleText>
        <ToggleText>하나씩</ToggleText>
        <Circle toggle={isRange}>{isRange ? '기간' : '하나씩'}</Circle>
      </ToggleBtn>
      <Calendar
        value={value}
        onChange={(dataObjects) => {
          if (isRange) {
            const allDates = getAllDatesInRange(Object(dataObjects), true);
            const dateArray = handleDatesRangeMake(allDates);
          } else {
            if (Object(dataObjects).length !== 0) {
              for (const key in Object(dataObjects)) {
                const year = Object(dataObjects)[key].year;
                const month = Object(dataObjects)[key].month;
                const day = Object(dataObjects)[key].day;
                const date = `${String(year)}-${String(month)}-${String(day)}`;
                const newArr = [...dateArray, date];
                setDateArray(newArr);
              }
            }
          }
        }}
        locale={ko}
        multiple={true}
        range={isRange}
        className="calendar"
        rangeHover
        digits={[]}
        minDate={new Date()}
        hideYear={true}
        buttons={true}
      />
    </MainContainer>
  );
};

const MainContainer = styled.div``;

const ToggleBtn = styled.button<{ toggle: boolean }>`
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

const ToggleText = styled.div`
  color: #b6b6b6;
  width: 50px;
  font-size: 14px;
`;

const Circle = styled.div<{ toggle: boolean }>`
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

export default CalendarPage;
