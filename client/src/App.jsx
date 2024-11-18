import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './Routes';

const App = () => {
  return (
    <Router>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
