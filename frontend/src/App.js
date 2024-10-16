import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExampleComponent from './MuiComponent';
import TiltCard from './TiltCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExampleComponent />} />
        <Route path="/TiltCard" element={<TiltCard />} />
      </Routes>
    </Router>
  );
}

export default App;
