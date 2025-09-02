import { Dispatch, SetStateAction } from 'react';

import { Wrapper } from '../index.styles';
import { Check, List, ListWrapper } from './index.styles';
import sortCheck from '@/assets/icons/sortCheck.svg';
import { FilterTypes } from '@/pages/result';

interface SortTimesTypes {
  filter: FilterTypes;
  setFilter: Dispatch<FilterTypes>;
  setIsSortOpened: Dispatch<SetStateAction<boolean>>;
}

const SortOption = ({ filter, setFilter, setIsSortOpened }: SortTimesTypes) => {
  const handleListClick = (sort: FilterTypes['sort']) => {
    setFilter({ ...filter, sort });
    setIsSortOpened(false);
  };

  return (
    <Wrapper>
      <ListWrapper>
        <List
          id="fast"
          onClick={() => handleListClick('fast')}
          isSelected={filter.sort === 'fast'}
        >
          빠른 시간 순
          <Check src={sortCheck} isSelected={filter.sort === 'fast'} />
        </List>
        <List
          id="long"
          onClick={() => handleListClick('long')}
          isSelected={filter.sort === 'long'}
        >
          오래 만날 수 있는 순
          <Check src={sortCheck} isSelected={filter.sort === 'long'} />
        </List>
      </ListWrapper>
    </Wrapper>
  );
};

export default SortOption;
