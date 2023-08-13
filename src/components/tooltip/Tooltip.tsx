import {
  CloseButton,
  TooltipHandleIcon,
  TooltipIcon,
  Wrapper,
} from './Tooltip.styles';

import guideIcon from '@/assets/icons/guide.png';
import guideHandle from '@/assets/icons/guideHandle.png';
import closeIcon from '@/assets/icons/close.png';
import { useCallback } from 'react';

const Tooltip = ({ isTooltipShown, setIsTooltipShown }: any) => {
  const handleGuideCloseClick = useCallback(() => {
    localStorage.setItem('isTooltipShown', JSON.stringify(false));
    setIsTooltipShown(false);
  }, [isTooltipShown]);

  return (
    <Wrapper>
      <TooltipIcon src={guideIcon} />
      <TooltipHandleIcon src={guideHandle} />
      <CloseButton src={closeIcon} onClick={handleGuideCloseClick} />
    </Wrapper>
  );
};

export default Tooltip;
