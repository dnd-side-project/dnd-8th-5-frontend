import { useEffect, useState } from 'react';
import theme from '../../styles/theme';
import { getRange } from '../../utils/getRange';
import { getTimeArray } from '../../utils/getTimeArray';
import {
  Blank,
  Bottom,
  Date,
  DateWrapper,
  Select,
  SelectWrapper,
  Time,
  TimeWrapper,
  Top,
  Wrapper,
} from './AddTable.styles';
import { AddTableType } from './AddTable.types';

import room from '../../assets/data/room.json';

const AddTable = ({
  selectedMethod,
  tablePage,
  validDateChunks,
  availableTimes,
  setAvailableTimes,
}: AddTableType) => {
  const { startTime, endTime } = room;

  const times = getRange(
    parseInt(startTime.slice(0, 2)),
    parseInt(endTime.slice(0, 2))
  );
  const timeDetail = getTimeArray(times);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    setIsDragging(true);

    if (isDragging && target.className.slice(0, 5) === 'valid') {
      setElement(target);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (isDragging && target.className.slice(0, 5) === 'valid') {
      setElement(target);

      if (element) {
        if (element.classList.contains('selected')) {
          element.classList.remove('selected');
        } else {
          element.classList.add('selected');
        }
      }
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (isDragging && target.className.slice(0, 5) === 'valid') {
      setElement(e.target as HTMLDivElement);
    }

    setIsDragging(false);
  };

  useEffect(() => {
    if (element) {
      if (element.classList.contains('selected')) {
        element.style.backgroundColor = `${theme.colors.gray01}`;
        element.classList.remove('selected');

        setAvailableTimes(
          availableTimes.filter(
            (time: string) => time !== element.getAttribute('id')
          )
        );
      } else {
        element.classList.add('selected');

        if (selectedMethod === 'possible') {
          element.style.backgroundColor = `${theme.colors.purple06}`;
        } else if (selectedMethod === 'impossible') {
          element.style.backgroundColor = `${theme.colors.orange02}`;
        } else return;

        const id = element.getAttribute('id') as string;
        setAvailableTimes([...availableTimes, id]);
      }
    }
  }, [element]);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchElement = document.elementFromPoint(
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    ) as HTMLDivElement;

    if (touchElement?.className.slice(0, 5) === 'valid') {
      setElement(touchElement);
    }
  };

  console.log(availableTimes);

  return (
    <Wrapper>
      <Top>
        <Blank />
        <DateWrapper>
          {validDateChunks[tablePage].map(({ date }: { date: string }) => (
            <Date key={date}>{`${date.slice(5, 7)}월${date.slice(
              8,
              10
            )}일`}</Date>
          ))}
        </DateWrapper>
      </Top>

      <Bottom>
        <TimeWrapper>
          {times.map((time) => (
            <Time key={time}>{time}</Time>
          ))}
        </TimeWrapper>
        {validDateChunks[tablePage].map(
          ({ date, isValidDate }: { date: string; isValidDate: boolean }) => (
            <SelectWrapper key={date}>
              {timeDetail.map((time) => (
                <Select
                  className={isValidDate ? 'valid' : 'invalid'}
                  key={`${date} ${time}:00`}
                  id={`${date} ${time}`}
                  selectedMethod={selectedMethod}
                  isValidDate={isValidDate}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onTouchMove={handleTouchMove}
                  onTouchStart={handleTouchMove}
                />
              ))}
            </SelectWrapper>
          )
        )}
      </Bottom>
    </Wrapper>
  );
};

export default AddTable;
