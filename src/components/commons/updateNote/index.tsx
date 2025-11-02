import { CSSProperties } from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import RocketIcon from './Rocket';
import ChevronRightIcon from './ChevronRight';

// const SHOW_UNTIL = 1755615599;
const UPDATE_NOTE_URL =
  'https://corinthionia.notion.site/25-10-19-5-2917f0f8f02480f28224fedc3b77f748';

export function UpdateNote({
  isRoomStart = false,
  style,
}: {
  isRoomStart?: boolean;
  style?: CSSProperties;
}) {
  // const now = Math.floor(Date.now() / 1000);
  // if (now > SHOW_UNTIL) return null;

  return (
    <Wrapper
      id="update-note"
      href={UPDATE_NOTE_URL}
      target="_blank"
      rel="noopener noreferrer"
      isRoomStart={isRoomStart}
      style={style}
    >
      <RocketIcon />
      <strong>업데이트 소식</strong>
      <span>|</span>
      <Content isRoomStart={isRoomStart}>
        <span>5개 이상의 조율 결과를 확인할 수 있어요.</span>
        <ChevronRightIcon size={16} />
      </Content>
    </Wrapper>
  );
}

export const Wrapper = styled.a<{ isRoomStart: boolean }>`
  position: ${({ isRoomStart }) => (isRoomStart ? 'absolute' : 'relative')};
  top: ${({ isRoomStart }) => (isRoomStart ? '20px' : 0)};
  left: 0;
  margin: 0 20px 16px 20px;
  width: calc(100% - 40px);
  max-width: 462px;
  background: ${({ isRoomStart }) =>
    isRoomStart ? '#b6bfff' : theme.colors.gray02};
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  gap: 4px;

  strong {
    color: rgba(44, 63, 128, 1);
    ${theme.typography.medium05};
    user-select: none;
  }

  span {
    color: rgba(44, 63, 128, 0.8);
    ${theme.typography.regular03};
    user-select: none;
  }
`;

export const Content = styled.div<{ isRoomStart: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  span {
    color: rgba(44, 63, 128, 0.8);
    ${theme.typography.regular03};
    user-select: none;
  }
`;
