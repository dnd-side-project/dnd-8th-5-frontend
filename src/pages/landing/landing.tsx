import { Link } from 'react-router-dom';
import {
  StartWrapper,
  ScrollWrapper,
  MainContainer,
  IntroWrapper,
  ContentsWrapper,
  TitleWrapper,
  LastWrapper,
  ContentWrapper,
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

const contents = [
  {
    id: 1,
    titleHeader: '약속 시간 만들기',
    title: '간단하게 약속 모임을\n만들어보세요',
    images: [landing2, landing3],
  },
  {
    id: 2,
    titleHeader: '시간 입력하기',
    title: '되는 시간/안되는 시간 토글로\n일정을 등록해보세요',
    images: [landing4],
  },
  {
    id: 3,
    titleHeader: '실시간 확인하기',
    title: '일정등록 타이머와 함께\n실시간 참여율을 확인할 수 있어요',
    images: [landing5],
  },
  {
    id: 4,
    titleHeader: '우선순위 확인하기',
    title: '조율 결과를\n한눈에 확인해볼까요?',
    images: [landing6],
  },
];

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
      <ContentsWrapper>
        {contents.map((item) => {
          return (
            <ContentWrapper index={item.id} key={item.id}>
              <TitleWrapper>
                <div className="title-header">{item.titleHeader}</div>
                <div className="title">{item.title}</div>
              </TitleWrapper>
              {item.images.map((image) => {
                return <img src={image} />;
              })}
            </ContentWrapper>
          );
        })}
      </ContentsWrapper>
      <LastWrapper>
        <text>
          {`간편하고 빠르게 약속시간을 정하고 싶다면
          모두의 시간과 함께 해보세요!`}
        </text>
      </LastWrapper>
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
