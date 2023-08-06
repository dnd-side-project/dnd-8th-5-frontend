import { SetStateAction, useCallback, useState, useRef } from 'react';

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
  BottomButtonContainer,
} from './RoomStart.styles';

import { useRecoilState } from 'recoil';
import { createRoomAtoms } from '../../atoms/createRoomAtoms';
import { useNavigate } from 'react-router-dom';
import useInputScroll from '../../hooks/useInputScroll';
import { ROUTES } from '../../constants/ROUTES';

const Room = () => {
  const [roomName, setRoomName] = useState('');
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [isNotDecided, setIsNotDecided] = useState(false);

  const [recoilRoom, setRecoilRoom] = useRecoilState(createRoomAtoms);

  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const canGoNext =
    (!!roomName && peopleNumber > 0) || (isNotDecided && !!roomName);

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

  const onSetRecoilState = useCallback(async () => {
    if (isNotDecided) {
      setPeopleNumber(() => 0);
    }

    setRecoilRoom((prev) => {
      return {
        ...prev,
        ['title']: roomName,
        ['headCount']: isNotDecided ? 0 : peopleNumber,
      };
    });

    navigate(`${ROUTES.ROOM_CALENDAR}`);
  }, [recoilRoom, roomName, peopleNumber, isNotDecided]);

  useInputScroll(inputRef);

  return (
    <MainContainer>
      <FormContainer>
        <HeaderContainer>
          <RoomHeader
            index=""
            title="약속 정보를 입력해주세요"
            bottomSheet={false}
          />
        </HeaderContainer>

        <TitleInputContnainer>
          <InputWrapper>
            <InputTitle>약속 이름을 알려주세요</InputTitle>
            <Input
              ref={inputRef}
              type="text"
              name="username"
              value={roomName}
              onChange={handleRoomNameChange}
              placeholder="최대 15자 입력 가능"
              autoComplete="new-password"
            />
          </InputWrapper>
        </TitleInputContnainer>

        <NumberSelectContnainer>
          <InputTitle>약속 참여 인원을 알려주세요</InputTitle>

          <DependingBox isNotDecided={isNotDecided} />

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
            setValue={setIsNotDecided}
            value={isNotDecided}
          ></CheckBox>
        </ChceckContainer>
        <BottomButton
          onClick={() => {
            canGoNext ? onSetRecoilState() : null;
          }}
          text={'다음'}
          isActivated={canGoNext}
        />
      </FormContainer>
    </MainContainer>
  );
};

export default Room;
