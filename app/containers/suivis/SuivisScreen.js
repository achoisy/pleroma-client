import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { Heading, BodyText } from 'material-bread';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ApplicationStyles from '../../theme/ApplicationStyles';

// Actions import
import NavigationActions from '../../stores/navigation/Actions';

// Components import
import Drawer from '../../components/drawer/Drawer';
import Header from '../../components/header/Header';

const PageContent = () => {
  return (
    <View>
      <Heading type={5}>This is a page SUIVIS</Heading>
      <BodyText text={'Click the menu button to open the drawer'} />
      <BodyText text={'Click outside the drawer to close it'} />
    </View>
  );
};

class SuivisScreen extends Component {
  componentDidMount() {
    this.props.setActiveDrawerItem(3);
  }

  render() {
    return (
      <SafeAreaView style={ApplicationStyles.screen.container}>
        <Drawer {...this.props} navToScreen={this._navigation}>
          <View style={ApplicationStyles.body}>
            <Header navAction={this._navAction} title={'Suivis'} />
            <PageContent />
          </View>
        </Drawer>
      </SafeAreaView>
    );
  }

  _navAction = navAction => {
    this.props.navigation.goBack();
  };

  _navigation = screenName => {
    this.props.drawerToggle();
    this.props.navigation.navigate(screenName);
  };
}

SuivisScreen.propTypes = {
  drawerIsOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
  activeDrawerItem: PropTypes.number,
  setActiveDrawerItem: PropTypes.func,
};

const mapStateToProps = state => ({
  drawerIsOpen: state.userInterface.drawerIsOpen,
  activeDrawerItem: state.userInterface.activeDrawerItem,
});

const mapDispatchToProps = dispatch => ({
  drawerToggle: drawerStatus =>
    dispatch(NavigationActions.drawerToggle(drawerStatus)),
  setActiveDrawerItem: itemKey =>
    dispatch(NavigationActions.setActiveDrawerItem(itemKey)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuivisScreen);
