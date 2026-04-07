import { ROUTES } from '@/constants/ROUTES';

const useShareLink = (roomId: string, roomTitle: string) => {
  const inviteURL = `${window.location.origin}${ROUTES.INVITE}/${roomId}?utm_source=user`;

  const shareText = `💌 [${roomTitle}]
  약속 조율을 시작했어요!
  되거나 안 되는 시간만 체크하면 끝 👌
  지금 바로 참여하고 모두의 시간을 찾아보세요.

  ${inviteURL}`;

  const handleCopyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      alert('클립보드에 복사되었습니다.');
    } catch {
      alert('링크 복사에 실패했습니다.');
    }
  };

  const handleUseShareAPI = () => {
    const shareData = {
      title: '모두의 시간',
      text: shareText,
    };

    if (navigator.share) {
      navigator.share(shareData);
    } else {
      handleCopyToClipBoard();
    }
  };

  return { inviteURL, handleUseShareAPI, handleCopyToClipBoard };
};

export default useShareLink;
