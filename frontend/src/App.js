import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExampleComponent from './MuiComponent';
import About from './About';
import TiltCard from './TiltCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExampleComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/TiltCard" element={<TiltCard />} />
      </Routes>
    </Router>
  );
}

export default App;
