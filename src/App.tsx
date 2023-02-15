import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Current from './pages/Current';

function App() {
  return (
    <Routes>
      <Route path="/available-time/group" element={<Current />} />
    </Routes>
  );
}

export default App;
