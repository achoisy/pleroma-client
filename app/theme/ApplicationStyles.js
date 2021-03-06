/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import Colors from './Colors';

export default {
  screen: {
    container: {
      flex: 1,
    },
  },
  header: {},
  icon: {
    height: 48,
    width: 48,
  },
  body: {
    backgroundColor: Colors.primaryUltraLight,
    height: '100%',
  },
  appbar: {
    backgroundColor: Colors.backgroundColor.main,
    title: {
      color: Colors.primaryColor.main,
      fontFamily: 'WorkSans-Medium',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: 20,
    },
  },
};
