import theme from '@/styles/theme';
import styled from '@emotion/styled';

export function Loading() {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
}

const Spinner = styled.div`
  position: 'absolute';
  display: inline-block;
  width: 36px;
  height: 36px;
  border: 4px solid ${theme.colors.purple02};
  border-top-color: ${theme.colors.purple06};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
