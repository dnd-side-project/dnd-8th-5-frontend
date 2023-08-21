import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/ROUTES';

import AddTime from './pages/addTime';
import Current from './pages/current';
import RoomCalendar from './pages/roomCalendar';
import RoomStart from './pages/roomStart';
import Start from './pages/start';
import Timer from './pages/roomTimer';
import Login from './pages/login';
import Result from './pages/result';
import Invite from './pages/invite';
import Error from './pages/404';
import useScrollToTop from './hooks/useScrollToTop';
import useGoogleAnalytics from './hooks/useGoogleAnalytics';

function App() {
  useGoogleAnalytics();
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
