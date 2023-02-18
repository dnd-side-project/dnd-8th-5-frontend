import React, { useState, useEffect } from 'react';
import {
  Calendar,
  DateObject,
  getAllDatesInRange,
} from 'react-multi-date-picker';
import '../styles/calendar.css';
import type { Value } from 'react-multi-date-picker';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const CalendarPage = () => {
  const [value, setValue] = useState();
  const [isRange, setIsRange] = useState(true);
  const [dateArray, setDateArray] = useState(['']);

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
  );
};

export default CalendarPage;
