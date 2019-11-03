import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Heading, BodyText } from 'material-bread';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ApplicationStyles from '../../theme/ApplicationStyles';
import HomeActions from '../../stores/home/Actions';
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
  render() {
    return (
      <SafeAreaView style={ApplicationStyles.screen.container}>
        <Drawer {...this.props}>
          <View style={ApplicationStyles.body}>
            <Header {...this.props} />
            <PageContent />
          </View>
        </Drawer>
      </SafeAreaView>
    );
  }
}

HomeScreen.propTypes = {
  drawerIsOpen: PropTypes.bool,
  drawerToggle: PropTypes.func,
};

const mapStateToProps = state => ({
  drawerIsOpen: state.home.drawerIsOpen,
});

const mapDispatchToProps = dispatch => ({
  drawerToggle: () => dispatch(HomeActions.drawerToggle()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
