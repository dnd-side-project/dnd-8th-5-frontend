import { useEffect, useState, MouseEvent, TouchEvent } from 'react';
import Participant from './Pariticipant';
import refresh from '../../assets/icons/refresh.svg';
import {
  Bottom,
  Button,
  Refresh,
  RefreshButton,
  RefreshIcon,
  Wrapper,
} from './SelectParticipants.styles';
import { SelectParticipantsTypes } from './resultOption.types';

const SelectParticipants = ({
  setFilteredParticipants,
  participantsList,
  setNameQS,
  selectedList,
  setSelectedList,
  setIsParticipantOpened,
}: SelectParticipantsTypes) => {
  const [isSelectedAll, setIsSelectedAll] = useState<boolean>(false);
  const [selectedParticipants, setSelectedParticipants] =
    useState(participantsList);

  const handleBlockClick = (
    e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>
  ) => {
    const targetId = (e.target as HTMLDivElement).id;
    const idx = selectedList.findIndex((name) => name === targetId);

    if (idx === -1) {
      setSelectedList([...selectedList, targetId]);

      const newList = selectedParticipants.map(({ name, isSelected }) =>
        name === targetId
          ? { name: name, isSelected: true }
          : { name: name, isSelected: isSelected }
      );

      setSelectedParticipants(newList);
    } else {
      const newList = selectedList.filter((name) => name !== targetId);
      setSelectedList(newList);

      const newArr = selectedParticipants.map(({ name, isSelected }) =>
        name === targetId
          ? { name: name, isSelected: false }
          : { name: name, isSelected: isSelected }
      );

      setSelectedParticipants(newArr);

      if (selectedList.length === selectedParticipants.length) {
        setIsSelectedAll(false);
      }
    }
  };

  const handleAllClick = () => {
    if (selectedList.length === selectedParticipants.length) {
      setIsSelectedAll(false);
      setSelectedList([]);
      const newList = selectedParticipants.map(({ name, isSelected }) =>
        isSelected == true
          ? { name: name, isSelected: false }
          : { name: name, isSelected: isSelected }
      );

      setSelectedParticipants(newList);
    } else {
      setIsSelectedAll(true);

      const newList = selectedParticipants.map(({ name, isSelected }) =>
        isSelected == false
          ? { name: name, isSelected: true }
          : { name: name, isSelected: isSelected }
      );

      setSelectedParticipants(newList);

      const newArr = newList.map(({ name }) => name);
      setSelectedList(newArr);
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

    const newList = selectedParticipants.map(({ name, isSelected }) =>
      isSelected == true
        ? { name: name, isSelected: false }
        : { name: name, isSelected: isSelected }
    );
    setSelectedParticipants(newList);
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  const handleApplyClick = () => {
    setIsParticipantOpened(false);

    const selected = selectedParticipants.filter(
      (participant) => participant.isSelected === true
    );

    setFilteredParticipants(selected);

    const qs = selected.map((name) => `name=${name.name}&`);
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
        {selectedParticipants.map(({ name, isSelected }) => (
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

export default SelectParticipants;
