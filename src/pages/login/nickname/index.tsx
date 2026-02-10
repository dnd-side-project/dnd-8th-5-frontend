import { Layout } from '@/components/commons/layout';
import roomStart from '@/assets/images/room_info_bg.png';
import { Logo, MainContainer, Body } from './index.styles';
import { useParams } from 'react-router-dom';
import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';

export default function LoginNickname() {
  const { roomId } = useParams() as { roomId: string };
  const { data: room } = useGetRoomInfo(roomId);

  if (!room) return;

  return (
    <Layout>
      <MainContainer>
        <Logo src={roomStart} alt="room start logo" />
        <Body>
          <h1>{room.title}</h1>

          <form>
            <input value="님으로 시작" />
          </form>
        </Body>
      </MainContainer>
    </Layout>
  );
}
