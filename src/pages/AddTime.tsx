import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import theme from '../styles/theme';

import addPrev from '../assets/icons/addPrev.png';
import addNext from '../assets/icons/addNext.png';

const AddTime = () => {
  const [select, setSelect] = useState('possible');

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  return (
    <Wrapper>
      <Body>
        <TitleWrapper>
          <Title>수빈 님의 일정을</Title>
        </TitleWrapper>
        <TitleWrapper>
          <select onChange={handleSelect} value={select}>
            <option value="possible">되는</option>
            <option value="impossible">안 되는</option>
          </select>
          <Title>시간으로 선택해 주세요</Title>
        </TitleWrapper>

        <Main>
          <MoveButton src={addPrev} alt="Prev Button" />
          <MoveButton src={addNext} alt="Next Button" />
        </Main>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding-bottom: 108px;

  border: 1px solid gray;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Body = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const TitleWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;

const Title = styled.span`
  color: ${theme.colors.gray07};
  ${theme.typography.semibold02};
`;

const Main = styled.div`
  width: 100%;
  margin-top: 48px;
  padding-bottom: 116px;
  border: 1px solid hotpink;

  display: flex;
  justify-content: space-between;
`;

const MoveButton = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.1);
`;

export default AddTime;
