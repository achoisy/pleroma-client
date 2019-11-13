import React from 'react';
import { View, Platform } from 'react-native';
import { Appbar, Searchbar, IconButton } from 'material-bread';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Style from './HeaderStyle';
import ApplicationStyles from '../../theme/ApplicationStyles';
import { Colors } from '../../theme/';

const NavigationIcon = ({ navAction, navType }) => {
  switch (navType) {
    case 'HOME':
      return (
        <IconButton
          name="menu"
          size={24}
          iconComponent={MaterialCommunityIcons}
          color={Colors.primaryColor.main}
          style={ApplicationStyles.icon}
          onPress={() => navAction()}
        />
      );
    default:
      return (
        <IconButton
          // TODO: set back icon depending on platform
          name={Platform.OS === 'ios' ? 'arrow-back' : 'close'}
          size={24}
          color={Colors.primaryColor.main}
          style={ApplicationStyles.icon}
          onPress={() => navAction()}
        />
      );
  }
};

const ActionItems = ({ navAction, navType }) => {
  switch (navType) {
    case 'HOME':
      return [
        <IconButton
          name="search"
          size={24}
          color={Colors.primaryColor.main}
          key={1}
          style={ApplicationStyles.icon}
          onPress={() => navAction('SEARCH')}
        />,
        <IconButton
          name="account-group"
          size={24}
          iconComponent={MaterialCommunityIcons}
          color={Colors.primaryColor.main}
          style={ApplicationStyles.icon}
          key={2}
          onPress={() => navAction('SUIVIS')}
        />,
        <IconButton
          name="qrcode-scan"
          size={24}
          iconComponent={MaterialCommunityIcons}
          color={Colors.primaryColor.main}
          style={ApplicationStyles.icon}
          key={3}
          onPress={() => navAction('QRSCAN')}
        />,
      ];
    default:
      return [];
  }
};

const SearchNavigationIcon = ({ navAction }) => {
  return (
    <IconButton
      name={Platform.OS === 'ios' ? 'arrow-back' : 'close'}
      size={24}
      color={Colors.primaryColor.main}
      style={ApplicationStyles.icon}
      onPress={() => navAction()}
    />
  );
};

const SearchCloseIcon = ({ searchTermReset, searchTerm }) => {
  if (searchTerm.length > 0) {
    return (
      <IconButton
        name={Platform.OS === 'ios' ? 'close' : 'refresh'}
        size={24}
        color={Colors.primaryColor.main}
        style={ApplicationStyles.icon}
        onPress={() => searchTermReset()}
      />
    );
  }
  return false;
};

export default function Header({
  navAction,
  navType,
  title,
  searchTerm,
  searchTermOnChange,
  searchTermReset,
}) {
  return (
    <View>
      <Appbar
        title={title}
        titleStyles={ApplicationStyles.appbar.title}
        color={ApplicationStyles.appbar.backgroundColor}
        barType={'normal'}
        navigation={<NavigationIcon navType={navType} navAction={navAction} />}
        actionItems={ActionItems({ navAction, navType })}>
        {navType === 'SEARCH' ? (
          <Searchbar
            value={searchTerm}
            onChangeText={value => searchTermOnChange(value)}
            placeholder={'Rechercher'}
            navigationIcon={SearchNavigationIcon({ navAction })}
            closeIcon={SearchCloseIcon({ searchTermReset, searchTerm })}
          />
        ) : null}
      </Appbar>
    </View>
  );
}
