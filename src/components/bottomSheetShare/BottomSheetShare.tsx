import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import theme from '../../styles/theme';
import RoomHeader from '../roomHeader/RoomHeader';
import './botttomSheetShare.css';
import clipBoard from '../../assets/icons/clipBoard.png';

const BottomSheetShare = () => {
  const [open, setOpen] = useState(true);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl('ddddddd');
  }, []);

  const onDismiss = () => {
    setOpen(false);
  };

  const onChange = (e: any) => {
    setUrl(e.target.value);
  };

  const copyLinkRef = useRef(null);

  return (
    <BottomSheet
      open={open}
      blocking={true}
      onSpringStart={(e) => {
        console.log('start', e);
      }}
      onSpringEnd={(e) => {
        console.log(e);
      }}
      onDismiss={onDismiss}
      snapPoints={({ minHeight }) => minHeight}
    >
      <MainContainer>
        <HeaderContainer>
          <RoomHeader
            index=""
            title={`약속의 링크가 생성되었어요\n공유하고 친구의 일정을 알아보세요`}
            bottomSheet={true}
          />
        </HeaderContainer>
        <InputContainer>
          <Input
            type="text"
            name="name"
            placeholder="이름 입력"
            maxLength={4}
            value={url}
            onChange={onChange}
            ref={copyLinkRef}
          />
          <ClipBoardWrapper>
            <ClipBoard src={clipBoard}></ClipBoard>
          </ClipBoardWrapper>
        </InputContainer>
      </MainContainer>
    </BottomSheet>
  );
};

export default BottomSheetShare;

const MainContainer = styled.div`
  width: 375px;
  height: 323px;
`;

const HeaderContainer = styled.div`
  padding-top: 10px;
  padding-left: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.gray04};
  width: 100%;
  max-width: 335px;
  left: 20px;
  width: 336px;
  height: 50px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 300px;
  height: 48px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 15px;
  outline: none;
`;

const ClipBoardWrapper = styled.div`
  padding: 13px;
`;

const ClipBoard = styled.img`
  width: 24px;
  height: 24px;
`;
