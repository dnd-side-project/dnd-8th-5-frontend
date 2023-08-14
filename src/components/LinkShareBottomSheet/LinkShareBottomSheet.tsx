import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { LinkShareBottomSheetState } from '@/atoms/LinkShareBottomSheetAtom';
import { ROUTES } from '@/constants/ROUTES';

import {
  CopyIcon,
  LaterButton,
  LaterButtonWrapper,
  LinkText,
  LinkWrapper,
  Main,
  Overlay,
  Rabbit,
  ShareButton,
  Title,
  Wrapper,
} from './LinkShareBottomSheet.styles';
import copy from '@/assets/icons/copy.svg';
import linkShareBottomSheetRabbit from '@/assets/images/linkShareBottomSheetRabbit.webp';

const ShareLinkBottomSheet = () => {
  const { roomUUID } = useParams();
  const inviteURL = `${window.location.origin}${ROUTES.INVITE}/${roomUUID}`;

  const [, setIsLinkShareBottomSheetOpened] = useRecoilState(
    LinkShareBottomSheetState
  );

  const closeBottomSheet = () => {
    setIsLinkShareBottomSheetOpened(false);
  };

  const handleShareClick = () => {
    const shareData = {
      title: '모두의 시간',
      url: inviteURL,
    };

    if (navigator.share) {
      navigator.share(shareData);
    }
  };

  const handleCopyToClipBoard = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      alert('클립보드에 복사되었습니다.');
    } catch {
      alert('링크 복사에 실패했습니다.\n다시 시도해 주세요.');
    }
  };

  return (
    <>
      <Overlay onClick={closeBottomSheet} />

      <Wrapper>
        <Rabbit
          src={linkShareBottomSheetRabbit}
          alt="Link Share Bottom Sheet Rabbit"
        />
        <Main>
          <Title>약속의 링크가 생성되었어요</Title>
          <Title>공유하고 친구의 일정을 알아보세요</Title>
          <LinkWrapper>
            <LinkText>{inviteURL}</LinkText>
            <CopyIcon
              src={copy}
              alt="copy link"
              onClick={() => handleCopyToClipBoard(inviteURL)}
            />
          </LinkWrapper>
          <ShareButton onClick={handleShareClick}>지금 공유할게요</ShareButton>
          <LaterButtonWrapper>
            <LaterButton onClick={closeBottomSheet}>나중에 할게요</LaterButton>
          </LaterButtonWrapper>
        </Main>
      </Wrapper>
    </>
  );
};

export default ShareLinkBottomSheet;
