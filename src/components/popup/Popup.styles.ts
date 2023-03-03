import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.45);
`;

export const Wrapper = styled.div`
  width: 305px;
  height: 198px;
  padding: 48px 22px 28px 22px;

  border-radius: 10px;
  background: ${theme.colors.gray01};

  position: absolute;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  color: ${theme.colors.gray07};
  ${theme.typography.semibold02};
`;

export const Subtitle = styled.span`
  margin-top: 7px;
  color: ${theme.colors.gray06};
  ${theme.typography.regular02};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 44px;
  margin-top: 27px;

  display: flex;
  justify-content: space-between;
`;

export const NoButton = styled.button`
  width: 99px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  ${theme.typography.semibold04};
  color: ${theme.colors.purple06};
  border: 1px solid ${theme.colors.purple06};
`;

export const ConfirmButton = styled.button`
  width: 154px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  ${theme.typography.semibold04};
  color: ${theme.colors.gray01};
  background: ${theme.colors.purple06};
`;
