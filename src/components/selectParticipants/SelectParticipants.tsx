import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Participant from './Pariticipant';
import theme from '../../styles/theme';
import refresh from '../../assets/icons/refresh.svg';

interface ParticipantsList {
  name: string;
  isSelected: boolean;
}

interface ParticipantsListProps extends Array<ParticipantsList> {}

const SelectParticipants = ({
  selectedList,
  setSelectedList,
  setIsParticipantOpened,
  participantsList,
}: {
  selectedList: string[];
  setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
  participantsList: ParticipantsListProps;
  setIsParticipantOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [participants, setParticipants] = useState(participantsList);

  const [isSelectedAll, setIsSelectedAll] = useState<boolean>(false);

  const handleBlockClick = (e: any) => {
    const idx = selectedList.findIndex((name) => name === e.target.id);

    if (idx === -1) {
      setSelectedList([...selectedList, e.target.id]);
      const newList = participants.map(({ name, isSelected }) =>
        name === e.target.id
          ? { name: name, isSelected: true }
          : { name: name, isSelected: isSelected }
      );
      setParticipants(newList);
    } else {
      const newList = selectedList.filter((name) => name !== e.target.id);
      setSelectedList(newList);

      const newArr = participants.map(({ name, isSelected }) =>
        name === e.target.id
          ? { name: name, isSelected: false }
          : { name: name, isSelected: isSelected }
      );
      setParticipants(newArr);

      if (selectedList.length === participants.length) {
        setIsSelectedAll(false);
      }
    }
  };

  console.log(participants);

  const handleAllClick = (e: any) => {
    if (selectedList.length === participants.length) {
      setIsSelectedAll(false);
      setSelectedList([]);
      const newList = participants.map(({ name, isSelected }) =>
        isSelected == true
          ? { name: name, isSelected: false }
          : { name: name, isSelected: isSelected }
      );
      setParticipants(newList);
    } else {
      setIsSelectedAll(true);

      const newList = participants.map(({ name, isSelected }) =>
        isSelected == false
          ? { name: name, isSelected: true }
          : { name: name, isSelected: isSelected }
      );
      setParticipants(newList);

      const newArr = newList.map(({ name }) => name);
      setSelectedList(newArr);
    }
  };

  useEffect(() => {
    if (selectedList.length === participants.length) {
      setIsSelectedAll(true);
    }
  }, [selectedList]);

  const handleRefresh = () => {
    setIsSelectedAll(false);
    setSelectedList([]);
    const newList = participants.map(({ name, isSelected }) =>
      isSelected == true
        ? { name: name, isSelected: false }
        : { name: name, isSelected: isSelected }
    );
    setParticipants(newList);
  };

  const handleApplyClick = () => {
    setIsParticipantOpened(false);
  };

  return (
    <>
      <Wrapper>
        <Participant
          id="전체참여자"
          onClick={handleAllClick}
          isSelected={isSelectedAll}
        />
        {participants.map(({ name, isSelected }) => (
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

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
  column-gap: 6px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 44px;

  display: flex;
  justify-content: space-between;

  position: absolute;
  bottom: 28px;
`;

const Button = styled.div`
  width: 243px;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;
  ${theme.typography.semibold04};
  color: ${theme.colors.gray01};
  background: ${theme.colors.purple06};

  cursor: pointer;
`;

const Refresh = styled.div`
  width: 87px;
  margin-left: 2px;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

const RefreshIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 2px;
`;

const RefreshButton = styled.div`
  ${theme.typography.semibold04}
  color: ${theme.colors.gray06};
`;

export default SelectParticipants;
