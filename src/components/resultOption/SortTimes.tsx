import { MouseEvent } from 'react';

import { Wrapper } from './SelectParticipants.styles';
import { Check, List, ListWrapper } from './SortTimes.styles';
import { SortTimesTypes } from './resultOption.types';

import sortCheck from '../../assets/icons/sortCheck.svg';

const SortTimes = ({
  sortedQS,
  setSortedQS,
  setIsSortOpened,
}: SortTimesTypes) => {
  const handleListClick = (e: MouseEvent<HTMLDivElement>) => {
    setSortedQS((e.target as HTMLDivElement).id);
    setIsSortOpened(false);
  };

  return (
    <Wrapper>
      <ListWrapper>
        <List
          id="fast"
          onClick={handleListClick}
          isSelected={sortedQS === 'fast'}
        >
          빠른 시간 순<Check src={sortCheck} isSelected={sortedQS === 'fast'} />
        </List>
        <List
          id="long"
          onClick={handleListClick}
          isSelected={sortedQS === 'long'}
        >
          오래 만날 수 있는 순
          <Check src={sortCheck} isSelected={sortedQS === 'long'} />
        </List>
      </ListWrapper>
    </Wrapper>
  );
};

export default SortTimes;
