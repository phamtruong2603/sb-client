// Cấu hình redux store
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { RootState } from './rootReducer';
import { thunk } from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export type AppDispatch = typeof store.dispatch;

export default store;
