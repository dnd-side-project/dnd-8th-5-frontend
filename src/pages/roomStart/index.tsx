import { SetStateAction, useCallback, useState, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import CheckBox from '@/components/createRoom/checkbox';
import BottomButton from '@/components/commons/bottomButton';

import plus from '@/assets/icons/plus.png';
import minus from '@/assets/icons/minus.png';
import roomStart from '@/assets/images/roomStart.webp';
import { createRoomTagsData } from '@/assets/data/createRoomTagsData';

import {
  MainContainer,
  Logo,
  FormContainer,
  Header,
  InputWrapper,
  InputTitle,
  Input,
  DependingBox,
  SelectWrapper,
  CountButton,
  PeopleNumber,
  ChceckContainer,
  Tag,
  TagWrapper,
} from './index.styles';

import { createRoomAtom } from '@/atoms/createRoomAtom';
import useInputScroll from '@/hooks/useInputScroll';
import { ROUTES } from '@/constants/ROUTES';
import { Layout } from '@/components/commons/layout';

interface TagType {
  id: string;
  title: string;
  isSelected: boolean;
}

const RoomStart = () => {
  const [roomName, setRoomName] = useState('');
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [isNotDecided, setIsNotDecided] = useState(false);
  const [tags, setTags] = useState<TagType[]>(createRoomTagsData);

  const [recoilRoom, setRecoilRoom] = useRecoilState(createRoomAtom);

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

  const handleTagClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;

    setTags((prev) =>
      prev.map((tag) =>
        tag.id === target.id
          ? { ...tag, isSelected: true }
          : { ...tag, isSelected: false }
      )
    );
  };

  return (
    <Layout>
      <MainContainer>
        <Logo src={roomStart} alt="room start logo" />
        <FormContainer>
          <Header>어떤 약속인가요?</Header>

          <TagWrapper>
            {tags.map(({ id, title, isSelected }: TagType) => (
              <Tag
                id={id}
                key={title}
                isSelected={isSelected}
                onClick={handleTagClick}
              >
                {title}
              </Tag>
            ))}
          </TagWrapper>

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
              maxLength={15}
            />
          </InputWrapper>

          <InputWrapper>
            <InputTitle>약속 참여 인원을 알려주세요</InputTitle>
            <div style={{ position: 'relative' }}>
              <SelectWrapper>
                {isNotDecided && <DependingBox />}
                <CountButton onClick={handleMinusButtonClick}>
                  <img src={minus} />
                </CountButton>
                <PeopleNumber>{peopleNumber}명</PeopleNumber>
                <CountButton onClick={handlePlusButtonClick}>
                  <img src={plus} />
                </CountButton>
              </SelectWrapper>
            </div>
          </InputWrapper>

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
    </Layout>
  );
};

export default RoomStart;
