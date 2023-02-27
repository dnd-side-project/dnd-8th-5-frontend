import dayjs from 'dayjs';
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
import theme from '../../styles/theme';

const CurrentCalendar = () => {
  const headCount = room.headCount;

  const availableDatesInfo = currentTime.availableDateTimes.map((date) => ({
    date: date.availableDate,
    opacity: date.availableTimeInfos.count / headCount,
  }));

  const addTileClassName = ({ date }: { date: Date }) => {
    if (
      availableDatesInfo.find(
        (availableDate) =>
          availableDate.date === dayjs(date).format('YYYY-MM-DD')
      )
    ) {
      return `availableDate${dayjs(date).format('YYYY-MM-DD')}`;
    } else {
      return null;
    }
  };

  const updateColors = () => {
    availableDatesInfo.forEach(({ date, opacity }) => {
      const element = document.querySelector(
        `.availableDate${date}`
      ) as HTMLElement;

      if (element != null) {
        if (opacity != 0) {
          element.style.backgroundColor = `rgba(106, 123, 255, ${opacity})`;
          element.style.color = `${theme.colors.gray01}`;
        } else {
          element.style.color = `${theme.colors.purple06}`;
        }
      }
    });
  };

  useEffect(() => {
    updateColors();
  }, []);

  return (
    <StyledCalendar
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

export default CurrentCalendar;
