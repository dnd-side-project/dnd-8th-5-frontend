import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';
import dayjs from 'dayjs';

import calendarNextMonth from '../../assets/icons/calendarNextMonth.svg';
import calendarPrevMonth from '../../assets/icons/calendarPrevMonth.svg';

import { useGetAvailableTimesByOne } from '../../queries/availableTimes/useGetAvailableTimesByOne';
import { usePutAvailableTimes } from '../../queries/availableTimes/usePutAvailableTimes';
import { ROUTES } from '../../constants/ROUTES';

import {
  Wrapper,
  NextMonthIcon,
  PrevMonthIcon,
  StyledCalendar,
} from './AddCalendar.styles';
import BottomButton from '../bottomButton/BottomButton';

import { AddCalendarType } from './AddCalendar.types';

const AddCalendar = ({
  dates,
  selected,
  setSelected,
  selectedMethod,
}: AddCalendarType) => {
  const { roomUUID } = useParams() as { roomUUID: string };
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName') || '';

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

  const { data } = useGetAvailableTimesByOne(roomUUID, userName);
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
    navigate(`${ROUTES.CURRENT}/${roomUUID}`);
  };

  const handleApplyClick = () => {
    if (selectedMethod === 'possible') {
      const payload = {
        name: userName,
        hasTime: false,
        availableDateTimes: [...selected],
      };

      mutate({ roomUUID, payload });
    }

    if (selectedMethod === 'impossible') {
      const newDates = dates.map((date) => `${date} 00:00`);
      const filteredTime = selected && _.difference(newDates, selected);

      const payload = {
        name: userName,
        hasTime: false,
        availableDateTimes: filteredTime,
      };

      mutate({ roomUUID, payload });
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

export default AddCalendar;
