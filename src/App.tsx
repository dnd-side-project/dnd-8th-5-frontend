import { Route, Routes } from 'react-router-dom';

import AddTime from './pages/addTime/AddTime';
import Current from './pages/current/Current';

function App() {
  return (
    <Routes>
      <Route path="/addTime" element={<AddTime />} />
      <Route path="/current" element={<Current />} />
    </Routes>
  );
}

export default App;
