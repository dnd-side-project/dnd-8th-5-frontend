import styled from '@emotion/styled';
import theme from '@/styles/theme';
import inviteBack from '@/assets/images/inviteBack.webp';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 412px;
  height: calc(100vh + 90px);
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-size: cover;
  background-image: url(${inviteBack});
  display: flex;
  justify-content: center;
  overscroll-behavior: none;
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 153px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Calendar = styled.img`
  width: 161.5px;
  top: 153px;
`;

export const TitleWrapper = styled.div`
  top: 153px;
  color: ${theme.colors.gray01};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 34px;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 130%;
`;

export const SubTitle = styled.div`
  ${theme.typography.medium02}
`;

export const BoxWrapper = styled.div`
  position: absolute;
  top: 388px;
  width: calc(100% - 40px);
  height: 202px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
`;

export const UpperBoxWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  display: flex;
  align-items: center;
  padding-left: 27px;
  color: ${theme.colors.gray01};
`;

export const LowerBoxWrapper = styled.div`
  width: calc(100% - 54px);
  padding-top: 17px;
  margin: 0 auto;
`;

export const ParticipantsTitle = styled.div`
  ${theme.typography.semibold04}
  color: ${theme.colors.gray01};
  margin-bottom: 8px;
`;

export const ParticipantsWraaper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  white-space: normal;
  flex-basis: 100%;
`;

export const Participant = styled.div`
  width: 72px;
  height: 33px;
  margin-right: 6px;
  margin-bottom: 6px;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  ${theme.typography.semibold06}
  color: ${theme.colors.purple06};

  @media screen and (max-width: 412px) {
    width: 64px;
  }
`;

export const RoomTitle = styled.div`
  ${theme.typography.semibold02}
`;

export const BottomButton = styled.button`
  width: calc(100% - 40px);
  max-width: 375px;
  height: 52px;
  margin: 0 auto;
  position: absolute;
  border-radius: 6px;
  ${theme.typography.semibold03};
  color: ${theme.colors.purple06};
  background: ${theme.colors.gray01};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 636px;
  left: 0;
  right: 0;
  bottom: 28px;
`;

export const BottomSubButton = styled.button`
  width: calc(100% - 40px);
  max-width: 375px;
  height: 52px;
  margin: 0 auto;
  position: absolute;
  border-radius: 6px;
  ${theme.typography.semibold04};
  color: ${theme.colors.gray01};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 690px;
`;
