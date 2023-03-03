import styled from '@emotion/styled';
import theme from '../../styles/theme';

import unfold from '../../assets/icons/unfold.svg';

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

const Wrapper = styled.div`
  display: inline-block;
  box-sizing: content-box;

  height: 20px;
  padding: 6.5px 8px;
  border-radius: 4px;
  text-align: center;

  ${theme.typography.semibold05};
  color: ${theme.colors.purple06};
  background: ${theme.colors.purple02};
`;

const Content = styled.div`
  display: flex;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  cursor: pointer;
`;

const Unfold = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 3px;
`;

export default SelectBox;
