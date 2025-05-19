import { Dispatch, SetStateAction, useState } from 'react';
import { DateObject, getAllDatesInRange } from 'react-multi-date-picker';
import { CalendarComponent, Wrapper } from './index.styles';
import Toggle from '../toggle';
import { useRecoilState } from 'recoil';
import { createRoomAtom } from '@/atoms/createRoomAtom';

interface Calendar {
  setMonth: Dispatch<SetStateAction<string>>;
}

const Calendar = ({ setMonth }: Calendar) => {
  const [recoilRoom, setRecoilRoom] = useRecoilState(createRoomAtom);
  const [isRange, setIsRange] = useState<boolean>(
    recoilRoom.isRangeSelect ?? false
  );

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
    const newDateArray: string[] = [];
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
    setRecoilRoom((prev) => ({ ...prev, dates: newDateArray }));
  };

  const handleChangeDate = (dataObjects: DateObject | DateObject[] | null) => {
    if (!dataObjects) return;

    if (isRange) {
      const allDates = getAllDatesInRange(Object(dataObjects), true);
      makeDatesRange(allDates);
    } else {
      const newArr = [];
      for (const key in Object(dataObjects)) {
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
        setRecoilRoom((prev) => ({ ...prev, dates: newDateArr }));
      }
    }
  };

  return (
    <Wrapper>
      <Toggle text={['기간', '하나씩']} toggle={isRange} setData={setIsRange} />

      <CalendarComponent
        value={recoilRoom.dates}
        onChange={(dataObjects: DateObject | DateObject[] | null) => {
          handleChangeDate(dataObjects);
        }}
        onMonthChange={(dataObjects) => {
          setMonth(Object(dataObjects).month.name);
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
    </Wrapper>
  );
};

export default Calendar;
