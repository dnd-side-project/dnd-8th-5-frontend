import { ROUTES } from '@/constants/ROUTES';
import { useParams } from 'react-router-dom';

const useShareLink = () => {
  const { roomUUID } = useParams();
  const inviteURL = `${window.location.origin}${ROUTES.INVITE}/${roomUUID}?utm_source=user&utm_campaign=user_invite`;

  const handleUseShareAPI = (roomTitle: string) => {
    const shareData = {
      title: '모두의 시간',
      text: `💌 [${roomTitle}]
약속 조율을 시작했어요!
되거나 안 되는 시간만 체크하면 끝 👌
지금 바로 참여하고 모두의 시간을 찾아보세요.

내 시간 등록하기 ↓
${inviteURL}`.trim(),
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      handleCopyToClipBoard();
    }
  };

  const handleCopyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(inviteURL);
      alert('클립보드에 복사되었습니다.');
    } catch {
      alert('링크 복사에 실패했습니다.\n다시 시도해 주세요.');
    }
  };

  return { inviteURL, handleUseShareAPI, handleCopyToClipBoard };
};

export default useShareLink;
