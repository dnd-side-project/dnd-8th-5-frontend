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
      <Route path="/" element={<Start />} />
      <Route path="/roomStart" element={<RoomStart />} />
      <Route path="/roomCalendar" element={<RoomCalendar />} />
      <Route path="/roomTimer" element={<Timer />} />
      <Route path="/current/:roomUuid" element={<Current />} />
      <Route path="/addTime/:roomUuid" element={<AddTime />} />
      <Route path="/login/:roomUuid" element={<Login />} />
    </Routes>
  );
}

export default App;
