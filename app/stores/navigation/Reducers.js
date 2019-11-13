/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */
import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from './InitialState';
import { UserInterfaceTypes } from './Actions';

export const drawerToggle = (state, { drawerState }) => ({
  ...state,
  drawerIsOpen: drawerState,
});

export const setActiveDrawerItem = (state, { itemKey }) => ({
  ...state,
  activeDrawerItem: itemKey,
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [UserInterfaceTypes.DRAWER_TOGGLE]: drawerToggle,
  [UserInterfaceTypes.SET_ACTIVE_DRAWER_ITEM]: setActiveDrawerItem,
});
