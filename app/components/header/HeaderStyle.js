import { StyleSheet } from 'react-native';
import Fonts from '../../theme/Fonts';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
  },
  header: {
    color: '#888000',
  },
  icon: {
    ...ApplicationStyles.icon,
  },
});
