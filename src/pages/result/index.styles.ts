import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;

export const Body = styled.div`
  width: 100%;
  padding: 76px 0 117px 0;
`;

export const TitleWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 20px;
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
  margin-top: 32px;
  padding: 0 20px;
`;

export const NobodyWrapper = styled.div`
  padding: 28px 0;
  margin: 14px 20px 0 20px;

  border-radius: 7px;
  border: 1px dashed ${theme.colors.gray03};
  background: ${theme.colors.gray02};

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Nobody = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NobodyRabbit = styled.img`
  width: 37px;
  height: 49px;
  object-fit: scale-down;
`;

export const NobodyText = styled.span`
  color: ${theme.colors.gray04};
  ${theme.typography.medium02};
`;
