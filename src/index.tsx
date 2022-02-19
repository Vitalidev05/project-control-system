import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { AppRouter } from './router';
import reportWebVitals from './reportWebVitals';
import { persistedStore, store } from './store';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <Suspense fallback="loading">
        <DndProvider backend={Backend}>
          <AppRouter />
        </DndProvider>
      </Suspense>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
