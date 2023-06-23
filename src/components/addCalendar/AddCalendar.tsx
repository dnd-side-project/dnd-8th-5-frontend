import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import calendarNextMonth from '../../assets/icons/calendarNextMonth.svg';
import calendarPrevMonth from '../../assets/icons/calendarPrevMonth.svg';

import { AddCalendarType } from './AddCalendar.types';

import {
  NextMonthIcon,
  PrevMonthIcon,
  StyledCalendar,
} from './AddCalendar.styles';

const AddCalendar = ({
  dates,
  selected,
  setSelected,
  selectedMethod,
  previousSelectedTimes,
}: AddCalendarType) => {
  const [date, setDate] = useState<Date>(new Date());

  const addTileClassName = ({ date }: { date: Date }) => {
    if (dates.indexOf(dayjs(date).format('YYYY-MM-DD')) !== -1) {
      if (selected.indexOf(dayjs(date).format('YYYY-MM-DD 00:00')) !== -1) {
        return `selected valid availableDate${dayjs(date).format(
          'YYYY-MM-DD'
        )}`;
      } else {
        return `valid availableDate${dayjs(date).format('YYYY-MM-DD')}`;
      }
    } else {
      return null;
    }
  };

  useEffect(() => {
    const index = selected.indexOf(`${dayjs(date).format('YYYY-MM-DD')} 00:00`);

    const element = document.querySelector(
      `.availableDate${dayjs(date).format('YYYY-MM-DD')}`
    ) as HTMLElement;

    if (element) {
      if (index === -1) {
        element.classList.add('selected');
        setSelected([...selected, `${dayjs(date).format('YYYY-MM-DD')} 00:00`]);
      } else {
        element.classList.remove('selected');
        setSelected(
          selected.filter(
            (availableDate: string) =>
              availableDate !== `${dayjs(date).format('YYYY-MM-DD')} 00:00`
          )
        );
      }
    }
  }, [date]);

  useEffect(() => {
    setSelected([]);
  }, [selectedMethod]);

  return (
    <StyledCalendar
      value={date}
      onChange={setDate}
      tileClassName={addTileClassName}
      next2Label={null}
      prev2Label={null}
      nextLabel={<NextMonthIcon src={calendarNextMonth} />}
      prevLabel={<PrevMonthIcon src={calendarPrevMonth} />}
      showNeighboringMonth={false}
      minDetail="month"
      maxDetail="month"
      calendarType="US"
      formatDay={(_, date) => dayjs(date).format('D')}
      formatMonthYear={(_, date) => dayjs(date).format('M월')}
      selectedMethod={selectedMethod}
    />
  );
};

export default AddCalendar;
