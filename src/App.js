import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutContainer from './layout';
import routes from './config/routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <LayoutContainer>
        <Routes>
          {routes.map((item) => (
            <Route key={item.id} element={item.page} path={item.path}></Route>
          ))}
        </Routes>
      </LayoutContainer>
    </BrowserRouter>
  );
}

export default App;
