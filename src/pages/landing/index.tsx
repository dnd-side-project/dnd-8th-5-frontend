import { useEffect, useState } from 'react';
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

import landingSection1BgXmas from '@/assets/images/landing_section1_bg_xmas.webp';
import landingLogoRabbit1 from '@/assets/images/landing_logo_rabbit_xmas1.webp';
import landingLogoRabbit2 from '@/assets/images/landing_logo_rabbit_xmas2.webp';
import landingLogoRabbit3 from '@/assets/images/landing_logo_rabbit_xmas3.webp';

const xmasRabbits = [
  landingLogoRabbit1,
  landingLogoRabbit2,
  landingLogoRabbit3,
];

const isAfterXmas2025 = (() => {
  const now = new Date();
  const xmas2025 = new Date('2025-12-25T00:00:00'); // 로컬 시간 기준
  return now >= xmas2025;
})();

export default function Landing() {
  const navigate = useNavigate();
  const [selectedRabbit, setSelectedRabbit] = useState<string | null>(null);

  useEffect(() => {
    if (!isAfterXmas2025) {
      const random = Math.floor(Math.random() * xmasRabbits.length);
      setSelectedRabbit(xmasRabbits[random]);
    }
  }, []);

  const handleStartButtonClick = () => {
    navigate(ROUTES.ROOM_START);
  };

  return (
    <Layout>
      <Wrapper>
        <FirstSection>
          <img
            className="background"
            src={isAfterXmas2025 ? landingSection1Bg : landingSection1BgXmas}
            alt=""
          />
          <img src={landingLogo} alt="모두의 시간" width="244px" />
          <img
            src={
              isAfterXmas2025
                ? landingLogoRabbit
                : selectedRabbit || landingLogoRabbit1
            }
            alt="모두의 시간 캐릭터"
            width={isAfterXmas2025 ? '80%' : '375px'}
            style={{ marginTop: isAfterXmas2025 ? '64px' : '2vh' }}
          />
          <ScrollWrapper>
            <img src={landingScroll} alt="스크롤해 보세요" width="132px" />
          </ScrollWrapper>
        </FirstSection>

        <SecondSection isAfterXmas2025={isAfterXmas2025}>
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
      </Wrapper>

      <Button onClick={handleStartButtonClick}>시작하기</Button>

      <Background isAfterXmas2025={isAfterXmas2025} />
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

export const Background = styled.div<{ isAfterXmas2025: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ isAfterXmas2025 }) =>
    isAfterXmas2025 ? '#96a3ff' : '#151937'};
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
  padding: 12vh 20px 0 20px;

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

export const SecondSection = styled.section<{ isAfterXmas2025: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 20px 300px 20px;
  gap: 12px;
  background: ${({ isAfterXmas2025 }) =>
    isAfterXmas2025
      ? 'linear-gradient(180deg, rgb(150, 163, 255, 0) 0%, rgb(150, 163, 255, 1) 70%)'
      : 'linear-gradient(180deg, rgb(21, 25, 55, 0) 0%, rgb(21, 25, 55, 1) 70%)'};

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
  padding: 40px 0 240px 0;

  svg {
    animation: ${flotingAnimation} 2s infinite;
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 24px;
  left: 20px;
  width: calc(100% - 40px);
  height: 52px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray01};
  border-radius: 6px;
  background: #4e62fb;
  ${theme.typography.semibold03};
`;
