import { Link } from 'react-router-dom';
import {
  StartWrapper,
  ScrollWrapper,
  MainContainer,
  FirstWrapper,
  SecondWrapper,
  TitleWrapper,
} from './landing.styles';
import LogoImg from '@/assets/images/logo.webp';
import ScrollArrow from '@/assets/icons/scrollArrow.webp';
import LadingFirst from '@/assets/images/landing1.webp';
import Rabbit from '@/assets/images/rabbit.webp';
import BottomButton from '@/components/bottomButton/BottomButton';

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
      <FirstWrapper>
        <text>
          {`3인 이상 약속을 잡을 때,
        일정 조율하기 어렵지 않으셨나요?`}
        </text>
        <img className="chat" src={LadingFirst} />
        <div className="section">
          <div className="section-logo">
            <img className="logo" src={LogoImg} />이
          </div>
          <text>도와드릴게요!</text>
        </div>
      </FirstWrapper>
      <SecondWrapper>
        <TitleWrapper>
          <div className="title-header">약속 시간 만들기</div>
          <div className="title">{`간단하게 약속 모임을
        만들어보세요!`}</div>
        </TitleWrapper>
      </SecondWrapper>
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
