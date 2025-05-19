import { useState } from 'react';

import { ToggleBtn, ToggleText, Circle } from './index.styles';
import { useSetRecoilState } from 'recoil';
import { createRoomAtom } from '@/atoms/createRoomAtom';

interface ToggleProps {
  text: Array<string>;
  toggle: boolean;
  setData: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle = ({ text, toggle, setData }: ToggleProps) => {
  const [isToggle, setIsToggle] = useState(toggle);
  const setRecoilRoom = useSetRecoilState(createRoomAtom);

  const clickedToggle = () => {
    setData((prev) => !prev);
    setIsToggle((prev) => !prev);
    setRecoilRoom((prev) => ({ ...prev, isRangeSelect: !isToggle, dates: [] }));
  };

  return (
    <ToggleBtn onClick={clickedToggle} toggle={isToggle}>
      <ToggleText>{text[1]}</ToggleText>
      <ToggleText>{text[0]}</ToggleText>
      <Circle toggle={!isToggle}>{isToggle ? text[0] : text[1]}</Circle>
    </ToggleBtn>
  );
};

export default Toggle;
