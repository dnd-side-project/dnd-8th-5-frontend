import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import theme from '../../styles/theme';
import RoomHeader from '../roomHeader/RoomHeader';
import './botttomSheetShare.css';
import clipBoard from '../../assets/icons/clipBoard.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import headerRabbit from '../../assets/images/headerRabbit.png';

const BottomSheetShare = ({ roomUuid }: { roomUuid: string | undefined }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(`https://modutime.site/Current/${roomUuid}`);
  }, []);

  const onDismiss = () => {
    setOpen(false);
  };

  const onShareUrl = () => {
    if (navigator.share) {
      navigator
        .share({
          title: '모두의 시간',
          text: '지금 바로 모두 가능한 시간을 알아보세요!',
          url: url,
        })
        .then(() => {
          console.log('링크가 공유 되었습니다.');
        })
        .catch(() => {
          console.log('오류가 발생했습니다.');
        });
    } else {
      console.log('공유기능을 지원 하지않는 브라우저입니다.');
    }
  };

  return (
    <BottomSheet
      open={open}
      blocking={true}
      onSpringEnd={(e) => {
        console.log(e);
      }}
      onDismiss={onDismiss}
      snapPoints={({ minHeight }) => minHeight}
    >
      <MainContainer>
        <HeaderRabbit src={headerRabbit} />
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
        <ShareButtonWrapper onClick={onShareUrl}>
          <ShareButton isActivated={true}>지금 공유할게요</ShareButton>
        </ShareButtonWrapper>
        <RateButtonWrapper
          onClick={() => {
            setOpen(false);
          }}
        >
          나중에 할게요
        </RateButtonWrapper>
      </MainContainer>
    </BottomSheet>
  );
};

export default BottomSheetShare;

const HeaderRabbit = styled.img`
  position: fixed;

  z-index: 5;
  top: -127px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
`;

const MainContainer = styled.div`
  width: 375px;
  height: 300px;
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

const ShareButtonWrapper = styled.div`
  top: 0px;
  padding-bottom: 30px;
`;

const RateButtonWrapper = styled.div`
  ${theme.typography.medium02};
  color: ${theme.colors.gray04};
  position: absolute;
  width: 100%;
  top: 271px;
  text-align: center;
  cursor: pointer;
`;

const ShareButton = styled.button<{ isActivated: boolean }>`
  width: calc(100% - 40px);
  max-width: 375px;
  height: 52px;
  margin: 0 auto;

  border-radius: 6px;

  ${theme.typography.semibold03};
  color: ${({ isActivated }) =>
    isActivated ? theme.colors.gray01 : theme.colors.gray06};
  background: ${({ isActivated }) =>
    isActivated ? theme.colors.purple06 : theme.colors.gray03};

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 203px;
  left: 0;
  right: 0;
`;
