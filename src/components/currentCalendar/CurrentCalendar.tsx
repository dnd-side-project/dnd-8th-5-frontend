import moment from 'moment';
import { useState } from 'react';
import { Calendar } from 'react-calendar';
import './Calendar.css';

import calendarNextMonth from '../../assets/icons/calendarNextMonth.svg';
import calendarPrevMonth from '../../assets/icons/calendarPrevMonth.svg';
import styled from '@emotion/styled';

const CurrentCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Calendar
      value={value}
      onChange={onChange}
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
