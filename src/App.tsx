import { Route, Routes } from 'react-router-dom';

import AddTime from './pages/addTime/AddTime';
import Current from './pages/current/Current';
import Result from './pages/result/Result';
import Timer from './pages/Timer';

function App() {
  return (
    <Routes>
      <Route path="/timer" element={<Timer />} />
      <Route path="/addTime" element={<AddTime />} />
      <Route path="/current/:roomUuid" element={<Current />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  );
}

export default App;
