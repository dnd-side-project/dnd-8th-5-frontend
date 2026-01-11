import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { ROUTES } from '@/constants/ROUTES';
import { Layout } from '@/components/commons/layout';
import { flotingAnimation } from '@/utils/flotingAnimation';

import landingSection1Bg from '@/assets/images/landing_section1_bg.webp';
import landingLogo from '@/assets/images/landing_logo.webp';
import landingLogoRabbit from '@/assets/images/landing_logo_rabbit.webp';
import landingScroll from '@/assets/images/landing_scroll.webp';
import landingChat from '@/assets/images/landing_chat.webp';
import landingHelp from '@/assets/images/landing_help.webp';
import landingCalendar from '@/assets/images/landing_calendar.webp';
import landingShare from '@/assets/images/landing_share.webp';
import landingAddTime from '@/assets/images/landing_add_time.webp';
import landingCurrent from '@/assets/images/landing_current.webp';
import landingPriority from '@/assets/images/landing_priority.webp';
import { LandingArrowDownIcon } from '@/assets/icons/landingArrowDown';

export default function Landing() {
  const navigate = useNavigate();

  const handleStartButtonClick = () => {
    navigate(ROUTES.ROOM_START);
  };

  return (
    <Layout>
      <Wrapper>
        <FirstSection>
          <img className="background" src={landingSection1Bg} alt="" />
          <img src={landingLogo} alt="모두의 시간" width="244px" />
          <img
            src={landingLogoRabbit}
            alt="모두의 시간 캐릭터"
            width={'80%'}
            style={{ marginTop: '64px' }}
          />
          <ScrollWrapper>
            <img src={landingScroll} alt="스크롤해 보세요" width="132px" />
          </ScrollWrapper>
        </FirstSection>

        <SecondSection>
          <h2>{`3인 이상 약속을 잡을 때,\n일정 조율하기 어렵지 않으셨나요?`}</h2>
          <img src={landingChat} width="100%" />
          <img src={landingHelp} width="100%" style={{ marginTop: '76px' }} />
        </SecondSection>

        <ThirdSection>
          <div>
            <h2>약속 시간 만들기</h2>
            <h3>{`간단하게 약속 모임을\n만들어 보세요!`}</h3>
            <img src={landingCalendar} width="260px" />
            <img src={landingShare} width="260px" />
          </div>
          <div>
            <h2>시간 입력하기</h2>
            <h3>{`되는 시간 / 안 되는 시간 토글로\n일정을 등록해 보세요`}</h3>
            <img src={landingAddTime} width="100%" />
          </div>
        </ThirdSection>

        <FourthSection>
          <div>
            <h2>실시간 확인하기</h2>
            <h3>{`일정등록 타이머와 함께\n실시간 참여율을 확인할 수 있어요`}</h3>
            <img src={landingCurrent} width="260px" />
          </div>
          <div>
            <h2>우선순위 확인하기</h2>
            <h3>{`조율 결과를\n한눈에 확인해 볼까요?`}</h3>
            <img src={landingPriority} width="260px" />
          </div>
        </FourthSection>

        <FifthSection>
          <h3>{`간편하고 빠르게 약속 시간을 정하고 싶다면\n모두의 시간과 함께 해 보세요!`}</h3>
        </FifthSection>

        <ArrowWrapper>
          <LandingArrowDownIcon />
        </ArrowWrapper>

        <Button onClick={handleStartButtonClick}>시작하기</Button>

        <SixthSection>
          <button>Privacy Policy</button> •{' '}
          <a
            href="https://tally.so/r/3EgaGr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </SixthSection>
      </Wrapper>

      <Background />
    </Layout>
  );
}

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #96a3ff;
  z-index: -3;
`;

export const FirstSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14vh 20px 0 20px;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;
  }
`;

export const ScrollWrapper = styled.div`
  position: absolute;
  bottom: 96px;
  animation: ${flotingAnimation} 2s infinite;
`;

export const SecondSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 20px 300px 20px;
  gap: 12px;
  background: linear-gradient(
    180deg,
    rgb(150, 163, 255, 0) 0%,
    rgb(150, 163, 255, 1) 70%
  );

  h2 {
    margin: 0 0 40px 0;
    white-space: pre-line;
    text-align: center;
    color: ${theme.colors.gray01};
    ${theme.typography.medium00};
  }
`;

export const ThirdSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;
  padding: 240px 20px 88px;
  margin: -240px 0 0 0;
  background: linear-gradient(
    180deg,
    rgba(237, 239, 255, 0) 0,
    rgba(237, 239, 255, 1) 160px
  );

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin: 0 0 8px 0;
    color: ${theme.colors.purple06};
    ${theme.typography.medium01};
  }

  h3 {
    margin: 0 0 36px 0;
    white-space: pre-line;
    text-align: center;
    color: ${theme.colors.gray07};
    ${theme.typography.semibold01};
  }
`;

export const FourthSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 20px 160px;
  gap: 120px;
  background: linear-gradient(
    180deg,
    rgba(218, 222, 255, 1) 60%,
    rgb(131, 146, 255, 1) 100%
  );

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin: 0 0 8px 0;
    color: ${theme.colors.purple06};
    ${theme.typography.medium01};
  }

  h3 {
    margin: 0 0 36px 0;
    white-space: pre-line;
    text-align: center;
    color: ${theme.colors.gray07};
    ${theme.typography.semibold01};
  }
`;

export const FifthSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 440px;
  height: 200px;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  padding: 0 0 90px 0;
  background: linear-gradient(
    180deg,
    rgb(131, 146, 255, 1) 0%,
    rgb(106, 123, 255, 1) 100%
  );
  border-radius: 0 0 50% 50%;

  h3 {
    white-space: pre-line;
    text-align: center;
    margin: 0;
    color: ${theme.colors.gray01};
    font-size: 18px;
    font-weight: 400;
  }
`;

export const ArrowWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0 40px 0;

  svg {
    animation: ${flotingAnimation} 2s infinite;
  }
`;

export const Button = styled.button`
  position: sticky;
  bottom: 24px;
  left: 20px;
  z-index: 1;
  width: calc(100% - 40px);
  height: 52px;
  padding: 16px 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray01};
  border-radius: 6px;
  background: #4e62fb;
  ${theme.typography.semibold03};
`;

export const SixthSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 56px 0 72px 0;
  color: ${theme.colors.gray01};

  button {
    color: ${theme.colors.gray01};
    ${theme.typography.regular02};
  }

  a {
    color: ${theme.colors.gray01};
    ${theme.typography.regular02};
  }
`;
