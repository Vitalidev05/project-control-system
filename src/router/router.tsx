import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { Authorization } from '../pages/Authorization';
import { ProjectContainer } from '../components/controls/ProjectContainer';
import { BoardList } from '../pages/BoardList';
import { IBoardList } from '../constants';
import { Board } from '../pages/Board';
import { useSelector } from 'react-redux';
import { selectBoardList } from '../store/reducers/boardList/selectors';

export const AppRouter = () => {
  const board: IBoardList[] = useSelector(selectBoardList);

  return (
    // todo
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
                <Route path="/boardList" element={<BoardList />} />
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
