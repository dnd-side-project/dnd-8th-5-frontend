import {
  CloseButton,
  TooltipHandleIcon,
  TooltipIcon,
  Wrapper,
} from './index.styles';

import guideIcon from '@/assets/icons/guide.png';
import guideHandle from '@/assets/icons/guideHandle.png';
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
      <TooltipIcon src={guideIcon} />
      <TooltipHandleIcon src={guideHandle} />
      <CloseButton src={closeIcon} onClick={handleGuideCloseClick} />
    </Wrapper>
  );
};

export default Tooltip;
