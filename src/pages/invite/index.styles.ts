import styled from '@emotion/styled';
import theme from '@/styles/theme';
import inviteBg from '@/assets/images/invite_bg.webp';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 412px;
  height: 100vh;
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-size: cover;
  background-image: ${() => `url(${inviteBg})`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Calendar = styled.img`
  width: 162px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  color: ${theme.colors.gray01};
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 130%;
`;

export const SubTitle = styled.div`
  ${theme.typography.regular01}
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  margin: 40px 0 0 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  filter: drop-shadow(0px 0px 9px rgba(45, 55, 127, 0.2));
  backdrop-filter: blur(13px);
`;

export const UpperBoxWrapper = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  padding: 16px 28px;
  color: ${theme.colors.gray01};
`;

export const LowerBoxWrapper = styled.div`
  width: 100%;
  padding: 16px 28px 32px 28px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ParticipantsTitle = styled.div`
  ${theme.typography.medium02}
  color: ${theme.colors.gray01};
  margin-bottom: 8px;
`;

export const ParticipantsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  flex-direction: row;
`;

export const Participant = styled.div`
  width: 62px;
  height: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  ${theme.typography.medium04}
  color:  ${theme.colors.purple06};

  @media screen and (max-width: 412px) {
    width: 64px;
  }
`;

export const RoomTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 130%;
`;

export const BottomButton = styled.button`
  width: calc(100% - 40px);
  max-width: 375px;
  height: 52px;
  margin: 44px 0 0 0;
  border-radius: 6px;
  ${theme.typography.medium01};
  color: ${theme.colors.purple06};
  background: ${theme.colors.gray01};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BottomSubButton = styled.button`
  width: calc(100% - 40px);
  max-width: 375px;
  margin: 20px 0 0 0;
  padding: 0;
  border-radius: 6px;
  ${theme.typography.medium02};
  color: ${theme.colors.gray01};
  display: flex;
  align-items: center;
  justify-content: center;
`;
