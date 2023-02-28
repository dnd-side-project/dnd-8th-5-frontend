import { Route, Routes } from 'react-router-dom';

import AddTime from './pages/addTime/AddTime';
import Current from './pages/current/Current';
import Timer from './pages/Timer';

function App() {
  return (
    <Routes>
      <Route path="/addTime" element={<AddTime />} />
      <Route path="/current" element={<Current />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  );
}

export default App;
