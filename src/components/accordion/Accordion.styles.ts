import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 412px;
  margin-top: 10px;

  border-radius: 7px;
  background: ${theme.colors.purple01};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DefaultWrapper = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Content = styled.div`
  width: 100%;
  height: 73px;
  padding: 15px 19px 15px 17px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const PeopleWrapper = styled.div`
  width: 100%;
`;

export const People = styled.span<{ isParticipant: boolean }>`
  color: ${({ isParticipant }) =>
    isParticipant ? `${theme.colors.orange02}` : `${theme.colors.gray05}`};

  ${theme.typography.semibold07};
`;

export const TimeWrapper = styled.div`
  width: 100%;
  margin-top: 4px;

  display: flex;
  justify-content: space-between;
`;

export const TimeSpan = styled.span`
  color: ${theme.colors.gray06};
  ${theme.typography.semibold03};
`;

export const Icon = styled.img`
  width: 21px;
  height: 21px;

  cursor: pointer;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 0px;

  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

export const ListItem = styled.div`
  width: 100%;
  padding: 17px;

  display: flex;
  flex-flow: wrap;

  row-gap: 4px;
  column-gap: 4px;
`;

export const Participant = styled.div`
  width: 44px;
  height: 24px;
  border-radius: 3px;

  ${theme.typography.medium05};
  color: ${theme.colors.gray05};
  background: ${theme.colors.gray01};

  display: flex;
  align-items: center;
  justify-content: center;
`;
