import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 412px;
  margin: 0 auto;
`;

export const Body = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 30px;
  overflow: scroll;

  padding-bottom: 117px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;

export const Title = styled.span<{ isNumber: boolean }>`
  margin-left: ${({ isNumber }) => (isNumber ? `6px` : `0`)};
  ${theme.typography.semibold02};

  color: ${({ isNumber }) =>
    isNumber ? ` ${theme.colors.orange02}` : ` ${theme.colors.gray07}`};
`;

export const SelectWrapper = styled.div`
  width: 100%;
  height: 33px;
  margin-top: 34px;
`;

export const NobodyWrapper = styled.div`
  width: 100%;
  height: 161px;
  margin-top: 14px;

  border-radius: 7px;
  border: 1px dashed ${theme.colors.gray03};
  background: ${theme.colors.gray02};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nobody = styled.div`
  width: 188px;
  height: 105px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const NobodyRabbit = styled.img`
  width: 50px;
  height: 68px;
  object-fit: scale-down;
`;

export const NobodyText = styled.span`
  color: ${theme.colors.gray04};
  ${theme.typography.semibold03};
`;

// export const TimeWrapper = styled.div<{ isConfirmed: boolean }>`
//   width: 100%;
//   height: 64px;
//   padding: 0 20px;
//   margin-top: 10px;

//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   background: ${({ isConfirmed }) =>
//     isConfirmed ? `${theme.colors.purple06}` : `${theme.colors.purple01}`};
//   color: ${({ isConfirmed }) =>
//     isConfirmed ? `${theme.colors.gray01}` : `${theme.colors.gray06}`};

//   border-radius: 7px;
//   ${theme.typography.semibold03};
// `;
