import styled from '@emotion/styled';

import home from '../../assets/icons/home.svg';
import theme from '../../styles/theme';
import shareResult from '../../assets/icons/shareResult.svg';
import bubble from '../../assets/images/bubble.png';

const ResultButton = () => {
  return (
    <Wrapper>
      <Bubble src={bubble} alt="go to current page bubble" />
      <BottomWrapper>
        <CurrentButtonWrapper>
          <CurrentButton src={home} alt="go to current page" />
        </CurrentButtonWrapper>
        <BottomButton>
          결과 공유하기
          <ShareButton src={shareResult} alt="share" />
        </BottomButton>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 375px;
  height: 117px;
  padding: 0 20px;

  /* background: pink; */

  position: fixed;
  z-index: 3;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Bubble = styled.img`
  width: 142px;
  height: 27px;
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: 90px;

  background: ${theme.colors.gray01};
  border-top: 1px solid ${theme.colors.gray02};

  display: flex;
  justify-content: space-between;
  padding: 10px 0 28px 0;
  /* background: powderblue; */
`;

const CurrentButtonWrapper = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.gray01};

  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.1));
`;

const CurrentButton = styled.img`
  width: 24px;
  height: 24px;
`;

const BottomButton = styled.button`
  width: 273px;
  height: 52px;
  border-radius: 6px;

  ${theme.typography.semibold03};
  color: ${theme.colors.gray01};
  background: ${theme.colors.purple06};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ShareButton = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export default ResultButton;
