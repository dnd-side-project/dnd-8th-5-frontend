import styled from '@emotion/styled';
import Calendar from '../../components/calendar/Calendar';
import RoomHeader from '../../components/roomHeader/RoomHeader';
import theme from '../../styles/theme';

const RoomCalendar = () => {
  return (
    <MainContainer>
      <HeaderContainer>
        <RoomHeader index={'1/2'} title={'날짜와 시간대를 정해볼까요?'} />
      </HeaderContainer>
      <Calendar />
    </MainContainer>
  );
};

export const MainContainer = styled.div`
  width: 375px;
  max-width: 375px;
  position: relative;
  left: 0;
  right: 0;
  height: 812px;
  background-color: ${theme.colors.gray03};
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 78px;
  left: 20px;
`;

export default RoomCalendar;
