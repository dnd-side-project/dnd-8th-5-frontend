import { useState, useCallback } from 'react';

import { ToggleBtn, ToggleText, Circle } from './Toggle.styles';

interface ToggleProps {
  text: Array<string>;
  toggle: boolean;
  setData: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle = (props: ToggleProps) => {
  const [isToggle, setIsToggle] = useState(props.toggle);

  const clickedToggle = useCallback(() => {
    props.setData((prev) => !prev);
    setIsToggle((prev) => !prev);
  }, [isToggle]);

  return (
    <ToggleBtn onClick={clickedToggle} toggle={isToggle}>
      <ToggleText>{props.text[0]}</ToggleText>
      <ToggleText>{props.text[1]}</ToggleText>
      <Circle toggle={isToggle}>
        {isToggle ? props.text[0] : props.text[1]}
      </Circle>
    </ToggleBtn>
  );
};

export default Toggle;
