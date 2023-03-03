import { Route, Routes } from 'react-router-dom';

import AddTime from './pages/addTime/AddTime';
import Current from './pages/current/Current';
import RoomCalendar from './pages/roomCalendar/RoomCalendar';
import RoomStart from './pages/roomStart/RoomStart';
import Start from './pages/start/Start';
import Timer from './pages/roomTimer/RoomTimer';
import Login from './pages/login/Login';

function App() {
  return (
    <Routes>
      <Route path="/addTime" element={<AddTime />} />
      <Route path="/roomTimer" element={<Timer />} />
      <Route path="/start" element={<Start />} />
      <Route path="/roomStart" element={<RoomStart />} />
      <Route path="/roomCalendar" element={<RoomCalendar />} />
      <Route path="/login/:roomUuid" element={<Login />} />
      <Route path="/current/:roomUuid" element={<Current />} />
    </Routes>
  );
}

export default App;
