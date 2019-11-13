import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
// import { ProgressCircle } from 'material-bread';
import ApplicationStyles from '../../theme/ApplicationStyles';

import Header from '../../components/header/Header';

class AideScreen extends Component {
  render() {
    return (
      <SafeAreaView style={ApplicationStyles.screen.container}>
        <Header navAction={this._navAction} title={'Suivis'} />
        <WebView source={{ uri: 'https://openkb.markmoffat.com/' }} />
      </SafeAreaView>
    );
  }

  _navAction = navAction => {
    this.props.navigation.goBack();
  };
}

export default AideScreen;
