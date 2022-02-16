import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRouter } from './router';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { Provider } from 'react-redux';
import { AppStateProvider } from './context/AppStateContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';

ReactDOM.render(
  <DndProvider backend={Backend}>
    <AppStateProvider>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </AppStateProvider>
  </DndProvider>,
  document.getElementById('root')
);

reportWebVitals();
