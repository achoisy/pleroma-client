import React, {Component} from 'react';
import {BreadProvider} from 'material-bread';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import createStore from './stores';
import RootScreen from './containers/root/RootScreen';
import SplashScreen from './containers/splashScreen/SplashScreen';
import {LightTheme} from './theme';
import {enableScreens} from 'react-native-screens';

enableScreens();
const {store, persistor} = createStore();

export default class App extends Component {
  render() {
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <BreadProvider value={LightTheme}>
            <RootScreen />
          </BreadProvider>
        </PersistGate>
      </Provider>
    );
  }
}
