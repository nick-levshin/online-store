import React from 'react';
import { BASKET_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Routes, Route, Navigate } from 'react-router-dom';
import Shop from '../pages/Shop';
import Basket from '../pages/Basket';

const AppRouter: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path={SHOP_ROUTE} element={<Shop />} />
      <Route path={BASKET_ROUTE} element={<Basket />} />
      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
