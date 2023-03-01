import { useState } from 'react';
import { DateObject, getAllDatesInRange } from 'react-multi-date-picker';
import { CalendarComponent, MainContainer } from './Calendar.styles';
import './calendar.css';
import Checkbox from '../checkbox/CheckBox';
import Toggle from '../toggle/Toggle';
import styled from '@emotion/styled';

interface Calendar {
  dates: string[];
  setDates: React.Dispatch<React.SetStateAction<string[]>>;
}

const Calendar = ({ dates, setDates }: Calendar) => {
  const [isRange, setIsRange] = useState<boolean>(false);
  const [dateArray, setDateArray] = useState<string[]>([]);

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

  const makeDatesRange = (dates: DateObject[] | Date[]) => {
    if (dates.length < 2) {
      return;
    }
    const newDateArray = [];
    for (const date of dates) {
      const newDate = new Date(String(date));
      newDateArray.push(
        `${newDate.getFullYear()}-${
          newDate.getMonth() + 1
        }-${newDate.getDate()}`
      );
    }
    setDates(newDateArray);
    console.log('newDateArray', newDateArray);
  };

  return (
    <MainContainer>
      <ToggleWrapper>
        <Toggle
          text={['기간', '하나씩']}
          toggle={isRange}
          setData={setIsRange}
        />
      </ToggleWrapper>
      <CalendarComponent
        onChange={(dataObjects) => {
          if (isRange) {
            const allDates = getAllDatesInRange(Object(dataObjects), true);
            makeDatesRange(allDates);
          } else {
            if (Object(dataObjects).length !== 0) {
              for (const key in Object(dataObjects)) {
                const year = Object(dataObjects)[key].year;
                const month = Object(dataObjects)[key].month;
                const day = Object(dataObjects)[key].day;
                const date = `${String(year)}-${String(month)}-${String(day)}`;
                const newArr = [...dates, date];
                const newDateArr = Array.from(new Set(newArr));
                setDates(newDateArr);
              }
            }
          }
        }}
        locale={ko}
        multiple={true}
        range={isRange}
        className="calendar"
        digits={[]}
        minDate={new Date()}
        hideYear={true}
        buttons={true}
      />
    </MainContainer>
  );
};

export const ToggleWrapper = styled.div`
  position: absolute;
  top: 168px;
  right: 34px;
`;

export default Calendar;
