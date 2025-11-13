import reset from '@/assets/icons/reset.svg';

import {
  BottomButton,
  BottomWrapper,
  ResetButton,
  ResetButtonWrapper,
  ResetText,
  Wrapper,
} from './index.styles';
import { Loading } from '@/components/commons/loading';

interface TableSelectedTypes {
  [key: number]: string[];
}

interface AddButtonTypes {
  isLoading: boolean;
  handleApplyClick: () => void;
  setTableSelected: React.Dispatch<React.SetStateAction<TableSelectedTypes>>;
  setIsResetButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button = ({
  isLoading,
  setTableSelected,
  handleApplyClick,
  setIsResetButtonClick,
}: AddButtonTypes) => {
  const handleResetClick = () => {
    setTableSelected({});

    const selected = document.querySelectorAll('.selected');

    selected.forEach((element) => {
      element.classList.remove('selected');
    });

    setIsResetButtonClick(true);
  };

  return (
    <Wrapper>
      <BottomWrapper>
        <ResetButtonWrapper onClick={handleResetClick}>
          <ResetButton src={reset} alt="reset" />
          <ResetText>초기화</ResetText>
        </ResetButtonWrapper>
        <BottomButton onClick={handleApplyClick} disabled={isLoading}>
          {isLoading ? <Loading size={20} /> : '등록하기'}
        </BottomButton>
      </BottomWrapper>
    </Wrapper>
  );
};

export default Button;
