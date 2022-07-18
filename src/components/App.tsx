import React from 'react';
import MyNavbar from './UI/MyNavbar/MyNavbar';
import MyFooter from './UI/MyFooter/MyFooter';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <AppRouter />
      <MyFooter />
    </BrowserRouter>
  );
};

export default App;
