import { useEffect, useRef } from 'react';

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
} from './Table.styles';
import { TableType } from './AddTimeTable.types';
import Selecto from 'react-selecto';
import { getTableDateFormat } from '../../utils/getTableDateFormat';

const Table = ({
  contentRef,
  selected,
  setSelected,
  selectedMethod,
  tablePage,
  validDateChunks,
  times,
  isResetButtonClick,
  setIsResetButtonClick,
}: TableType) => {
  const timeDetail = getTimeArray(times);

  const selectoRef = useRef<any>(null);

  useEffect(() => {
    if (selected[tablePage]) {
      const selectedElements = document.querySelectorAll('.selected');
      selectedElements.forEach((element) => {
        element.classList.remove('selected');
      });

      selected[tablePage].forEach((id) => {
        const element = document.getElementById(id);
        element?.classList.add('selected');
      });

      selectoRef.current.setSelectedTargets(
        selected[tablePage].map((id) => document.getElementById(id))
      );
    }
  }, [tablePage, selected]);

  useEffect(() => {
    selectoRef.current.setSelectedTargets([]);
    setIsResetButtonClick(false);
  }, [selectedMethod, isResetButtonClick]);

  const handleCellSelect = (e: any) => {
    if (e.inputEvent.type !== 'touchstart') {
      e.added.forEach((el: any) => {
        el.classList.add('selected');
      });

      e.removed.forEach((el: any) => {
        el.classList.remove('selected');
      });
    }
  };

  const addSelectedToObject = () => {
    const newArr: string[] = Array.from(
      document.querySelectorAll('.selected')
    ).map((node: Element) => node.id);

    const newObj = { ...selected };
    newObj[tablePage] = newArr;

    setSelected(newObj);
  };

  const handleClickOneElement = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const target = e.target as HTMLDivElement;

    if (e.type === 'click') {
      if (target.classList.contains('valid')) {
        if (target.classList.contains('selected')) {
          target.classList.remove('selected');
        } else {
          target.classList.add('selected');
          addSelectedToObject();
        }
      }
    }
  };

  return (
    <Wrapper ref={contentRef}>
      <Top>
        <Blank />
        <DateWrapper>
          {validDateChunks[tablePage].map(
            ({ date, isValidDate }: { date: string; isValidDate: boolean }) =>
              date.slice(0, 5) === 'blank' ? (
                <Date key={date} isValidDate={isValidDate} />
              ) : (
                <Date key={date} isValidDate={isValidDate}>
                  {getTableDateFormat(date)}
                </Date>
              )
          )}
        </DateWrapper>
      </Top>

      <Bottom>
        <TimeWrapper>
          {times.map((time) => (
            <Time key={time}>{time}</Time>
          ))}
        </TimeWrapper>

        {validDateChunks[tablePage]?.map(
          ({ date, isValidDate }: { date: string; isValidDate: boolean }) => (
            <SelectWrapper key={date} className="container">
              <Selecto
                ref={selectoRef}
                dragContainer={'.container'}
                selectableTargets={['.valid']}
                onSelect={handleCellSelect}
                onDragEnd={addSelectedToObject}
                hitRate={0}
                selectFromInside={true}
                continueSelect={true}
                continueSelectWithoutDeselect={false}
                selectByClick={false}
                ratio={0}
              />
              {timeDetail.map((time) => (
                <Select
                  onClick={handleClickOneElement}
                  onTouchStart={handleClickOneElement}
                  className={isValidDate ? 'valid' : 'invalid'}
                  key={`${date} ${time}:00`}
                  id={`${date.slice(0, 10)} ${time}`}
                  selectedMethod={selectedMethod}
                  isValidDate={isValidDate}
                />
              ))}
            </SelectWrapper>
          )
        )}
      </Bottom>
    </Wrapper>
  );
};

export default Table;
