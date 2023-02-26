import { Route, Routes } from 'react-router-dom';
import AddTime from './pages/addTime/AddTime';

function App() {
  return (
    <Routes>
      <Route path="/addTime" element={<AddTime />} />
    </Routes>
  );
}

export default App;
