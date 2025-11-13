import { Wrapper } from '../index.styles';
import { Check, List, ListWrapper } from './index.styles';
import sortCheck from '@/assets/icons/sortCheck.svg';
import { FilterTypes } from '@/pages/result';

type Sort = FilterTypes['sort'];

const SORT_OPTIONS: { key: Sort; label: string }[] = [
  { key: 'fast', label: '빠른 시간순' },
  { key: 'long', label: '오래 만날 수 있는 순' },
];

interface Props {
  sort: Sort;
  handleSortChange: (sort: Sort) => void;
  handleCloseBottomSheet: () => void;
}

const SortOption = ({
  sort,
  handleSortChange,
  handleCloseBottomSheet,
}: Props) => {
  const handleSortOptionClick = (sort: FilterTypes['sort']) => {
    handleSortChange(sort);
    handleCloseBottomSheet();
  };

  return (
    <Wrapper>
      <ListWrapper>
        {SORT_OPTIONS.map((option) => {
          const isSelected = sort === option.key;
          return (
            <List
              key={option.key}
              isSelected={isSelected}
              onClick={() => handleSortOptionClick(option.key)}
            >
              {option.label}
              <Check src={sortCheck} isSelected={isSelected} />
            </List>
          );
        })}
      </ListWrapper>
    </Wrapper>
  );
};

export default SortOption;
