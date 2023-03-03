import { Icon, Title, Wrapper } from './Header.styles';

import share from '../../assets/icons/share.svg';
import emailDefault from '../../assets/icons/emailDefault.svg';
import emailRegistered from '../../assets/icons/emailRegistered.svg';

import room from '../../assets/data/room.json';
import { useRecoilState } from 'recoil';
import { emailState } from '../../atoms/emailAtoms';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Header = ({ pageName }: { pageName: string }) => {
  const [isEmailRegistered, setIsEmailRegistered] = useRecoilState(emailState);
  const { roomUuid } = useParams();

  return (
    <Wrapper>
      <Title>{room.title.slice(0, 16)}</Title>

      {pageName === 'result' ? (
        isEmailRegistered ? (
          <Icon src={emailRegistered} alt="email registered" />
        ) : (
          <Icon src={emailDefault} alt="email default" />
        )
      ) : (
        <CopyToClipboard
          text={`https://modutime.site/Current/${roomUuid}`}
          onCopy={() => alert('클립보드에 복사되었습니다.')}
        >
          <Icon src={share} alt="share" />
        </CopyToClipboard>
      )}
    </Wrapper>
  );
};

export default Header;
