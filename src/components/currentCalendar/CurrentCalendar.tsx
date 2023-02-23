import moment from 'moment';
import { useEffect } from 'react';

import {
  NextMonthIcon,
  PrevMonthIcon,
  StyledCalendar,
} from './CurrentCalendar.styles';
import calendarNextMonth from '../../assets/icons/calendarNextMonth.svg';
import calendarPrevMonth from '../../assets/icons/calendarPrevMonth.svg';

import currentTime from '../../assets/data/currentTime.json';
import room from '../../assets/data/room.json';

const CurrentCalendar = () => {
  const headCount = room.headCount;

  const availableDates = currentTime.availableDateTimes.map((date) => ({
    date: date.availableDate,
    opacity: date.availableTimeInfos.count / headCount,
  }));

  const tileClassName = ({ date }: { date: Date }) => {
    if (
      availableDates.find(
        (availableDate) =>
          availableDate.date === moment(date).format('YYYY-MM-DD')
      )
    ) {
      return `availableDate${moment(date).format('YYYY-MM-DD')}`;
    } else {
      return null;
    }
  };

  const cha = () => {
    availableDates.forEach((date) => {
      const element = document.querySelector(
        `.availableDate${date.date}`
      ) as HTMLElement;

      if (date.opacity != 0) {
        element.style.backgroundColor = `rgba(106, 123, 255, ${date.opacity})`;
        element.style.color = '#ffffff';
      } else {
        element.style.color = '#6A7BFF';
      }
    });
  };

  useEffect(() => {
    cha();
  }, []);

  return (
    <StyledCalendar
      tileClassName={tileClassName}
      next2Label={null}
      prev2Label={null}
      nextLabel={<NextMonthIcon src={calendarNextMonth} />}
      prevLabel={<PrevMonthIcon src={calendarPrevMonth} />}
      showNeighboringMonth={false}
      minDetail="month"
      maxDetail="month"
      calendarType="US"
      formatDay={(_, date) => moment(date).format('D')}
      formatMonthYear={(_, date) => moment(date).format('M월')}
    />
  );
};

export default CurrentCalendar;
