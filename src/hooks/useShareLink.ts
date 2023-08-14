import { ROUTES } from '@/constants/ROUTES';
import { useParams } from 'react-router-dom';

const useShareLink = () => {
  const { roomUUID } = useParams();
  const inviteURL = `${window.location.origin}${ROUTES.INVITE}/${roomUUID}`;

  const handleUseShareAPI = () => {
    const shareData = {
      title: '모두의 시간',
      url: inviteURL,
    };

    if (navigator.share) {
      navigator.share(shareData);
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
