import { useState, useCallback } from 'react';

import { ToggleBtn, ToggleText, Circle } from './index.styles';

interface ToggleProps {
  text: Array<string>;
  toggle: boolean;
  setData: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle = ({ text, toggle, setData }: ToggleProps) => {
  const [isToggle, setIsToggle] = useState(toggle);

  const clickedToggle = useCallback(() => {
    setData((prev) => !prev);
    setIsToggle((prev) => !prev);
  }, [isToggle]);

  return (
    <ToggleBtn onClick={clickedToggle} toggle={isToggle}>
      <ToggleText>{text[0]}</ToggleText>
      <ToggleText>{text[1]}</ToggleText>
      <Circle toggle={isToggle}>{isToggle ? text[0] : text[1]}</Circle>
    </ToggleBtn>
  );
};

export default Toggle;
