import {StyleSheet} from 'react-native';
import Fonts from '../../theme/Fonts';
import Colors from '../../theme/Colors';
import ApplicationStyles from '../../theme/ApplicationStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: '#888000',
  },
  header: {
    color: '#888000',
  },
  icon: {
    ...ApplicationStyles.icon,
  },
  statistics: {
    width: '100%',
    marginLeft: 16,
    marginTop: 10,
  },
});
