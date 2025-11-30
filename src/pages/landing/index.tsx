import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { ROUTES } from '@/constants/ROUTES';
import { Layout } from '@/components/commons/layout';
import { flotingAnimation } from '@/utils/flotingAnimation';
import { useComponentOnScreen } from '@/hooks/useComponentOnScreen';

// import landingBackgroundImage from '@/assets/images/landing_background.webp';
import landingBackgroundImage from '@/assets/images/landing_background_xmas.webp';

import landingLogo from '@/assets/images/landing_logo.webp';
// import landingLogoRabbit from '@/assets/images/landing_logo_rabbit.webp';
import landingLogoRabbit1 from '@/assets/images/landing_logo_rabbit_xmas1.webp';
import landingLogoRabbit2 from '@/assets/images/landing_logo_rabbit_xmas2.webp';
import landingLogoRabbit3 from '@/assets/images/landing_logo_rabbit_xmas3.webp';

import landingScroll from '@/assets/images/landing_scroll.webp';
import landingChat from '@/assets/images/landing_chat.webp';
import landingHelp from '@/assets/images/landing_help.webp';
import landingCalendar from '@/assets/images/landing_calendar.webp';
import landingShare from '@/assets/images/landing_share.webp';
import landingAddTime from '@/assets/images/landing_add_time.webp';
import landingCurrent from '@/assets/images/landing_current.webp';
import landingPriority from '@/assets/images/landing_priority.webp';

const rabbits = [landingLogoRabbit1, landingLogoRabbit2, landingLogoRabbit3];

export default function Landing() {
  const navigate = useNavigate();
  const [selectedRabbit, setSelectedRabbit] = useState<string | null>(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * rabbits.length);
    setSelectedRabbit(rabbits[random]);
  }, []);

  const handleStartButtonClick = () => {
    navigate(ROUTES.ROOM_START);
  };

  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);
  const fourthRef = useRef<HTMLDivElement>(null);
  const fifthRef = useRef<HTMLDivElement>(null);

  useComponentOnScreen([secondRef, thirdRef, fourthRef, fifthRef]);

  return (
    <Layout>
      <Wrapper>
        <Background src={landingBackgroundImage} alt="배경 이미지" />
        <FirstSection>
          <img src={landingLogo} alt="모두의 시간" width="244px" />
          <img
            src={selectedRabbit || landingLogoRabbit1}
            alt="모두의 시간"
            width="375px"
            style={{ marginTop: '2vh' }}
            // width="80%"
            // style={{ marginTop: '64px' }}
          />
          <ScrollWrapper>
            <img src={landingScroll} alt="스크롤해 보세요" width="140px" />
          </ScrollWrapper>
        </FirstSection>

        <SecondSection ref={secondRef}>
          <h2>{`3인 이상 약속을 잡을 때,\n일정 조율하기 어렵지 않으셨나요?`}</h2>
          <img src={landingChat} width="100%" />
          <img src={landingHelp} width="100%" style={{ marginTop: '76px' }} />
        </SecondSection>

        <ThirdSection ref={thirdRef}>
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

        <FourthSection ref={fourthRef}>
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

        <FifthSection ref={fifthRef}>
          <h3>{`간편하고 빠르게 약속 시간을 정하고 싶다면\n모두의 시간과 함께 해 보세요!`}</h3>
        </FifthSection>
      </Wrapper>

      <Button onClick={handleStartButtonClick}>시작하기</Button>
    </Layout>
  );
}

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  z-index: -1;
`;

export const FirstSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 13vh 20px 0 20px;
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
  padding: 60px 20px 160px 20px;
  gap: 12px;

  h2 {
    margin: 0 0 40px 0;
    white-space: pre-line;
    text-align: center;
    color: ${theme.colors.gray01};
    ${theme.typography.medium00};
  }

  transition: all 2s;
  transform: translateY(96px);
`;

export const ThirdSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  gap: 100px;
  margin: 160px 0 0 0;

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

  transition: all 2s;
  transform: translateY(96px);
`;

export const FourthSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  gap: 132px;
  background: linear-gradient(
    to bottom,
    #dadeff 0%,
    rgba(255, 255, 255, 0) 100%
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

  transition: all 2s;
  transform: translateY(96px);
`;

export const FifthSection = styled.div`
  width: 100%;
  padding: 60px 0;

  h3 {
    white-space: pre-line;
    text-align: center;
    margin: 0;
    color: ${theme.colors.gray01};
    font-size: 18px;
    font-weight: 400;
  }

  transition: all 2s;
  transform: translateY(96px);
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
