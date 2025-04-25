import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { adminRoutes } from './nav';
import { NavigatorParams } from './type';
import ProtectedRoute from './ProtectedRoute';

const BaseRoute: React.FC = () => {
  return (
    <div>
      <Routes>
      {adminRoutes.map(({ path, component: Component, isProtected }: NavigatorParams, index) => (
        <Route
          key={index}
          path={path}
          element={<ProtectedRoute component={Component} isProtected={isProtected} />}
        />
      ))}
    </Routes>
    </div>
  );
};

export default BaseRoute;