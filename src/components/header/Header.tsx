import { Icon, Title, Wrapper } from './Header.styles';

import share from '../../assets/icons/share.svg';
import emailDefault from '../../assets/icons/emailDefault.svg';
import emailRegistered from '../../assets/icons/emailRegistered.svg';

import { useRecoilState } from 'recoil';
import { emailState } from '../../atoms/emailAtoms';
import CopyToClipboard from 'react-copy-to-clipboard';

const Header = ({ pageName, title }: { pageName: string; title: string }) => {
  const [isEmailRegistered, setIsEmailRegistered] = useRecoilState(emailState);

  const roomUuidArray = window.location.href.split('/');
  const roomUuid = roomUuidArray[roomUuidArray.length - 1];

  return (
    <Wrapper>
      <Title>{title.slice(0, 16)}</Title>

      {pageName === 'result' ? (
        isEmailRegistered ? (
          <Icon src={emailRegistered} alt="email registered" />
        ) : (
          <Icon src={emailDefault} alt="email default" />
        )
      ) : (
        <CopyToClipboard
          text={`${process.env.REACT_APP_ROOM_PATH}/current/${roomUuid}`}
          onCopy={() => alert('클립보드에 복사되었습니다.')}
        >
          <Icon src={share} alt="share" />
        </CopyToClipboard>
      )}
    </Wrapper>
  );
};

export default Header;
