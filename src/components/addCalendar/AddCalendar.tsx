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

const AddCalendar = ({
  availableDates,
  setAvailableDates,
  participants,
  currentRoomState,
}: AddCalendarType) => {
  const [date, setDate] = useState<Date>(new Date());

  const availableDatesInfo = currentRoomState.map(
    (date: {
      availableDate: string;
      availableTimeInfos: {
        time: string;
        count: number;
      }[];
    }) => ({
      date: date.availableDate,
      opacity: date.availableTimeInfos[0].count / participants.length,
    })
  );

  const addTileClassName = ({ date }: { date: Date }) => {
    if (
      availableDatesInfo.find(
        ({ date }: { date: string }) =>
          date === dayjs(date).format('YYYY-MM-DD')
      )
    ) {
      return `valid availableDate${dayjs(date).format('YYYY-MM-DD')}`;
    } else {
      return null;
    }
  };

  const updateColors = () => {
    availableDatesInfo.forEach(({ date }: { date: string }) => {
      const element = document.querySelector(
        `.availableDate${date}`
      ) as HTMLElement;

      if (element != null) {
        element.style.color = `${theme.colors.purple06}`;
      }
    });

    availableDates.forEach((availableDate: string) => {
      const element = document.querySelector(
        `.availableDate${availableDate}`
      ) as HTMLElement;

      if (element != null) {
        element.style.color = `${theme.colors.gray01}`;
        element.style.backgroundColor = `${theme.colors.purple06}`;
      }
    });
  };

  useEffect(() => {
    updateColors();
  }, []);

  useEffect(() => {
    const index = availableDates.indexOf(dayjs(date).format('YYYY-MM-DD'));
    const element = document.querySelector(
      `.availableDate${dayjs(date).format('YYYY-MM-DD')}`
    ) as HTMLElement;

    if (element) {
      if (index !== -1) {
        element.style.backgroundColor = `${theme.colors.gray01}`;
        element.style.color = `${theme.colors.purple06}`;

        setAvailableDates(
          availableDates.filter(
            (availableDate: string) =>
              availableDate !== dayjs(date).format('YYYY-MM-DD').toString()
          )
        );
      } else {
        element.style.backgroundColor = `${theme.colors.purple06}`;
        element.style.color = `${theme.colors.gray01}`;

        setAvailableDates([
          ...availableDates,
          dayjs(date).format('YYYY-MM-DD'),
        ]);
      }
    }
  }, [date]);

  return (
    <StyledCalendar
      onChange={setDate}
      value={date}
      onActiveStartDateChange={updateColors}
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
