import dayjs from 'dayjs';
import { useEffect } from 'react';

import {
  NextMonthIcon,
  PrevMonthIcon,
  StyledCalendar,
} from './CurrentCalendar.styles';
import calendarNextMonth from '../../assets/icons/calendarNextMonth.svg';
import calendarPrevMonth from '../../assets/icons/calendarPrevMonth.svg';

import theme from '../../styles/theme';

const CurrentCalendar = ({
  participants,
  availableDateTimes,
}: {
  participants: string[];
  availableDateTimes: any;
}) => {
  const availableDatesInfo = availableDateTimes.map((date: any) => ({
    date: date.availableDate,
    opacity: date.availableTimeInfos.count / participants.length,
  }));

  const addTileClassName = ({ date }: { date: Date }) => {
    if (
      availableDatesInfo.find(
        (availableDate: { date: string; opacity: number }) =>
          availableDate.date === dayjs(date).format('YYYY-MM-DD')
      )
    ) {
      return `availableDate${dayjs(date).format('YYYY-MM-DD')}`;
    } else {
      return null;
    }
  };

  const updateColors = () => {
    availableDatesInfo.forEach(
      ({ date, opacity }: { date: string; opacity: number }) => {
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
      }
    );
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
      formatMonthYear={(_, date) => dayjs(date).format('M???')}
    />
  );
};

export default CurrentCalendar;
