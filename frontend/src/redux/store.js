import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './reducers/restaurantsReducer';
import uiReducer from './reducers/uiReducer';

export default configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    ui: uiReducer,
  },
});
