import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Current from './pages/current/Current';

function App() {
  return (
    <Routes>
      <Route path="/current" element={<Current />} />
    </Routes>
  );
}

export default App;
