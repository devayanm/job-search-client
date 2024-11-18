import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AppRoutes from './Routes';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      {isAuthenticated && <Header />}
      <div style={{ display: 'flex' }}>
        {isAuthenticated && <Sidebar />}
        <div style={{ flex: 1, padding: '20px' }}>
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
