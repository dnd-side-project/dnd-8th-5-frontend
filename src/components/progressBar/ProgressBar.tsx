import {
  Bar,
  BarCover,
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
  const progress = (headCount && participants.length / headCount) || 0;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const rabbitRef = useRef<HTMLImageElement>(null);
  const proportionRef = useRef<HTMLDivElement>(null);

  const [leftPosition, setLeftPosition] = useState<number>(0);

  useEffect(() => {
    const barRect = barRef.current?.offsetWidth;
    const proportionWidth = proportionRef.current?.offsetWidth;

    if (barRect) {
      if (barRect < 34) {
        setLeftPosition(0);
      } else if (34 <= barRect && barRect < 260) {
        setLeftPosition(barRect - 30);
      } else {
        if (proportionWidth) {
          setLeftPosition(254 - (proportionWidth - 20));
        }
      }
    }
  }, [barRef.current?.offsetWidth]);

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
            leftPosition={leftPosition}
          />
        }
        <Proportion ref={proportionRef}>
          <Span>{participants.length}</Span> / {headCount}
        </Proportion>
      </RabbitWrapper>

      <BarWrapper>
        <BarCover
          ref={barRef}
          headCount={headCount || 0}
          participantsNumber={participants.length}
        >
          <Bar />
        </BarCover>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
