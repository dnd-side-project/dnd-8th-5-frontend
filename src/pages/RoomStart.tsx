import styled from '@emotion/styled';
import { SetStateAction, useCallback, useState } from 'react';
import roomStartBack from '../assets/images/roomStartBack.png';
import RoomHeader from '../components/roomHeader/RoomHeader';
import theme from '../styles/theme';
import plus from '../assets/icons/plus.png';
import minus from '../assets/icons/minus.png';
import CheckBox from '../components/checkbox/CheckBox';
import BottomButton from '../components/bottomButton/BottomButton';

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

const MainContainer = styled.div`
  width: 375px;
  max-width: 375px;
  position: relative;
  left: 0;
  right: 0;
  height: 812px;
  background-image: url(${roomStartBack});
  margin: 0 auto;
`;

const FormContainer = styled.div`
  width: 375px;
  max-width: 375px;
  height: 465px;
  position: absolute;

  bottom: 0px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-left: 21px;
  padding-top: 10px;
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 25px;
`;

const TitleInputContnainer = styled.div`
  position: absolute;
  top: 87px;
  width: 335px;
  height: 79px;
`;

const NumberSelectContnainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 190px;
  width: 335px;
  height: 79px;
  z-index: 2;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DependingBox = styled.div<{ isDecided: boolean }>`
  position: absolute;
  width: 100%;
  height: 60px;
  background-color: rgba(256, 256, 256, 0.6);
  top: 22px;
  z-index: ${(props) => (props.isDecided ? 3 : 1)};
  /* z-index: 3; */
`;

const SelectWrapper = styled.div`
  width: 335px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${theme.colors.gray04};
  border-bottom: 1px solid ${theme.colors.gray04};
  border-radius: 5px;
  z-index: 2;
  position: absolute;
  top: 28px;
`;

const InputTitle = styled.div`
  ${theme.typography.medium02};
  color: ${theme.colors.gray05};
  padding-bottom: 8px;
`;

const Input = styled.input`
  width: 335px;
  height: 50px;
  border: 1px solid ${theme.colors.gray04};
  border-radius: 5px;
  padding: 15px;
  outline: none;
  &::placeholder {
    color: ${theme.colors.gray03};
  }
  &:focus {
    border: 1px solid ${theme.colors.purple04};
  }
`;

const PeopleNumber = styled.div`
  ${theme.typography.medium01x};
  color: ${theme.colors.gray06};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75%;
`;

const CountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.typography.semibold01};
  height: 100%;
  width: 25%;
  border-left: 1px solid ${theme.colors.gray04};
  border-right: 1px solid ${theme.colors.gray04};
  border-radius: 5px;
  background-color: white;
`;

const NextButton = styled.button``;

const ChceckContainer = styled.div`
  position: absolute;
  top: 279px;
`;

const CheckListText = styled.text`
  font-family: Pretendard;
`;

const CheckCircle = styled.img`
  width: 15px;
`;

export default Room;
