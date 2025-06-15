import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import IconTrash from './IconTrash';
import { Participant as ParticipantType } from '@/types/roomInfo';

interface Props {
  title: string;
  subtitle: string;
  onAction: () => void;
  closeModal: () => void;
  participants: ParticipantType[];
}

/** 임시 모달 */
export function Modal({
  title,
  subtitle,
  onAction,
  closeModal,
  participants,
}: Props) {
  const handleClose = () => {
    closeModal();
  };

  return (
    <>
      <Dim
        key="dim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={handleClose}
      />

      <ModalWrapper
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 50 }}
      >
        <ModalBody>
          <TextWrapper>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </TextWrapper>

          <ParticipantsWrapper count={participants.length}>
            {participants.map((participant) => (
              <Participant key={participant.id}>
                {participant.name.slice(0, 4)}
              </Participant>
            ))}
          </ParticipantsWrapper>

          <ButtonGroup>
            <CancelButton onClick={handleClose}>취소</CancelButton>
            <ActionButton onClick={onAction}>
              <IconTrash /> 삭제하기
            </ActionButton>
          </ButtonGroup>
        </ModalBody>
      </ModalWrapper>
    </>
  );
}

const Dim = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 800;
`;

const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 306px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  z-index: 801;
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 0 16px 0;
  background: #ffffff;
  border-radius: 18px;
  gap: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4px;
  padding: 0 16px;
`;

const Title = styled.div`
  color: #3b3b3b;
  ${theme.typography.semibold03}
`;

const Subtitle = styled.div`
  text-align: center;
  white-space: pre-line;
  color: ${theme.colors.gray05};
  ${theme.typography.regular02}
`;

const ParticipantsWrapper = styled.div<{ count: number }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${({ count }) => (count < 5 ? 'center' : 'flex-start')};
  padding: 8px 12px;
  margin: 0 16px;
  background: ${theme.colors.gray02};
  border-radius: 8px;
`;

const Participant = styled.div`
  width: 62px;
  padding: 6px 0;
  text-align: center;
  color: ${theme.colors.gray06};
  ${theme.typography.semibold06};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0 16px;
  gap: 8px;
  border-top: 1px solid ${theme.colors.gray03};
`;

const CancelButton = styled.button`
  width: 100%;
  padding: 12px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: ${theme.colors.gray05};
  background: #e9e9e9;
  ${theme.typography.medium03};
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 12px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  color: ${theme.colors.gray01};
  background: ${theme.colors.red02};
  ${theme.typography.medium03};
`;
