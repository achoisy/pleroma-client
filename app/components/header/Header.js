import React from 'react';
import { View } from 'react-native';
import { Appbar, IconButton } from 'material-bread';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Style from './HeaderStyle';
import ApplicationStyles from '../../theme/ApplicationStyles';
import { Colors } from '../../theme/';

export default function Header({ drawerToggle }) {
  return (
    <View style={ApplicationStyles.header}>
      <Appbar
        color={'#ffffff'}
        barType={'normal'}
        navigation={
          <IconButton
            name="menu"
            size={24}
            iconComponent={MaterialCommunityIcons}
            onPress={() => drawerToggle()}
            color={Colors.primaryMain}
            style={ApplicationStyles.icon}
          />
        }
        onNavigation={() => drawerToggle()}
        actionItems={[
          <IconButton
            name="search"
            size={24}
            color={Colors.primaryMain}
            key={1}
            style={ApplicationStyles.icon}
          />,
          <IconButton
            name="account-group"
            size={24}
            iconComponent={MaterialCommunityIcons}
            color={Colors.primaryMain}
            style={ApplicationStyles.icon}
            key={2}
          />,
          <IconButton
            name="qrcode-scan"
            size={24}
            iconComponent={MaterialCommunityIcons}
            color={Colors.primaryMain}
            style={ApplicationStyles.icon}
            key={3}
          />,
        ]}
      />
    </View>
  );
}
