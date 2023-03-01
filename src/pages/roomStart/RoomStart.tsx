import { SetStateAction, useCallback, useState } from 'react';

import RoomHeader from '../../components/roomHeader/RoomHeader';
import CheckBox from '../../components/checkbox/CheckBox';
import BottomButton from '../../components/bottomButton/BottomButton';

import plus from '../../assets/icons/plus.png';
import minus from '../../assets/icons/minus.png';
import {
  MainContainer,
  FormContainer,
  HeaderContainer,
  TitleInputContnainer,
  InputWrapper,
  InputTitle,
  Input,
  DependingBox,
  NumberSelectContnainer,
  SelectWrapper,
  CountButton,
  PeopleNumber,
  ChceckContainer,
} from './RoomStart.styles';

const Room = () => {
  const [roomName, setRoomName] = useState('');
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [isDecided, setIsDecided] = useState(false);

  const handleRoomNameChange = useCallback(
    (e: { target: { value: SetStateAction<string> } }) => {
      setRoomName(e.target.value);
    },
    [roomName]
  );

  const handlePlusButtonClick = useCallback(() => {
    setPeopleNumber((prevNumber) => {
      return prevNumber + 1;
    });
  }, [peopleNumber]);

  const handleMinusButtonClick = useCallback(() => {
    setPeopleNumber((prevNumber) => {
      if (prevNumber === 0) {
        return prevNumber;
      }
      return prevNumber - 1;
    });
  }, [peopleNumber]);

  return (
    <MainContainer>
      <FormContainer>
        <HeaderContainer>
          <RoomHeader index="" title="약속 정보를 입력해주세요" />
        </HeaderContainer>

        <TitleInputContnainer>
          <InputWrapper>
            <InputTitle>약속 이름을 알려주세요</InputTitle>
            <Input
              type="text"
              name="username"
              value={roomName}
              onChange={handleRoomNameChange}
              placeholder="최대 15자 입력 가능"
            />
          </InputWrapper>
        </TitleInputContnainer>

        <NumberSelectContnainer>
          <InputTitle>약속 참여 인원을 알려주세요</InputTitle>

          <DependingBox isDecided={isDecided} />

          <SelectWrapper>
            <CountButton onClick={handleMinusButtonClick}>
              <img src={minus} />
            </CountButton>
            <PeopleNumber>{peopleNumber}명</PeopleNumber>
            <CountButton onClick={handlePlusButtonClick}>
              <img src={plus} />
            </CountButton>
          </SelectWrapper>
        </NumberSelectContnainer>

        <ChceckContainer>
          <CheckBox
            text={'아직 안 정해졌어요'}
            setValue={setIsDecided}
            value={isDecided}
          ></CheckBox>
        </ChceckContainer>

        <BottomButton text={'다음'} isActivated={true} />
      </FormContainer>
    </MainContainer>
  );
};

export default Room;
