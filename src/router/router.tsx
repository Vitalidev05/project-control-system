import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { Authorization } from '../pages/Authorization';
import { ProjectContainer } from '../components/containers/ProjectContainer';
import { BoardList } from '../components/blocks/BoardList';
import { IBoardList } from '../constants';
import { Board } from '../components/controls/Board';

export const AppRouter = () => {
  const board: IBoardList[] = [];
  return (
    <Router>
      <Routes>
        <Route
          path="/authorization"
          element={<Authorization isAuth={false} />}
        />
        <Route
          path="*"
          element={
            <>
              {' '}
              <ProjectContainer />
              <Routes>
                <Route path="/boardList" element={<BoardList boards={[]} />} />
                {board.map((value) => (
                  <Route
                    key={value.boardId}
                    path={`/board_${value.boardId}`}
                    element={<Board boardID={value.boardId} />}
                  />
                ))}
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};
