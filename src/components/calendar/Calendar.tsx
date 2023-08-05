import { useCallback, useEffect, useState } from 'react';
import { DateObject, getAllDatesInRange } from 'react-multi-date-picker';
import {
  CalendarComponent,
  MainContainer,
  ToggleWrapper,
} from './Calendar.styles';
import Toggle from '../toggle/Toggle';

interface Calendar {
  dates: string[];
  setDates: React.Dispatch<React.SetStateAction<string[]>>;
}

const Calendar = ({ dates, setDates }: Calendar) => {
  const [isRange, setIsRange] = useState<boolean>(true);
  const [value, setValue] = useState();

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
      setDates([]);
      return;
    }
    const newDateArray = [];
    for (const date of dates) {
      const newDate = new Date(String(date));
      const year = newDate.getFullYear();
      const month = newDate.getMonth() + 1;
      const day = newDate.getDate();
      const format =
        year +
        '-' +
        ('00' + month.toString()).slice(-2) +
        '-' +
        ('00' + day.toString()).slice(-2);

      newDateArray.push(format);
    }
    setDates(newDateArray);
  };

  useEffect(() => {
    setDates([]);
    setValue(undefined);
  }, [isRange]);

  const handleChangeDate = useCallback(
    (dataObjects: any) => {
      if (isRange) {
        setValue(dataObjects);
        const allDates = getAllDatesInRange(Object(dataObjects), true);
        makeDatesRange(allDates);
      } else {
        const newArr = [];
        for (const key in Object(dataObjects)) {
          setValue(dataObjects);
          const year = Object(dataObjects)[key].year;
          const month = Object(dataObjects)[key].month;
          const day = Object(dataObjects)[key].day;
          const format =
            year +
            '-' +
            ('00' + month.toString()).slice(-2) +
            '-' +
            ('00' + day.toString()).slice(-2);
          newArr.push(format);
          const newDateArr = Array.from(new Set(newArr));
          newDateArr.sort((a, b) => {
            return new Date(a).getTime() - new Date(b).getTime();
          });
          setDates(newDateArr);
        }
      }
    },
    [isRange, dates]
  );

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
        value={value}
        onChange={(dataObjects) => {
          handleChangeDate(dataObjects);
        }}
        locale={ko}
        multiple={true}
        range={isRange}
        className="calendar"
        digits={[]}
        minDate={new Date()}
        hideYear={true}
        buttons={true}
        rangeHover={false}
      />
    </MainContainer>
  );
};

export default Calendar;
