import { Route, Routes } from 'react-router-dom';

import AddTime from './pages/addTime/AddTime';
import Current from './pages/current/Current';
import RoomCalendar from './pages/roomCalendar/RoomCalendar';
import RoomStart from './pages/roomStart/RoomStart';
import Start from './pages/start/Start';
import Timer from './pages/roomTimer/RoomTimer';
import Login from './pages/login/Login';
import Result from './pages/result/Result';
import Invite from './pages/invite/Invite';
import Error from './pages/error404/error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/add/:roomUUID" element={<AddTime />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/roomTimer" element={<Timer />} />
      <Route path="/roomStart" element={<RoomStart />} />
      <Route path="/roomCalendar" element={<RoomCalendar />} />
      <Route path="/invite/:roomUUID" element={<Invite />} />
      <Route path="/current/:roomUUID" element={<Current />} />
      <Route path="/login/:roomUUID" element={<Login />} />
      <Route path="/result/:roomUUID" element={<Result />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;
