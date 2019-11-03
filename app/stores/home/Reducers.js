/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import {createReducer} from 'reduxsauce';
import {INITIAL_STATE} from './InitialState';
import {HomeTypes} from './Actions';

export const drawerToggle = state => ({
  ...state,
  drawerIsOpen: !state.drawerIsOpen,
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [HomeTypes.DRAWER_TOGGLE]: drawerToggle,
});
