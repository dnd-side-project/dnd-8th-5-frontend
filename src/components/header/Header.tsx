import { Icon, Title, Wrapper } from './Header.styles';

import share from '../../assets/icons/share.svg';
import emailDefault from '../../assets/icons/emailDefault.svg';
import emailRegistered from '../../assets/icons/emailRegistered.svg';

import { useRecoilState } from 'recoil';
import { emailState } from '../../atoms/emailAtoms';

const Header = ({ pageName, title }: { pageName: string; title: string }) => {
  const [isEmailRegistered, setIsEmailRegistered] = useRecoilState(emailState);

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
        <Icon src={share} alt="share" />
      )}
    </Wrapper>
  );
};

export default Header;
