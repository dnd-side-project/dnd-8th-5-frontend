import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import uncheckdBox from '../../assets/icons/uncheckdBox.png';
import checkedBox from '../../assets/icons/checkedBox.png';
import theme from '../../styles/theme';

interface Checkbox {
  text: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox = ({ text, value, setValue }: Checkbox) => {
  const [isCheckedBox, setIsCheckedBox] = useState(value);

  const onClickCheckBox = useCallback(() => {
    setValue((prev) => !prev);
    setIsCheckedBox((prev) => !prev);
  }, [isCheckedBox]);

  return (
    <MainContainer onClick={onClickCheckBox} value={isCheckedBox}>
      <Icon src={isCheckedBox ? checkedBox : uncheckdBox} />
      <TextWrapper>{text}</TextWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div<{ value: boolean }>`
  width: 335px;
  height: 38px;
  background-color: white;
  color: ${(props) =>
    props.value ? theme.colors.purple06 : theme.colors.gray06};
  border: 1px solid
    ${(props) => (props.value ? theme.colors.purple04 : '#EEEEEE')};
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  ${theme.typography.medium04}
`;

const Icon = styled.img`
  width: 18px;
  margin-left: 15px;
  margin-right: 7px;
`;

export default Checkbox;
