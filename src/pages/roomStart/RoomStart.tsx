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
  BottomButtonContainer,
} from './RoomStart.styles';

import { useRecoilState } from 'recoil';
import { recoilRoomState } from '../../recoil/recoilRoomState';
import { useNavigate } from 'react-router-dom';

const Room = () => {
  const [roomName, setRoomName] = useState('');
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [isNotDecided, setIsNotDecided] = useState(false);

  const [recoilRoom, setRecoilRoom] = useRecoilState(recoilRoomState);

  const navigate = useNavigate();

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

    navigate('/RoomCalendar');
  }, [recoilRoom, roomName, peopleNumber, isNotDecided]);

  return (
    <MainContainer>
      <FormContainer>
        <HeaderContainer>
          <RoomHeader
            index=""
            title="?????? ????????? ??????????????????"
            bottomSheet={false}
          />
        </HeaderContainer>

        <TitleInputContnainer>
          <InputWrapper>
            <InputTitle>?????? ????????? ???????????????</InputTitle>
            <Input
              type="text"
              name="username"
              value={roomName}
              onChange={handleRoomNameChange}
              placeholder="?????? 15??? ?????? ??????"
            />
          </InputWrapper>
        </TitleInputContnainer>

        <NumberSelectContnainer>
          <InputTitle>?????? ?????? ????????? ???????????????</InputTitle>

          <DependingBox isNotDecided={isNotDecided} />

          <SelectWrapper>
            <CountButton onClick={handleMinusButtonClick}>
              <img src={minus} />
            </CountButton>
            <PeopleNumber>{peopleNumber}???</PeopleNumber>
            <CountButton onClick={handlePlusButtonClick}>
              <img src={plus} />
            </CountButton>
          </SelectWrapper>
        </NumberSelectContnainer>

        <ChceckContainer>
          <CheckBox
            text={'?????? ??? ???????????????'}
            setValue={setIsNotDecided}
            value={isNotDecided}
          ></CheckBox>
        </ChceckContainer>

        <BottomButtonContainer
          onClick={() => {
            canGoNext ? onSetRecoilState() : null;
          }}
        >
          <BottomButton text={'??????'} isActivated={canGoNext} />
        </BottomButtonContainer>
      </FormContainer>
    </MainContainer>
  );
};

export default Room;
