import { useEffect, useState, MouseEvent, TouchEvent } from 'react';

import Participant from './Pariticipant';
import { SelectParticipantsTypes } from './resultOption.types';

import refresh from '../../assets/icons/refresh.svg';
import {
  Bottom,
  Button,
  Refresh,
  RefreshButton,
  RefreshIcon,
  Wrapper,
} from './SelectParticipants.styles';

interface ParticipantTypes {
  name: string;
  isSelected: boolean;
}

const SelectParticipants = ({
  participants,
  setFilteredParticipants,
  setNameQS,
  selectedList,
  setSelectedList,
  setIsParticipantOpened,
}: SelectParticipantsTypes) => {
  const participantsList: any = participants.map((participant: string) =>
    selectedList.indexOf(participant) === -1
      ? { name: participant, isSelected: false }
      : { name: participant, isSelected: true }
  );

  const [isSelectedAll, setIsSelectedAll] = useState<boolean>(false);
  const [selectedParticipants, setSelectedParticipants] =
    useState(participantsList);

  const handleBlockClick = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    const targetId = (e.target as HTMLDivElement).id;
    const idx = selectedList.findIndex((name) => name === targetId);

    const updateSelectedListByTargetId = (selectedValue: boolean) => {
      const newList = selectedParticipants.map(
        ({ name, isSelected }: ParticipantTypes) =>
          name === targetId
            ? { name: name, isSelected: selectedValue }
            : { name: name, isSelected: isSelected }
      );

      setSelectedParticipants(newList);
    };

    const updateSelectedListByValue = (selectedValue: boolean) => {
      const newList = selectedParticipants.map(
        ({ name, isSelected }: ParticipantTypes) =>
          isSelected == selectedValue
            ? { name: name, isSelected: !selectedValue }
            : { name: name, isSelected: isSelected }
      );

      setSelectedParticipants(newList);
    };

    if (idx === -1) {
      setSelectedList([...selectedList, targetId]);

      updateSelectedListByTargetId(true);
    } else {
      const newList = selectedList.filter((name) => name !== targetId);
      setSelectedList(newList);

      updateSelectedListByTargetId(false);

      if (selectedList.length === selectedParticipants.length) {
        setIsSelectedAll(false);
      }
    }
  };

  const handleAllClick = () => {
    if (selectedList.length === selectedParticipants.length) {
      setIsSelectedAll(false);
      setSelectedList([]);
    } else {
      setIsSelectedAll(true);

      // const newList = selectedParticipants.map(
      //   ({ name, isSelected }: ParticipantTypes) =>
      //     isSelected == false
      //       ? { name: name, isSelected: true }
      //       : { name: name, isSelected: isSelected }
      // );

      // setSelectedParticipants(newList);

      // const newArr = newList.map(({ name }: { name: string }) => name);
      // setSelectedList(newArr);
    }
  };

  useEffect(() => {
    if (selectedList.length === selectedParticipants.length) {
      setIsSelectedAll(true);
    }
  }, [selectedList]);

  const handleRefresh = () => {
    setIsSelectedAll(false);
    setSelectedList([]);

    // const newList = selectedParticipants.map(
    //   ({ name, isSelected }: ParticipantTypes) =>
    //     isSelected == true
    //       ? { name: name, isSelected: false }
    //       : { name: name, isSelected: isSelected }
    // );
    // setSelectedParticipants(newList);
  };

  const handleApplyClick = () => {
    setIsParticipantOpened(false);

    if (selectedList.length === 0) {
      setIsSelectedAll(true);

      // const newList = selectedParticipants.map(
      //   ({ name, isSelected }: ParticipantTypes) =>
      //     isSelected == false
      //       ? { name: name, isSelected: true }
      //       : { name: name, isSelected: isSelected }
      // );

      // setSelectedParticipants(newList);

      // const newArr = newList.map(({ name }: { name: string }) => name);
      // setSelectedList(newArr);
    }

    const selected = selectedParticipants.filter(
      (participant: ParticipantTypes) => participant.isSelected === true
    );

    setFilteredParticipants(selected);

    const qs = selected.map(
      (participant: ParticipantTypes) => `name=${participant.name}&`
    );
    setNameQS(qs.join(''));
  };

  return (
    <>
      <Wrapper>
        <Participant
          id="전체참여자"
          onClick={handleAllClick}
          isSelected={isSelectedAll}
        />
        {selectedParticipants.map(({ name, isSelected }: ParticipantTypes) => (
          <Participant
            key={name}
            id={name}
            isSelected={isSelected}
            onClick={handleBlockClick}
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

export default SelectParticipants;
