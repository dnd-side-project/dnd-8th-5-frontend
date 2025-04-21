import Lottie from 'lottie-react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import topImage from '@/assets/images/event_modal_top.png';
import animationData from '@/assets/data/interview_event_lottie.json';
import animationData2 from '@/assets/data/interview_event_lottie2.json';
const CLOSE_EVENT_MODAL_UNTIL = 'CLOSE_EVENT_MODAL_UNTIL';
import { IconClose } from './close';

interface Props {
  closeModal: () => void;
}

/** 임시 이벤트 모달 */
export function EventModal({ closeModal }: Props) {
  const randomAnimation = Math.random() > 0.5 ? animationData : animationData2;

  const handleClose = () => {
    closeModal();
  };

  const handleCloseTodayTextClick = () => {
    closeModal();
    localStorage.setItem(
      CLOSE_EVENT_MODAL_UNTIL,
      `${new Date().getTime() + 1000 * 60 * 60 * 24}`
    );
  };

  const handleButtonClick = () => {
    window.open('https://m.site.naver.com/1Gs94', '_blank');
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
        <Top>
          <span onClick={handleCloseTodayTextClick}>하루 동안 보지 않기</span>
          <button onClick={handleClose}>
            <IconClose size={30} fill="#ffffff" />
          </button>
        </Top>

        <Modal>
          <ModalHeader>
            <ModalHeaderImage src={topImage} alt="이벤트 모달 상단 이미지" />
            <P>{`불편했던 점이나 아쉬웠던 경험이 있다면 자유롭게 들려주세요`}</P>
          </ModalHeader>

          <LottieWrapper>
            <Lottie animationData={randomAnimation} loop={true} />
          </LottieWrapper>

          <ApplyButton onClick={handleButtonClick}>지금 참여하기</ApplyButton>
        </Modal>
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
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 800;
`;

const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 324px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  z-index: 801;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: white;
    font-size: 14px;
    font-weight: 600px;
    cursor: pointer;
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px 16px;
  background: #7282ff;
  border-radius: 18px;
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const ModalHeaderImage = styled.img`
  width: 100%;
`;

const LottieWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 18px 0 33px 0;
  overflow: hidden;
`;

const P = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.35;
  text-align: center;
  white-space: pre-line;
`;

const ApplyButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 100px;
  background: #ffe465;
  font-size: 16px;
`;
