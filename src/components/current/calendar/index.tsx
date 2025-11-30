import { useEffect, useMemo } from 'react';
import dayjs from 'dayjs';

import { StyledCalendar } from './index.styles';
import theme from '@/styles/theme';

import {
  AvailableDateTimesTypes,
  AvailableDateTimeTypes,
} from '@/types/current';
import { CalendarProps } from 'react-calendar';
import { Participant } from '@/types/roomInfo';
import IconChevronRight from './IconChevronRight';
import IconChevronLeft from './IconChevronLeft';

interface CurrentCalendarTypes extends CalendarProps {
  timeInfo?: AvailableDateTimesTypes;
  participants: Participant[];
}

const Calendar = ({
  timeInfo,
  participants,
  ...rest
}: CurrentCalendarTypes) => {
  const availableDatesInfo = timeInfo?.availableDateTimes?.map(
    (date: AvailableDateTimeTypes) => ({
      date: date.availableDate,
      opacity: date.availableTimeInfos[0].count / participants.length,
    })
  );

  const { minDate, maxDate } = useMemo(() => {
    if (!timeInfo?.availableDateTimes?.length) {
      return { minDate: undefined, maxDate: undefined };
    }

    const sorted = [...timeInfo.availableDateTimes].sort((a, b) =>
      a.availableDate.localeCompare(b.availableDate)
    );

    const first = dayjs(sorted[0].availableDate);
    const last = dayjs(sorted[sorted.length - 1].availableDate);

    const min = first.startOf('month').toDate();
    const max = last.endOf('month').toDate();

    return { minDate: min, maxDate: max };
  }, [timeInfo]);

  const addTileClassName = ({ date }: { date: Date }) => {
    if (
      availableDatesInfo?.find(
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
    availableDatesInfo?.forEach(
      ({ date, opacity }: { date: string; opacity: number }) => {
        const element = document.querySelector(
          `.availableDate${date}`
        ) as HTMLElement;

        if (element) {
          if (opacity) {
            element.style.backgroundColor = `rgba(106, 123, 255, ${opacity})`;
            element.style.color = `${theme.colors.gray01}`;
          } else {
            element.style.backgroundColor = `${theme.colors.gray01}`;
            element.style.color = `${theme.colors.purple06}`;
          }
        }
      }
    );
  };

  useEffect(() => {
    updateColors();
  }, [availableDatesInfo]);

  return (
    <StyledCalendar
      onActiveStartDateChange={updateColors}
      tileClassName={addTileClassName}
      next2Label={null}
      prev2Label={null}
      nextLabel={<IconChevronRight fill={theme.colors.gray05} />}
      prevLabel={<IconChevronLeft fill={theme.colors.gray05} />}
      showNeighboringMonth={false}
      minDetail="month"
      maxDetail="month"
      calendarType="US"
      formatDay={(_, date) => dayjs(date).format('D')}
      formatMonthYear={(_, date) => dayjs(date).format('M월')}
      minDate={minDate}
      maxDate={maxDate}
      {...rest}
    />
  );
};

export default Calendar;
