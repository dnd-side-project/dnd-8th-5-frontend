import styled from '@emotion/styled';
import theme from '../../styles/theme';
import landingBack from '@/assets/images/landingBack.webp';
import { flotingAnimation } from '@/utils/flotingAnimation';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 412px;
  height: 5948px;
  margin: 0 auto;
  background-image: url(${landingBack});
  background-size: auto;
  background-position: center;
  background-color: ${theme.colors.purple05};
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 150px;

  @media screen and (max-width: 375px) {
    padding-top: 100px;
  }

  height: 880px;

  .logo-header {
    width: calc(100% - 230px);
    padding-bottom: 13px;
  }

  .logo {
    width: calc(100% - 152px);
    height: 42px;
    margin-bottom: 58px;
  }

  .rabbit {
    width: 250px;
  }
`;

export const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 55px;
  gap: 6px;
  position: absolute;
  bottom: 100px;

  color: ${theme.colors.gray01};
  ${theme.typography.semibold04}

  .arrow {
    width: 17px;
    height: 19px;
  }

  animation: ${flotingAnimation} 2s 5;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  font-size: 22px;
  color: ${theme.colors.gray01};
  opacity: 0;
  transition: all 2s;
  transform: translateY(150px);

  align-items: center;
  ${theme.typography.semibold04}

  gap: 40px;

  white-space: pre-line;

  .title {
    text-align: center;
    color: ${theme.colors.gray01};
    ${theme.typography.semibold04};
    font-size: 22px;
  }

  .chat {
    width: calc(100% - 42px);
  }

  .logo {
    width: 199px;
    margin-inline: 10px;
  }

  .section {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .section-text {
      font-size: 28px;
    }
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
  padding-top: 250px;

  @media screen and (max-width: 375px) {
    gap: 200px;
  }

  white-space: pre-line;
`;

export const ContentWrapper = styled.div<{ index: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 22px;
  opacity: 0;
  transition: all 2s;
  transform: translateY(150px);

  img {
    width: ${(props) =>
      props.index == 2 ? 'calc(100% - 70px)' : 'calc(100% - 170px)'};
  }

  &:nth-of-type(4) {
    gap: 1px;
    margin-top: -70px;
  }

  @media screen and (max-width: 375px) {
    img {
      width: ${(props) =>
        props.index == 2 ? 'calc(100% - 40px)' : 'calc(100% - 140px)'};
    }
  }

  @media screen and (max-width: 390px) {
    &:nth-of-type(4) {
      margin-top: -100px;
    }

    img {
      width: ${(props) =>
        props.index == 2 ? 'calc(100% - 40px)' : 'calc(100% - 150px)'};
    }
  }
`;

export const LastWrapper = styled.div`
  margin-top: 180px;
  white-space: pre-line;
  text-align: center;
  opacity: 0;
  transition: all 2s;
  transform: translateY(50px);

  .title {
    color: ${theme.colors.gray01};
    ${theme.typography.semibold02}
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: center;
  white-space: pre-line;
  padding-bottom: 45px;

  .title-header {
    color: ${theme.colors.purple06};
    ${theme.typography.semibold06};
  }

  .title {
    color: ${theme.colors.gray07};
    ${theme.typography.semibold01};
  }
`;
