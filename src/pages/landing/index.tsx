// import { useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

// import * as S from './index.styles';

// import BottomButton from '@/components/commons/bottomButton';
// import { useComponentOnScreen } from '@/hooks/useComponentOnScreen';

// import Rabbit from '@/assets/images/rabbit.webp';
// import SubLogo from '@/assets/images/subLogo.webp';
// import Logo from '@/assets/images/logo.webp';
// import ScrollArrow from '@/assets/icons/scrollArrow.webp';
// import landing1 from '@/assets/images/landing1.webp';
// import landing2 from '@/assets/images/landing2.webp';
// import landing3 from '@/assets/images/landing3.webp';
// import landing4 from '@/assets/images/landing4.webp';
// import landing5 from '@/assets/images/landing5.webp';
// import landing6 from '@/assets/images/landing6.webp';
// import { initialCreateRoomData } from '@/assets/data/initialCreateRoomData';
// import { useSetRecoilState } from 'recoil';
// import { createRoomAtom } from '@/atoms/createRoomAtom';

// const Landing = () => {
//   const introRef = useRef<HTMLDivElement>(null);
//   const firstRef = useRef<HTMLDivElement>(null);
//   const secondRef = useRef<HTMLDivElement>(null);
//   const thirdRef = useRef<HTMLDivElement>(null);
//   const fourthRef = useRef<HTMLDivElement>(null);
//   const lastRef = useRef<HTMLDivElement>(null);
//   const setRecoilRoom = useSetRecoilState(createRoomAtom);

//   useComponentOnScreen([
//     introRef,
//     firstRef,
//     secondRef,
//     thirdRef,
//     fourthRef,
//     lastRef,
//   ]);

//   const CONTENTS = [
//     {
//       id: 1,
//       titleHeader: '약속 시간 만들기',
//       title: '간단하게 약속 모임을\n만들어보세요',
//       images: [landing2, landing3],
//       ref: firstRef,
//     },
//     {
//       id: 2,
//       titleHeader: '시간 입력하기',
//       title: '되는 시간/안되는 시간 토글로\n일정을 등록해보세요',
//       images: [landing4],
//       ref: secondRef,
//     },
//     {
//       id: 3,
//       titleHeader: '실시간 확인하기',
//       title: '일정등록 타이머와 함께\n실시간 참여율을 확인할 수 있어요',
//       images: [landing5],
//       ref: thirdRef,
//     },
//     {
//       id: 4,
//       titleHeader: '우선순위 확인하기',
//       title: '조율 결과를\n한눈에 확인해볼까요?',
//       images: [landing6],
//       ref: fourthRef,
//     },
//   ];

//   useEffect(() => {
//     setRecoilRoom(initialCreateRoomData);
//   }, []);

//   return (
//     <S.MainContainer>
//       <S.StartWrapper>
//         <img className="logo-header" src={SubLogo} />
//         <img className="logo" src={Logo} />
//         <img className="rabbit" src={Rabbit} />
//         <S.ScrollWrapper>
//           <img className="arrow" src={ScrollArrow} />
//           스크롤해 보세요
//         </S.ScrollWrapper>
//       </S.StartWrapper>
//       <S.IntroWrapper ref={introRef}>
//         <div className="title">
//           {`3인 이상 약속을 잡을 때,
//         일정 조율하기 어렵지 않으셨나요?`}
//         </div>
//         <img className="chat" src={landing1} />
//         <div className="section">
//           <div className="section-logo">
//             <img className="logo" src={Logo} />
//           </div>
//           <div className="section-text">도와드릴게요!</div>
//         </div>
//       </S.IntroWrapper>
//       <S.ContentsWrapper>
//         {CONTENTS.map((item) => {
//           return (
//             <S.ContentWrapper index={item.id} key={item.id} ref={item.ref}>
//               <S.TitleWrapper>
//                 <div className="title-header">{item.titleHeader}</div>
//                 <div className="title">{item.title}</div>
//               </S.TitleWrapper>
//               {item.images.map((image) => {
//                 return <img src={image} key={image} />;
//               })}
//             </S.ContentWrapper>
//           );
//         })}
//       </S.ContentsWrapper>
//       <S.LastWrapper ref={lastRef}>
//         <div className="title">
//           {`간편하고 빠르게 약속시간을 정하고 싶다면
//           모두의 시간과 함께 해보세요!`}
//         </div>
//       </S.LastWrapper>
//       <Link to="/roomStart">
//         <BottomButton
//           text="시작하기"
//           isBackgroundVisible={false}
//           isActivated={true}
//           isLanding={true}
//         />
//       </Link>
//     </S.MainContainer>
//   );
// };

// export default Landing;

import landingBackgroundImage from '@/assets/images/landing_background.webp';
import landingLogo from '@/assets/images/landing_logo.webp';
import landingLogoRabbit from '@/assets/images/landing_logo_rabbit.webp';
import landingScroll from '@/assets/images/landing_scroll.webp';
import landingChat from '@/assets/images/landing_chat.webp';
import landingHelp from '@/assets/images/landing_help.webp';

import { Layout } from '@/components/commons/layout';
import theme from '@/styles/theme';
import { flotingAnimation } from '@/utils/flotingAnimation';

export default function Landing() {
  return (
    <Layout>
      <Wrapper>
        <Background src={landingBackgroundImage} alt="배경 이미지" />
        <FirstSection>
          <img src={landingLogo} alt="모두의 시간" width="80%" />
          <img
            src={landingLogoRabbit}
            alt="모두의 시간"
            width="80%"
            style={{ marginTop: '64px' }}
          />
          <ScrollWrapper>
            <img
              src={landingScroll}
              alt="스크롤해 보세요"
              width="150px"
              height="24px"
            />
          </ScrollWrapper>

          <Button>시작하기</Button>
        </FirstSection>

        <SecondSection>
          <h2>{`3인이상 약속을 잡을 때,\n일정 조율하기 어렵지 않으셨나요?`}</h2>
          <img src={landingChat} width="100%" />
          <img src={landingHelp} width="100%" style={{ marginTop: '76px' }} />
        </SecondSection>
      </Wrapper>
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
  padding: 14vh 20px 0 20px;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 32px;
  width: calc(100% - 40px);
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray01};
  border-radius: 6px;
  background: #4e62fb;
  ${theme.typography.semibold03};
`;

export const ScrollWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  animation: ${flotingAnimation} 2s infinite;
`;

export const SecondSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8vh 20px 0 20px;

  h2 {
    margin: 0 0 40px 0;
    white-space: pre-line;
    text-align: center;
    color: ${theme.colors.gray01};
    ${theme.typography.medium00};
  }
`;
