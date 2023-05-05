import { MouseEventHandler } from 'react';
import unfold from '../../assets/icons/unfold.svg';
import { Content, Unfold, Wrapper } from './SelectBox.styles';

const SelectBox = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <Wrapper onClick={handleClick}>
      <Content>
        {text}
        <Unfold src={unfold} alt="unfold" />
      </Content>
    </Wrapper>
  );
};

export default SelectBox;
