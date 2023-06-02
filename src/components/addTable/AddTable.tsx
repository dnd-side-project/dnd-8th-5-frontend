import { useEffect, useRef, useState } from 'react';
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
import Selecto from 'react-selecto';
import { selector } from 'recoil';

const AddTable = ({
  selected,
  setSelected,
  selectedMethod,
  tablePage,
  validDateChunks,
  times,
}: AddTableType) => {
  const timeDetail = getTimeArray(times);
  const selectoRef = useRef<any>(null);

  useEffect(() => {
    if (selected) {
      selected.forEach((id) => {
        const element = document.getElementById(id);
        element?.classList.add('selected');
      });
    }

    selectoRef.current.setSelectedTargets(
      selected.map((id) => document.getElementById(id))
    );
  }, [selected, tablePage, selectedMethod]);

  const handleCellSelect = (e: any) => {
    e.added.forEach((el: any) => {
      el.classList.add('selected');

      if (selected.findIndex((date) => date === el.id) === -1) {
        setSelected([...selected, el.id]);
      }
    });

    e.removed.forEach((el: any) => {
      el.classList.remove('selected');

      const filtered = selected.filter((date) => date !== el.id);
      setSelected(filtered);
    });
  };

  return (
    <Wrapper>
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

        <Selecto
          ref={selectoRef}
          dragContainer={'.container'}
          selectableTargets={['.valid']}
          onSelect={handleCellSelect}
          hitRate={0}
          selectByClick={true}
          selectFromInside={true}
          continueSelect={true}
          continueSelectWithoutDeselect={false}
          toggleContinueSelect={'shift'}
          toggleContinueSelectWithoutDeselect={[['ctrl'], ['meta']]}
          ratio={0}
        ></Selecto>

        {validDateChunks[tablePage]?.map(
          ({ date, isValidDate }: { date: string; isValidDate: boolean }) => (
            <SelectWrapper key={date} className="container">
              {timeDetail.map((time) => (
                <Select
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

export default AddTable;
