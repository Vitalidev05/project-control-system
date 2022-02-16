import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer';

// const composeEnhancers =
//   (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
