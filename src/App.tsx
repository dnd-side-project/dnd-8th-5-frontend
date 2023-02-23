import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddTime from './pages/AddTime';
import Current from './pages/Current';

function App() {
  return (
    <Routes>
      <Route path="/current" element={<Current />} />
      <Route path="/addTime" element={<AddTime />} />
    </Routes>
  );
}

export default App;
