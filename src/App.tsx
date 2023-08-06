import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/ROUTES';

import AddTime from './pages/addTime/AddTime';
import Current from './pages/current/Current';
import RoomCalendar from './pages/roomCalendar/RoomCalendar';
import RoomStart from './pages/roomStart/RoomStart';
import Start from './pages/start/Start';
import Timer from './pages/roomTimer/RoomTimer';
import Login from './pages/login/Login';
import Result from './pages/result/Result';
import Invite from './pages/invite/Invite';
import Error from './pages/404/404';
import useScrollToTop from './hooks/useScrollToTop';

function App() {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path={`${ROUTES.ROOM_START}`} element={<RoomStart />} />
      <Route path={`${ROUTES.ROOM_CALENDAR}`} element={<RoomCalendar />} />
      <Route path={`${ROUTES.ROOM_TIMER}`} element={<Timer />} />
      <Route path={`${ROUTES.INVITE}/:roomUUID`} element={<Invite />} />
      <Route path={`${ROUTES.LOGIN}/:roomUUID`} element={<Login />} />
      <Route path={`${ROUTES.CURRENT}/:roomUUID`} element={<Current />} />
      <Route path={`${ROUTES.ADD_TIME}/:roomUUID`} element={<AddTime />} />
      <Route path={`${ROUTES.RESULT}/:roomUUID`} element={<Result />} />
      <Route path={`${ROUTES.ERROR}`} element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
