import { useCallback, useState } from 'react';
import uncheckdBox from '@/assets/icons/uncheckdBox.png';
import checkedBox from '@/assets/icons/checkedBox.png';
import { MainContainer, TextWrapper, Icon } from './CheckBox.styles';

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

export default Checkbox;
