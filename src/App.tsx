import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ROUTES } from './constants/ROUTES';
import Landing from './pages/landing';
import AddTime from './pages/addTime';
import Current from './pages/current';
import RoomCalendar from './pages/roomCalendar';
import RoomStart from './pages/roomStart';
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
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={`${ROUTES.ROOM_START}`} element={<RoomStart />} />
        <Route path={`${ROUTES.ROOM_CALENDAR}`} element={<RoomCalendar />} />
        <Route path={`${ROUTES.ROOM_TIMER}`} element={<Timer />} />
        <Route path={`${ROUTES.INVITE}/:roomUUID`} element={<Invite />} />
        <Route path={`${ROUTES.LOGIN}/:roomUUID`} element={<Login />} />
        <Route path={`${ROUTES.CURRENT}/:roomUUID`} element={<Current />} />
        <Route path={`${ROUTES.ADD_TIME}/:roomId`} element={<AddTime />} />
        <Route path={`${ROUTES.RESULT}/:roomId`} element={<Result />} />
        <Route path={`${ROUTES.ERROR}`} element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
