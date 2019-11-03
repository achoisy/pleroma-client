import React, { Component } from 'react';
import NavigationService from '../../services/NavigationService';
import AppNavigator from '../../navigators/AppNavigator';
import { View, StatusBar } from 'react-native';
import styles from './RootScreenStyle';
import { connect } from 'react-redux';
import StartupActions from '../../stores/startup/Actions';
import { PropTypes } from 'prop-types';

class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startup();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootScreen);
