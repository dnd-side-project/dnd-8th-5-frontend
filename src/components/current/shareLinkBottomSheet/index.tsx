import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { LinkShareBottomSheetState } from '@/atoms/LinkShareBottomSheetAtom';

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
} from './index.styles';
import copy from '@/assets/icons/copy.svg';
import linkShareBottomSheetRabbit from '@/assets/images/linkShareBottomSheetRabbit.webp';
import useShareLink from '@/hooks/useShareLink';

const ShareLinkBottomSheet = ({ roomTitle }: { roomTitle: string }) => {
  const { inviteURL, handleUseShareAPI, handleCopyToClipBoard } =
    useShareLink();

  const setIsLinkShareBottomSheetOpened = useSetRecoilState(
    LinkShareBottomSheetState
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const closeBottomSheet = () => {
    setIsLinkShareBottomSheetOpened(false);
    document.body.style.overflow = 'unset';
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
              onClick={() => handleCopyToClipBoard()}
            />
          </LinkWrapper>
          <ShareButton onClick={() => handleUseShareAPI(roomTitle)}>
            지금 공유할게요
          </ShareButton>
          <LaterButtonWrapper>
            <LaterButton onClick={closeBottomSheet}>나중에 할게요</LaterButton>
          </LaterButtonWrapper>
        </Main>
      </Wrapper>
    </>
  );
};

export default ShareLinkBottomSheet;
