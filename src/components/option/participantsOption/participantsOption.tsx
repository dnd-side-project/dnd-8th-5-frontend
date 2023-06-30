import { useState, MouseEvent, TouchEvent, useEffect } from 'react';

import {
  Bottom,
  Button,
  Refresh,
  RefreshButton,
  RefreshIcon,
} from './participantsOption.styles';
import { Wrapper } from '../index.styles';

import {
  Participants,
  ParticipantsOptionTypes,
} from './participantsOption.types';

import Participant from './Pariticipant';
import refresh from '../../../assets/icons/refresh.svg';

const ParticipantsOption = ({
  setIsParticipantOpened,
  participantsList,
  setParticipantsList,
}: ParticipantsOptionTypes) => {
  const [isSelectedAll, setIsSelectedAll] = useState<boolean>(false);
  const [updatedList, setUpdatedList] =
    useState<Participants[]>(participantsList);

  const selectedCount = updatedList.filter(
    ({ isSelected }: { isSelected: boolean }) => isSelected === true
  ).length;

  const handleSelectAll = () => {
    const newList = updatedList.map((participant: Participants) => ({
      ...participant,
      isSelected: !isSelectedAll,
    }));

    setUpdatedList(newList);
    setIsSelectedAll(!isSelectedAll);
  };

  const handleBlockClick = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    const target = e.target as HTMLDivElement;

    const newList = updatedList.map(({ name, isSelected }: Participants) =>
      name === target.id
        ? { name: name, isSelected: !isSelected }
        : { name: name, isSelected: isSelected }
    );

    setUpdatedList(newList);
  };

  const handleRefresh = () => {
    const newList = updatedList.map(({ name }: { name: string }) => ({
      name: name,
      isSelected: false,
    }));

    setUpdatedList(newList);
  };

  const handleApplyClick = () => {
    if (selectedCount === 0) {
      const newList = updatedList.map((participant: Participants) => ({
        ...participant,
        isSelected: true,
      }));

      setParticipantsList(newList);
      setIsSelectedAll(true);
    } else {
      setParticipantsList(updatedList);
    }

    setIsParticipantOpened(false);
  };

  useEffect(() => {
    setIsSelectedAll(selectedCount === updatedList.length);
  }, [updatedList, setIsSelectedAll]);

  return (
    <>
      <Wrapper>
        <Participant
          id="전체참여자"
          onClick={handleSelectAll}
          isSelected={isSelectedAll}
        />
        {updatedList.map(({ name, isSelected }: Participants) => (
          <Participant
            onClick={handleBlockClick}
            key={name}
            id={name}
            isSelected={isSelected}
          />
        ))}
      </Wrapper>
      <Bottom>
        <Refresh onClick={handleRefresh}>
          <RefreshIcon src={refresh} alt="refresh" />
          <RefreshButton>새로고침</RefreshButton>
        </Refresh>
        <Button onClick={handleApplyClick}>적용하기</Button>
      </Bottom>
    </>
  );
};

export default ParticipantsOption;
