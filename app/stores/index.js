import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from '../sagas/';
import { reducer as ExampleReducer } from './example/Reducers';
import { reducer as HomeReducer } from './home/Reducers';
import { reducer as UserInterfaceReducer } from './navigation/Reducers';

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: ExampleReducer,
    home: HomeReducer,
    userInterface: UserInterfaceReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
