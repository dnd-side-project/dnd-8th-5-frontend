import { useEffect, useState } from 'react';
import RoomHeader from '../roomHeader/RoomHeader';
import clipBoard from '../../assets/icons/clipBoard.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import headerRabbit from '../../assets/images/headerRabbit.png';

import {
  BottomSheetComponent,
  MainContainer,
  HeaderRabbit,
  HeaderContainer,
  UrlContainer,
  UrlWrapper,
  UrlText,
  ClipBoardWrapper,
  ClipBoard,
  ShareButtonWrapper,
  RateButtonWrapper,
  ShareButton,
} from './BottomSheetShare.styles';
import { useParams } from 'react-router-dom';

const BottomSheetShare = ({ roomUuid }: { roomUuid: string | undefined }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [url, setUrl] = useState('');
  const { roomUUID } = useParams();

  const currentUrl = window.location.origin + '/invite/' + roomUUID;

  useEffect(() => {
    setUrl(currentUrl);
  }, []);

  const onDismiss = () => {
    setOpen(false);
  };

  const onShareUrl = () => {
    if (navigator.share) {
      navigator.share({
        title: '모두의 시간',
        text: '지금 바로 모두 가능한 시간을 알아보세요!',
        url: url,
      });
    }
  };

  return (
    <BottomSheetComponent
      open={open}
      blocking={true}
      onDismiss={onDismiss}
      snapPoints={({ footerHeight }) => footerHeight}
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
    </BottomSheetComponent>
  );
};

export default BottomSheetShare;
