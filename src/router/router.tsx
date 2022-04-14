import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { Authorization } from '../pages/Authorization';
import { ProjectContainer } from '../components/controls/ProjectContainer';
import { BoardList } from '../pages/BoardList';
import { Board } from '../pages/Board';

import { RouteConst } from './routeConst';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={RouteConst.AUTH}
          element={<Authorization isAuth={false} />}
        />
        <Route
          path={RouteConst.HOME}
          element={
            <ProjectContainer>
              <Route path={RouteConst.MAIN} element={<BoardList />} />
              <Route path={RouteConst.BOARD_LIST} element={<BoardList />} />
              <Route path={RouteConst.BOARD} element={<Board />} />
            </ProjectContainer>
          }
        />
      </Routes>
    </Router>
  );
};
