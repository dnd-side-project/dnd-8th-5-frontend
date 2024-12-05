import { useEffect, useRef, useState } from 'react';
import {
  AccordionIcon,
  Group,
  GroupInfo,
  InfoText,
  Item,
  ItemWrapper,
  ListWrapper,
  NameBlock,
  NameList,
  Wrapper,
} from './index.styles';
import accordionUnfold from '@/assets/icons/accordionUnfold.svg';

interface Props {
  title: string;
  defaultOpen?: boolean;
  totalCount: number;
  availableParticipantNames: string[];
  unavailableParticipantNames: string[];
}

const Accordion = ({
  title,
  defaultOpen = false,
  totalCount,
  availableParticipantNames,
  unavailableParticipantNames,
}: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const [isCollapsed, setIsCollapsed] = useState<boolean>(defaultOpen);

  useEffect(() => {
    if (defaultOpen && parentRef.current && childRef.current) {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
  }, [defaultOpen]);

  const handleClickAccordion = () => {
    if (
      totalCount === 0 ||
      parentRef.current === null ||
      childRef.current === null
    ) {
      return;
    }

    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = '0px';
    } else if (parentRef.current.clientHeight === 0) {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }

    setIsCollapsed(!isCollapsed);
  };

  return (
    <Wrapper>
      <Group onClick={handleClickAccordion}>
        <GroupInfo>{title}</GroupInfo>
        {!!totalCount && (
          <AccordionIcon
            src={accordionUnfold}
            alt={isCollapsed ? '펼치기' : '접기'}
            isCollapsed={isCollapsed}
          />
        )}
      </Group>

      <ListWrapper ref={parentRef}>
        <ItemWrapper ref={childRef}>
          <Item>
            <InfoText>
              <span>{`${totalCount}명 중 `}</span>
              <span className="available">{`${availableParticipantNames.length}명 가능`}</span>
            </InfoText>
            <NameList>
              {!!availableParticipantNames.length &&
                availableParticipantNames.map((name) => (
                  <NameBlock key={name}>{name.slice(0, 4)}</NameBlock>
                ))}
            </NameList>
          </Item>

          <Item>
            <InfoText>
              <span>{`${totalCount}명 중 `}</span>
              <span className="unavailable">{`${unavailableParticipantNames.length}명 불가능`}</span>
            </InfoText>
            <NameList>
              {!!unavailableParticipantNames.length &&
                unavailableParticipantNames.map((name) => (
                  <NameBlock key={name}>{name.slice(0, 4)}</NameBlock>
                ))}
            </NameList>
          </Item>
        </ItemWrapper>
      </ListWrapper>
    </Wrapper>
  );
};

export default Accordion;
