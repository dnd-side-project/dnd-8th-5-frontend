import uncheckdBox from '@/assets/icons/uncheckdBox.png';
import checkedBox from '@/assets/icons/checkedBox.png';
import { MainContainer, TextWrapper, Icon } from './index.styles';

interface Checkbox {
  text: string;
  value: boolean;
  setValue: (value: boolean) => void;
}

const Checkbox = ({ text, value, setValue }: Checkbox) => {
  const onClickCheckBox = () => {
    setValue(!value);
  };

  return (
    <MainContainer onClick={onClickCheckBox} value={value}>
      <Icon src={value ? checkedBox : uncheckdBox} />
      <TextWrapper>{text}</TextWrapper>
    </MainContainer>
  );
};

export default Checkbox;
