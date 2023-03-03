import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import theme from '../../styles/theme';
import RoomHeader from '../roomHeader/RoomHeader';
import './botttomSheetShare.css';
import clipBoard from '../../assets/icons/clipBoard.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const BottomSheetShare = (location: any) => {
  const [open, setOpen] = useState(true);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(`http://localhost:8080/${location.location.pathname}`);
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
        <UrlContainer>
          <UrlWrapper>
            <UrlText>{url}</UrlText>
          </UrlWrapper>
          <CopyToClipboard
            text={url}
            onCopy={() => alert('클립보드에 복사되었습니다.')}
          >
            <ClipBoardWrapper>
              <ClipBoard src={clipBoard}></ClipBoard>
            </ClipBoardWrapper>
          </CopyToClipboard>
        </UrlContainer>
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

const UrlContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.gray04};
  border-radius: 5px;
  width: 100%;
  max-width: 335px;
  left: 20px;

  width: 336px;
  height: 50px;
  margin: 0 auto;
  margin-top: 24px;
`;

const UrlWrapper = styled.div`
  display: block;
  width: 300px;
  height: 48px;
  padding: 15px;
  outline: none;
  color: ${theme.colors.gray04};
  ${theme.typography.regular01};
`;

const UrlText = styled.div`
  max-width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ClipBoardWrapper = styled.div`
  cursor: pointer;
`;

const ClipBoard = styled.img`
  width: 24px;
  height: 24px;
`;
