import { Icon, Title, Wrapper } from './Header.styles';

import share from '../../assets/icons/share.svg';
import emailDefault from '../../assets/icons/emailDefault.svg';
import emailRegistered from '../../assets/icons/emailRegistered.svg';
import headerInfo from '../../assets/icons/headerInfo.svg';

import { useRecoilState } from 'recoil';
import { emailState } from '../../atoms/emailAtoms';
import { availableGuideState } from '../../atoms/availableGuideAtoms';

import CopyToClipboard from 'react-copy-to-clipboard';

const Header = ({ pageName, title }: { pageName: string; title: string }) => {
  const [isEmailRegistered, setIsEmailRegistered] = useRecoilState(emailState);
  const [availableGuide, setAvailbleGuide] =
    useRecoilState(availableGuideState);

  const currentUrl = window.location.href;

  const renderHeader = () => {
    switch (pageName) {
      case 'result':
        return isEmailRegistered ? (
          <Icon src={emailRegistered} alt="email registered" />
        ) : (
          <Icon src={emailDefault} alt="email default" />
        );
      case 'addTime':
        return (
          <Icon
            src={headerInfo}
            alt="share"
            onClick={() => setAvailbleGuide(true)}
          />
        );
    }
    return (
      <CopyToClipboard
        text={currentUrl}
        onCopy={() => alert('클립보드에 복사되었습니다.')}
      >
        <Icon src={share} alt="share" />
      </CopyToClipboard>
    );
  };

  return (
    <Wrapper>
      <Title>{title.slice(0, 16)}</Title>
      {renderHeader()}
    </Wrapper>
  );
};

export default Header;
