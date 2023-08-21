import reset from '@/assets/icons/reset.svg';

import {
  BottomButton,
  BottomWrapper,
  ResetButton,
  ResetButtonWrapper,
  ResetText,
  Wrapper,
} from './index.styles';

interface TableSelectedTypes {
  [key: number]: string[];
}

interface AddButtonTypes {
  handleApplyClick: () => void;
  setTableSelected: React.Dispatch<React.SetStateAction<TableSelectedTypes>>;
  setIsResetButtonClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddButton = ({
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
        <BottomButton onClick={handleApplyClick}>등록하기</BottomButton>
      </BottomWrapper>
    </Wrapper>
  );
};

export default AddButton;
