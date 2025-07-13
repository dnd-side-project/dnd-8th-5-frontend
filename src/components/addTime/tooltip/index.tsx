import {
  CloseButton,
  TooltipHandleIcon,
  GuideImage,
  Wrapper,
  Container,
  DragArea,
  DragAreaWrapper,
} from './index.styles';

import guideImage from '@/assets/images/add_time_guide.png';
import guideDragAreaImage from '@/assets/images/add_time_guide_drag_area.png';
import guideDragHandleImage from '@/assets/images/add_time_guide_handle.png';

import closeIcon from '@/assets/icons/close.png';
import { Dispatch, SetStateAction, useCallback } from 'react';

interface Props {
  isTooltipShown: boolean;
  setIsTooltipShown: Dispatch<SetStateAction<boolean>>;
}

const Tooltip = ({ isTooltipShown, setIsTooltipShown }: Props) => {
  const handleGuideCloseClick = useCallback(() => {
    localStorage.setItem('isTooltipShown', JSON.stringify(false));
    setIsTooltipShown(false);
  }, [isTooltipShown]);

  return (
    <Wrapper>
      <Container>
        <GuideImage src={guideImage} />
        <DragAreaWrapper>
          <DragArea src={guideDragAreaImage} />
          <TooltipHandleIcon src={guideDragHandleImage} />
        </DragAreaWrapper>
        <CloseButton src={closeIcon} onClick={handleGuideCloseClick} />
      </Container>
    </Wrapper>
  );
};

export default Tooltip;
