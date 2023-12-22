import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/boss/NapBarBoss';

// Import your other React components here

function App() {
  return (
    <Router>
      <div className="app-container"> // Assuming a CSS class for styling
        <Routes>
          {/* Define your routes here, replacing with your actual components */}
          <Route path="/" element={<NavBar/>} />
          <Route path="/about" element={<NavBar/>} />
          {/* ...more routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;