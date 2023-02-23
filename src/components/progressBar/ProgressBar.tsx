import {
  Bar,
  Proportion,
  Rabbit,
  RabbitWrapper,
  Span,
  Wrapper,
} from './progressBar.styles';
import { currentParticipants } from '../../types/roomInfo';

import rabbit0029 from '../../assets/images/rabbit0029.png';
import rabbit100 from '../../assets/images/rabbit100.png';
import rabbit6199 from '../../assets/images/rabbit6199.png';
import rabbit3060 from '../../assets/images/rabbit3060.png';

const ProgressBar = ({ headCount, participants }: currentParticipants) => {
  const proportion = participants.length / headCount;
  return (
    <>
      <RabbitWrapper>
        {proportion === 1 ? (
          <Rabbit position={proportion} src={rabbit100} alt="rabbit100" />
        ) : proportion > 0.6 ? (
          <Rabbit position={proportion} src={rabbit6199} alt="rabbit6199" />
        ) : proportion > 0.3 ? (
          <Rabbit position={proportion} src={rabbit3060} alt="rabbit3060" />
        ) : (
          <Rabbit position={proportion} src={rabbit0029} alt="rabbit0029" />
        )}
        <Proportion>
          <Span>{participants.length}</Span> / {headCount}
        </Proportion>
      </RabbitWrapper>

      <Wrapper>
        <Bar headCount={headCount} participantsNumber={participants.length} />
      </Wrapper>
    </>
  );
};

export default ProgressBar;
