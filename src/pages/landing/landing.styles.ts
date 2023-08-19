import styled from '@emotion/styled';
import theme from '../../styles/theme';
import landingBack from '@/assets/images/landingBack.webp';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 412px;
  height: 6000px; /* 뷰포트 높이에 맞춤 */
  margin: 0 auto;
  background-image: url(${landingBack});
  background-size: cover;
  background-color: ${theme.colors.purple05};
`;

export const StartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 130px;
  height: 100vh;

  .logo-header {
    ${theme.typography.semibold02}
    background: linear-gradient(180deg, #e3e7ff 0%, #f8f8ff 100%);
    color: transparent;
    -webkit-background-clip: text;
    padding-bottom: 12px;
  }

  .logo {
    width: 250px;
    height: 42px;
    margin-bottom: 58px;
  }

  .rabbit {
    width: 280px;
    height: 294px;
  }
`;

export const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 95px;
  gap: 6px;

  color: ${theme.colors.gray01};
  ${theme.typography.semibold04}

  .arrow {
    width: 17px;
    height: 19px;
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 690px;
  font-size: 22px;
  color: ${theme.colors.gray01};

  align-items: center;
  ${theme.typography.semibold04}

  gap: 40px;

  white-space: pre-line;

  text {
    text-align: center;
    color: ${theme.colors.gray01};
    ${theme.typography.semibold04};
    font-size: 22px;
  }

  .chat {
    width: 407px;
  }

  .logo {
    width: 199px;
    margin-inline: 10px;
  }

  .section {
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    text {
      font-size: 28px;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 90px;
`;

export const FirstWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 22px;
  padding-top: 240px;

  white-space: pre-line;

  img {
    width: calc(100% - 142px);
  }
`;

export const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 22px;

  img {
    width: calc(100% - 41px);
  }
`;

export const ThirdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 22px;

  img {
    width: calc(100% - 140px);
  }
`;

export const FourthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  img {
    width: calc(100% - 144px);
  }
`;

export const LastWrapper = styled.div`
  margin-top: 210px;
  white-space: pre-line;
  text-align: center;
  text {
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
  padding-bottom: 35px;

  .title-header {
    color: ${theme.colors.purple06};
    ${theme.typography.semibold06};
  }

  .title {
    color: ${theme.colors.gray07};
    ${theme.typography.semibold01};
  }
`;
