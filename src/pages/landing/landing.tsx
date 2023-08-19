import { Link } from 'react-router-dom';
import {
  StartWrapper,
  ScrollWrapper,
  MainContainer,
  IntroWrapper,
  ContentWrapper,
  FirstWrapper,
  SecondWrapper,
  TitleWrapper,
  ThirdWrapper,
  FourthWrapper,
  LastWrapper,
} from './landing.styles';
import LogoImg from '@/assets/images/logo.webp';
import ScrollArrow from '@/assets/icons/scrollArrow.webp';
import Rabbit from '@/assets/images/rabbit.webp';
import BottomButton from '@/components/bottomButton/BottomButton';
import landing1 from '@/assets/images/landing1.webp';
import landing2 from '@/assets/images/landing2.webp';
import landing3 from '@/assets/images/landing3.webp';
import landing4 from '@/assets/images/landing4.webp';
import landing5 from '@/assets/images/landing5.webp';
import landing6 from '@/assets/images/landing6.webp';

const Landing = () => {
  return (
    <MainContainer>
      <StartWrapper>
        <text className="logo-header">쉽고 빠른 약속 정하기</text>
        <img className="logo" src={LogoImg} />
        <img className="rabbit" src={Rabbit} />
        <ScrollWrapper>
          <img className="arrow" src={ScrollArrow} />
          스크롤해보세요
        </ScrollWrapper>
      </StartWrapper>
      <IntroWrapper>
        <text>
          {`3인 이상 약속을 잡을 때,
        일정 조율하기 어렵지 않으셨나요?`}
        </text>
        <img className="chat" src={landing1} />
        <div className="section">
          <div className="section-logo">
            <img className="logo" src={LogoImg} />이
          </div>
          <text>도와드릴게요!</text>
        </div>
      </IntroWrapper>
      <ContentWrapper>
        <FirstWrapper>
          <TitleWrapper>
            <div className="title-header">약속 시간 만들기</div>
            <div className="title">{`간단하게 약속 모임을
        만들어보세요!`}</div>
          </TitleWrapper>
          <img src={landing2} />
          <img src={landing3} />
        </SecondWrapper>
        <ThirdWrapper>
          <TitleWrapper>
            <div className="title-header">시간 입력하기</div>
            <div className="title">{`되는 시간/안되는 시간 토글로
          일정을 등록해보세요`}</div>
          </TitleWrapper>
          <img src={landing4} />
        </ThirdWrapper>
        <FourthWrapper>
          <TitleWrapper>
            <div className="title-header">실시간 확인하기</div>
            <div className="title">{`일정등록 타이머와 함께
          실시간 참여율을 확인할 수 있어요`}</div>
          </TitleWrapper>
          <img src={landing5} />
        </FourthWrapper>
        <FifthWrapper>
          <TitleWrapper>
            <div className="title-header">우선순위 확인하기</div>
            <div className="title">{`조율 결과를
          한눈에 확인해볼까요?`}</div>
          </TitleWrapper>
          <img src={landing6} />
        </FifthWrapper>
      </ContentWrapper>
      <Link to="/roomStart">
        <BottomButton
          text="시작하기"
          isBackgroundVisible={false}
          isActivated={true}
        />
      </Link>
    </MainContainer>
  );
};

export default Landing;
