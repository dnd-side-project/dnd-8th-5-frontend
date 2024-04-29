import { useEffect, useRef } from 'react';
import Selecto from 'react-selecto';

import { getTimeArray } from '@/utils/getTimeArray';
import { getTableDateFormat } from '@/utils/getTableDateFormat';
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
} from './index.styles';
import { TableType } from '../tableArea/index.types';

interface ValidDateType {
  date: string;
  isValidDate: boolean;
}

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
  const selectoRef = useRef<any>(null);
  const timeDetail = getTimeArray(times);

  useEffect(() => {
    if (selected[tablePage]) {
      // 등록했던 일정을 수정할 경우 className 제거하는 과정 필요
      const selectedElements = document.querySelectorAll('.selected');
      selectedElements.forEach((element) => {
        element.classList.remove('selected');
      });

      selected[tablePage].forEach((id) => {
        const element = document.getElementById(id);
        element?.classList.add('selected');
      });

      // 페이지 진입 시 이전에 선택했던 칸에 선택 표시
      selectoRef.current.setSelectedTargets(
        selected[tablePage].map((id) => document.getElementById(id))
      );
    }
  }, [tablePage, selected]);

  // 시간 선택 방법을 토글하면 선택한 항목 초기화
  useEffect(() => {
    selectoRef.current.setSelectedTargets([]);
    setIsResetButtonClick(false);
  }, [selectedMethod, isResetButtonClick]);

  // Selecto 컴포넌트에 전달할 onSelect 핸들러
  const handleCellSelect = (e: any) => {
    if (e.inputEvent.type !== 'touchstart') {
      e.added.forEach((el: HTMLElement) => {
        el.classList.add('selected');
      });

      e.removed.forEach((el: HTMLElement) => {
        el.classList.remove('selected');
      });
    }
  };

  const addSelectedToObject = () => {
    // 현재 table page에서 선택된 시간
    const newArr: string[] = Array.from(
      document.querySelectorAll('.selected')
    ).map((node: Element) => node.id);

    // key: table page
    // value: 각 table page에서 선택된 시간 배열
    const newObj = { ...selected };

    newObj[tablePage] = newArr;

    setSelected(newObj);
  };

  // 한 칸씩 클릭해서 선택할 경우
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
        }

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
            ({ date, isValidDate }: ValidDateType) =>
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
          ({ date, isValidDate }: ValidDateType) => (
            <SelectWrapper key={date} className="container">
              <Selecto
                className="mpr-designer-selection"
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
