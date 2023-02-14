import styled from '@emotion/styled';
import { SetStateAction, useCallback, useState } from 'react';

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

  const handleCheckButtonClick = useCallback(() => {
    setIsDecided((prevDecided) => !prevDecided);
  }, [isDecided]);

  return (
    <Container>
      <Title>약속 정보를 입력해주세요</Title>
      <SubTitle>약속 이름을 알려주세요</SubTitle>
      <Input
        type="text"
        name="username"
        value={roomName}
        onChange={handleRoomNameChange}
      />
      <SubTitle>약속 참여 인원을 알려주세요</SubTitle>
      <CountButton onClick={handleMinusButtonClick}>-</CountButton>
      <PeopleNumber>{peopleNumber}명</PeopleNumber>
      <CountButton onClick={handlePlusButtonClick}>+</CountButton>
      <ChceckContainer onClick={handleCheckButtonClick}>
        <CheckCircle
          src={
            isDecided ? 'icons/checkCircle.png' : 'icons/checkCircleColor.png'
          }
        />
        <CheckListText>아직 안 정해졌어요</CheckListText>
      </ChceckContainer>
      <NextButton>다음</NextButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input``;

const Title = styled.text`
  font-family: Pretendard;
`;

const SubTitle = styled.text`
  font-family: Pretendard;
`;

const PeopleNumber = styled.div``;

const CountButton = styled.button``;

const NextButton = styled.button``;

const ChceckContainer = styled.div``;

const CheckListText = styled.text`
  font-family: Pretendard;
`;

const CheckCircle = styled.img`
  width: 15px;
`;

export default Room;
