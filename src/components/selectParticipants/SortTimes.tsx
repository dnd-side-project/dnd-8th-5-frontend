import styled from '@emotion/styled';
import React from 'react';
import theme from '../../styles/theme';

import sortCheck from '../../assets/icons/sortCheck.svg';

interface props {
  sortedQS: string;
  setSortedQS: React.Dispatch<string>;
  setIsSortOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const SortTimes = ({ sortedQS, setSortedQS, setIsSortOpened }: props) => {
  const handleListClick = (e: any) => {
    setSortedQS(e.target.id);
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

const Wrapper = styled.div`
  width: 100%;

  display: flex;
`;

const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

const List = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid ${theme.colors.gray02};

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${theme.typography.medium04}
  color: ${({ isSelected }) =>
    isSelected ? theme.colors.purple06 : theme.colors.gray06};
`;

const Check = styled.img<{ isSelected: boolean }>`
  width: 20px;
  height: 20px;

  display: ${({ isSelected }) => (isSelected ? 'visible' : 'none')};
`;

export default SortTimes;
