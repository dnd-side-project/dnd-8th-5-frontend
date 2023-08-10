import { MouseEvent, Dispatch, SetStateAction } from 'react';

import { Wrapper } from '../index.styles';
import { Check, List, ListWrapper } from './SortTimes.styles';
import sortCheck from '@/assets/icons/sortCheck.svg';

interface QueryString {
  name: string;
  sort: string;
}
interface SortTimesTypes {
  queryString: QueryString;
  setQueryString: Dispatch<QueryString>;
  setIsSortOpened: Dispatch<SetStateAction<boolean>>;
}

const SortTimes = ({
  queryString,
  setQueryString,
  setIsSortOpened,
}: SortTimesTypes) => {
  const handleListClick = (e: MouseEvent<HTMLDivElement>) => {
    setQueryString({ ...queryString, sort: (e.target as HTMLDivElement).id });
    setIsSortOpened(false);
  };

  return (
    <Wrapper>
      <ListWrapper>
        <List
          id="fast"
          onClick={handleListClick}
          isSelected={queryString.sort === 'fast'}
        >
          빠른 시간 순
          <Check src={sortCheck} isSelected={queryString.sort === 'fast'} />
        </List>
        <List
          id="long"
          onClick={handleListClick}
          isSelected={queryString.sort === 'long'}
        >
          오래 만날 수 있는 순
          <Check src={sortCheck} isSelected={queryString.sort === 'long'} />
        </List>
      </ListWrapper>
    </Wrapper>
  );
};

export default SortTimes;
