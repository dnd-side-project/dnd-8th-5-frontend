import { useState } from 'react';
import refresh from '@/assets/icons/refresh.svg';
import {
  Bottom,
  Button,
  ParticipantBlock,
  Refresh,
  RefreshButton,
  RefreshIcon,
} from './index.styles';
import { Wrapper } from '../index.styles';

interface Props {
  handleCloseBottomSheet: () => void;
  participants: string[];
  selectedParticipants: string[];
  handleSelectedParticipantsSelect: (participants: string[]) => void;
}

export function ParticipantOption({
  handleCloseBottomSheet,
  participants,
  selectedParticipants,
  handleSelectedParticipantsSelect,
}: Props) {
  const [selected, setSelected] = useState<string[]>(selectedParticipants);

  const handleSelectAllClick = () => {
    if (selected.length === participants.length) {
      setSelected([]);
      return;
    }

    setSelected(participants);
  };

  const handleParticipantClick = (participant: string) => {
    if (selected.includes(participant)) {
      const filtered = selected.filter((p) => p !== participant);
      setSelected(filtered);
      return;
    }

    setSelected([...selected, participant]);
  };

  const handleRefresh = () => {
    setSelected(participants);
  };

  const handleApplyClick = () => {
    if (selected.length === 0) {
      handleSelectedParticipantsSelect(participants);
      handleCloseBottomSheet();
      return;
    }

    handleSelectedParticipantsSelect(selected);
    handleCloseBottomSheet();
  };

  return (
    <>
      <Wrapper>
        <ParticipantBlock
          id="전체 참여자"
          onClick={handleSelectAllClick}
          isSelected={participants.length === selected.length}
        >
          전체
        </ParticipantBlock>
        {participants.map((participant) => (
          <ParticipantBlock
            key={participant}
            onClick={() => handleParticipantClick(participant)}
            isSelected={selected.includes(participant)}
          >
            {participant}
          </ParticipantBlock>
        ))}
      </Wrapper>
      <Bottom>
        <Refresh onClick={handleRefresh}>
          <RefreshIcon src={refresh} alt="refresh" />
          <RefreshButton>초기화</RefreshButton>
        </Refresh>
        <Button onClick={handleApplyClick}>적용하기</Button>
      </Bottom>
    </>
  );
}
