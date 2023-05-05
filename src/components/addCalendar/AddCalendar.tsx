import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import {
  NextMonthIcon,
  PrevMonthIcon,
  StyledCalendar,
} from './AddCalendar.styles';

import calendarNextMonth from '../../assets/icons/calendarNextMonth.svg';
import calendarPrevMonth from '../../assets/icons/calendarPrevMonth.svg';

import { AddCalendarType } from './AddCalendar.types';

import theme from '../../styles/theme';
import { useRecoilState } from 'recoil';
import { selectedMethodState } from '../../atoms/selectedMethodAtom';

const AddCalendar = ({ dates, selected, setSelected }: AddCalendarType) => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);

  const addTileClassName = ({ date }: { date: Date }) => {
    if (dates.indexOf(dayjs(date).format('YYYY-MM-DD')) !== -1) {
      return `valid availableDate${dayjs(date).format('YYYY-MM-DD')}`;
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
        if (selectedMethod === 'possible') {
          element.style.backgroundColor = `${theme.colors.purple06}`;
          element.style.color = `${theme.colors.gray01}`;
        }

        if (selectedMethod === 'impossible') {
          element.style.backgroundColor = `${theme.colors.orange02}`;
          element.style.color = `${theme.colors.gray01}`;
        }

        setSelected([...selected, `${dayjs(date).format('YYYY-MM-DD')} 00:00`]);
      } else {
        element.style.backgroundColor = `${theme.colors.gray01}`;
        element.style.color = `${theme.colors.purple06}`;

        element.classList.remove('selectedDay');

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
    selected.forEach((selectedDate) => {
      const element = document.querySelector(
        `.availableDate${selectedDate.slice(0, 10)}`
      ) as HTMLElement;

      if (element) {
        if (selectedMethod === 'possible') {
          element.style.color = `${theme.colors.gray01}`;
          element.style.backgroundColor = `${theme.colors.purple06}`;
        }

        if (selectedMethod === 'impossible') {
          element.style.color = `${theme.colors.gray01}`;
          element.style.backgroundColor = `${theme.colors.orange02}`;
        }
      }
    });
  }, [selected]);

  useEffect(() => {
    dates.forEach((date) => {
      const element = document.querySelector(
        `.availableDate${date}`
      ) as HTMLElement;

      if (element) {
        element.style.backgroundColor = `${theme.colors.gray01}`;
        element.style.color = `${theme.colors.purple06}`;
      }
    });
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
    />
  );
};

export default AddCalendar;
