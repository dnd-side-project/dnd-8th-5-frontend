import unfold from '../../assets/icons/unfold.svg';
import { Content, Unfold, Wrapper } from './SelectBox.styles';

const SelectBox = ({ text }: { text: string }) => {
  return (
    <Wrapper>
      <Content>
        {text}
        <Unfold src={unfold} alt="unfold" />
      </Content>
    </Wrapper>
  );
};

export default SelectBox;
