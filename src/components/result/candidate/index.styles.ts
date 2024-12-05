import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 412px;
  margin-top: 10px;
  padding: 15px 17px;

  border-radius: 7px;
  background: ${theme.colors.purple01};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ProportionWrapper = styled.div`
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

  color: ${theme.colors.gray06};
  ${theme.typography.semibold03};
`;
