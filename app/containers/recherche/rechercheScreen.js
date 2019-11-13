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
      <Heading type={5}>This is a page RECHERCHE</Heading>
      <BodyText text={'Click the menu button to open the drawer'} />
      <BodyText text={'Click outside the drawer to close it'} />
    </View>
  );
};

class FavorisScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      currentlyDisplayed: '',
    };
  }
  componentDidMount() {
    this.props.setActiveDrawerItem(2);
  }

  render() {
    return (
      <SafeAreaView style={ApplicationStyles.screen.container}>
        <Drawer {...this.props} navToScreen={this._navigation}>
          <View style={ApplicationStyles.body}>
            <Header
              navAction={this._navAction}
              navType={'SEARCH'}
              searchTerm={this.state.searchTerm}
              searchTermOnChange={this._searchTermOnChange}
              searchTermReset={this._searchTermReset}
            />
            <PageContent />
          </View>
        </Drawer>
      </SafeAreaView>
    );
  }

  _navAction = navAction => {
    console.log('goback');
    this.props.navigation.goBack();
  };

  _navigation = screenName => {
    this.props.drawerToggle();
    this.props.navigation.navigate(screenName);
  };

  _searchTermOnChange = value => {
    this.setState({ searchTerm: value });
  };
  _searchTermReset = () => {
    this.setState({ searchTerm: '' });
  };
}

FavorisScreen.propTypes = {
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
)(FavorisScreen);
