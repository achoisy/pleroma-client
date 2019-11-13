import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Heading, BodyText } from 'material-bread';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
// Main styles import
import ApplicationStyles from '../../theme/ApplicationStyles';

// Actions import
import NavigationActions from '../../stores/navigation/Actions';
import HomeActions from '../../stores/home/Actions';

// Components import
import Drawer from '../../components/drawer/Drawer';
import Header from '../../components/header/Header';

const PageContent = () => {
  return (
    <View>
      <Heading type={4} style={{ marginBottom: 20 }}>
        This is a page 1
      </Heading>
      <BodyText text={'Click the menu button to open the drawer'} />
      <BodyText text={'Click outside the drawer to close it'} />
    </View>
  );
};

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.setActiveDrawerItem(1);
  }

  componentDidUpdate() {
    this.props.setActiveDrawerItem(1);
  }

  render() {
    return (
      <SafeAreaView style={ApplicationStyles.screen.container}>
        <Drawer {...this.props} navToScreen={this._navigation}>
          <View style={ApplicationStyles.body}>
            <Header navAction={this._navAction} navType={'HOME'} />
            <PageContent />
          </View>
        </Drawer>
      </SafeAreaView>
    );
  }

  _navAction = navAction => {
    switch (navAction) {
      case 'SEARCH':
        this.props.navigation.navigate('RechercheScreen');
        break;
      case 'SUIVIS':
        this.props.navigation.navigate('SuivisScreen');
        break;
      case 'QRSCAN':
        this.props.navigation.navigate('QrScanScreen');
        break;
      default:
        this.props.drawerToggle(true);
        break;
    }
  };

  _navigation = screenName => {
    this.props.drawerToggle();
    this.props.navigation.navigate(screenName);
  };
}

HomeScreen.propTypes = {
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
)(HomeScreen);
