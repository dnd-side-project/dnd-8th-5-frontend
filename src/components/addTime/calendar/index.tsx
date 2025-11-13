import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';
import dayjs from 'dayjs';

import calendarNextMonth from '@/assets/icons/calendarNextMonth.svg';
import calendarPrevMonth from '@/assets/icons/calendarPrevMonth.svg';

import { useGetAvailableTimesByOne } from '@/queries/availableTimes/useGetAvailableTimesByOne';
import { usePutAvailableTimes } from '@/queries/availableTimes/usePutAvailableTimes';
import { ROUTES } from '@/constants/ROUTES';

import {
  Wrapper,
  NextMonthIcon,
  PrevMonthIcon,
  StyledCalendar,
} from './index.styles';
import BottomButton from '@/components/commons/bottomButton';

import { AddCalendarType } from './index.types';

const Calendar = ({
  dates,
  selected,
  setSelected,
  selectedMethod,
  ...rest
}: AddCalendarType) => {
  const { roomId } = useParams() as { roomId: string };
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || '';

  const [date, setDate] = useState<Date>(new Date());

  // date: 현재 캘린더에 보이는 날짜들 (react-calendar)
  // return: class name (string)
  const addTileClassName = ({ date }: { date: Date }) => {
    // 일정 등록이 가능한 날짜인 경우
    if (dates.indexOf(dayjs(date).format('YYYY-MM-DD')) !== -1) {
      // 선택된 날짜인 경우
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
    const element = document.querySelector(
      `.availableDate${dayjs(date).format('YYYY-MM-DD')}`
    ) as HTMLElement;

    if (element) {
      if (selected.includes(`${dayjs(date).format('YYYY-MM-DD')} 00:00`)) {
        element.classList.remove('selected');
        setSelected(
          selected.filter(
            (availableDate: string) =>
              availableDate !== `${dayjs(date).format('YYYY-MM-DD')} 00:00`
          )
        );
      } else {
        element.classList.add('selected');
        setSelected([...selected, `${dayjs(date).format('YYYY-MM-DD')} 00:00`]);
      }
    }
  }, [date]);

  const { data } = useGetAvailableTimesByOne(roomId, userName);
  const { mutate, isSuccess } = usePutAvailableTimes();

  useEffect(() => {
    if (data) {
      setSelected(data.availableDateTimes);
    }
  }, [data]);

  useEffect(() => {
    setSelected([]);
  }, [selectedMethod]);

  const goToCurrent = () => {
    navigate(`${ROUTES.CURRENT}/${roomId}`);
  };

  const handleApplyClick = () => {
    if (selectedMethod === 'possible') {
      const payload = {
        name: userName,
        hasTime: false,
        availableDateTimes: [...selected],
      };

      mutate({ roomId, payload });
    }

    if (selectedMethod === 'impossible') {
      const newDates = dates.map((date) => `${date} 00:00`);
      const filteredTime = selected && _.difference(newDates, selected);

      const payload = {
        name: userName,
        hasTime: false,
        availableDateTimes: filteredTime,
      };

      mutate({ roomId, payload });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      goToCurrent();
    }
  }, [isSuccess]);

  return (
    <>
      <Wrapper>
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
          {...rest}
        />
      </Wrapper>

      <BottomButton
        onClick={handleApplyClick}
        text="등록하기"
        isActivated={true}
      />
    </>
  );
};

export default Calendar;
