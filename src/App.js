import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Login from './modules/login/Login';

import { useWindowSize } from './hooks/useWindowSize';
import { useDispatch, useSelector } from 'react-redux';
import { calculateWindowSize } from './utils/helpers';
import { setWindowSize } from './store/reducers/ui';
import Main from './modules/main/Main';
import Profile from './pages/profile/Profile';
import Blank from './pages/Blank';
import Dashboard from './pages/Dashboard';


const App = () => {
  const windowSize = useWindowSize();
  const screenSize = useSelector((state) => state.ui.screenSize);
  const dispatch = useDispatch();

  useEffect(() => {
    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      dispatch(setWindowSize(size));
    }
  }, [windowSize]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>


        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Main />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/blank" element={<Blank/>} />
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;