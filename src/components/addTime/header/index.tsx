import iconBack from '@/assets/icons/room_header_back.svg';
import {
  InfoWrapper,
  Title,
  Wrapper,
  ProgressBarWrapper,
  ProgressBar,
  Blank,
} from './index.styles';
import { useNavigate } from 'react-router-dom';

const STEPS = ['date', 'timer'];

export interface RoomHeaderProps {
  title: string;
  currentStep: 'date' | 'timer';
}

export function RoomHeader({ title, currentStep }: RoomHeaderProps) {
  const navigate = useNavigate();
  const step = STEPS.indexOf(currentStep);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Wrapper>
        <InfoWrapper>
          <img
            src={iconBack}
            alt="이전 단계 이동 버튼"
            onClick={handleBackClick}
          />
          <Title>{title}</Title>
          <Blank />
        </InfoWrapper>

        <ProgressBarWrapper>
          <ProgressBar
            precentage={step === -1 ? 0 : ((step + 1) / STEPS.length) * 100}
          />
        </ProgressBarWrapper>
      </Wrapper>
    </>
  );
}
