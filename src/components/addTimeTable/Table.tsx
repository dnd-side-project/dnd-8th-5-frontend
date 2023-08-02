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

const Table = ({
  contentRef,
  selected,
  setSelected,
  selectedMethod,
  tablePage,
  validDateChunks,
  times,
}: TableType) => {
  const timeDetail = getTimeArray(times);

  const selectoRef = useRef<any>(null);

  useEffect(() => {
    if (selected[tablePage]) {
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
  }, [selectedMethod]);

  const handleCellSelect = (e: any) => {
    e.added.forEach((el: any) => {
      el.classList.add('selected');
    });

    e.removed.forEach((el: any) => {
      el.classList.remove('selected');
    });
  };

  const addSelectedToObject = () => {
    const newArr: string[] = Array.from(
      document.querySelectorAll('.selected')
    ).map((node: Element) => node.id);

    const newObj = { ...selected };
    newObj[tablePage] = newArr;

    setSelected(newObj);
  };

  const handleClickOneElement = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.classList.contains('valid')) {
      if (target.classList.contains('selected')) {
        target.classList.remove('selected');
      } else {
        target.classList.add('selected');
        addSelectedToObject();
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
                <Date key={date} isValidDate={isValidDate}>{`${date.slice(
                  5,
                  7
                )}월${date.slice(8, 10)}일`}</Date>
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
                ratio={0}
              />
              {timeDetail.map((time) => (
                <Select
                  onClick={handleClickOneElement}
                  className={isValidDate ? 'valid' : 'invalid'}
                  key={`${date} ${time}:00`}
                  id={`${date} ${time}`}
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
