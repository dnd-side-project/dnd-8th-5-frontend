import {
  Bar,
  BarWrapper,
  Proportion,
  Rabbit,
  RabbitWrapper,
  Span,
  Wrapper,
} from './progressBar.styles';
import { useEffect, useRef, useState } from 'react';

import { currentParticipants } from '../../types/roomInfo';

import rabbit0029 from '../../assets/images/rabbit0029.png';
import rabbit100 from '../../assets/images/rabbit100.png';
import rabbit6199 from '../../assets/images/rabbit6199.png';
import rabbit3060 from '../../assets/images/rabbit3060.png';

const ProgressBar = ({ headCount, participants }: currentParticipants) => {
  // const progress = (headCount && participants.length / headCount) || 0;
  const progress = (headCount && 1 / headCount) || 0;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const rabbitRef = useRef<HTMLImageElement>(null);

  const [position, setPosition] = useState<number>(20);

  useEffect(() => {
    const wrapperWidth = (wrapperRef.current as HTMLDivElement).offsetWidth;
    const barRect = barRef.current?.getBoundingClientRect().right;

    console.log(barRect, barRef.current?.offsetWidth, wrapperWidth);

    if (barRef.current && barRect) {
      if (barRect < wrapperWidth) {
        setPosition(barRef.current.offsetWidth);
      } else {
        setPosition(wrapperWidth - 40);
      }
    }
  }, [barRef]);

  return (
    <Wrapper ref={wrapperRef}>
      <RabbitWrapper>
        {
          <Rabbit
            ref={rabbitRef}
            src={
              progress === 1
                ? rabbit100
                : progress > 0.6
                ? rabbit6199
                : progress > 0.3
                ? rabbit3060
                : rabbit0029
            }
            alt="rabbit100"
            style={{ left: `${position - 36}px` }}
          />
        }
        <Proportion>
          <Span>{participants.length}</Span> / {headCount}
        </Proportion>
      </RabbitWrapper>

      <BarWrapper>
        <Bar
          ref={barRef}
          headCount={headCount || 0}
          // participantsNumber={participants.length}
          participantsNumber={1}
        />
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
