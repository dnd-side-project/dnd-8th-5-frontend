import { Route, Routes } from 'react-router-dom';

import AddTime from './pages/addTime/AddTime';
import Current from './pages/current/Current';
import RoomStart from './pages/roomStart/RoomStart';
import Start from './pages/Start';
import Timer from './pages/Timer';

function App() {
  return (
    <Routes>
      <Route path="/addTime" element={<AddTime />} />
      <Route path="/current" element={<Current />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/start" element={<Start />} />
      <Route path="/roomStart" element={<RoomStart />} />
    </Routes>
  );
}

export default App;
