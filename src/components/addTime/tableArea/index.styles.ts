import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 0 0 0;
`;

export const TableWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  top: 0;
  right: 20px;
`;

export const MoveButton = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;
