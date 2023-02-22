import moment from 'moment';
import { Calendar } from 'react-calendar';
import './Calendar.css';

import calendarNextMonth from '../../assets/icons/calendarNextMonth.svg';
import calendarPrevMonth from '../../assets/icons/calendarPrevMonth.svg';
import styled from '@emotion/styled';

import currentTime from '../../assets/data/currentTime.json';
import room from '../../assets/data/room.json';

const CurrentCalendar = () => {
  const headCount = room.headCount;

  const availableDates = currentTime.availableDateTimes.map((date) => ({
    date: date.availableDate,
    opacity: date.availableTimeInfos.count / headCount,
  }));

  console.log(availableDates);

  const colorDates: any = ({ date }: any) => {
    if (
      availableDates.find(
        (availableDate) =>
          availableDate.date === moment(date).format('YYYY-MM-DD')
      )
    ) {
      return `availableDate ${moment(date).format('YYYY-MM-DD')}`;
    }
  };

  return (
    <Calendar
      tileClassName={colorDates}
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

const PrevMonthIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const NextMonthIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export default CurrentCalendar;
