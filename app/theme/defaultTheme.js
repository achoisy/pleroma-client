// Export light theme for Material Bread
import Colors from './Colors';

export default {
  primary: {
    main: '#003366',
    dark: '#002142',
    light: '#5C7D9D',
  },
  secondary: {
    main: '#CC9933',
    dark: '#826221',
    light: '#DEBD7D',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
  },
  textColor: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  text: {
    fontFamily: 'WorkSans-regular',
  },
  background: {
    default: '#fafafa',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(0, 0, 0, 0.14)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
  paper: {
    backgroundColor: 'white',
    borderRadius: 2,
  },
  divider: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,.12)',
  },
  drawer: {
    position: 'absolute',
    zIndex: 100,
    borderRightWidth: 0,
    borderRightColor: 'rgba(0,0,0,.12)',
    borderStyle: 'solid',
    backgroundColor: 'white',
  },
  drawerHeader: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.12)',
    backgroundColor: Colors.primaryColor.dark,
    borderRightWidth: 0,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  drawerHeaderAvatarContainer: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeaderTitle: {
    color: 'white',
    fontFamily: 'WorkSans-SemiBold',
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 35,
    /* identical to box height */
    letterSpacing: 0.05,
  },
  drawerHeaderSubtitle: {
    marginTop: 4,
    color: Colors.primaryColor.light,
    fontFamily: 'WorkSans-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 48,
    borderRadius: 4,
    paddingHorizontal: 8,
    zIndex: 10,
  },
  drawerItemActive: {
    backgroundColor: Colors.primaryColor.ultraLight,
    color: Colors.secondaryColor.main,
  },
  drawerItemText: {
    fontFamily: 'WorkSans-Regular',
    fontSize: 18,
    color: Colors.primaryColor.light,
    fontWeight: 'normal',
    zIndex: 10,
  },
  drawerItemIcon: {
    color: Colors.primaryColor.light,
    size: 24,
  },
  button: {
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    color: '#2196f3',
  },
  outlinedButton: {
    borderColor: 'rgba(0,0,0,.29)',
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  containedButton: {
    paddingHorizontal: 16,
    backgroundColor: '#2196f3',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.5,
  },
  bodyTextTwo: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.25,
  },
  caption: {
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0.4,
  },
  headingOne: {
    fontWeight: '300',
    fontSize: 96,
    lineHeight: 96,
    letterSpacing: -1.5,
  },
  headingTwo: {
    fontWeight: '300',
    fontSize: 60,
    lineHeight: 60,
    letterSpacing: -0.5,
  },
  headingThree: {
    fontSize: 48,
    lineHeight: 48,
  },
  headingFour: {
    fontSize: 34,
    lineHeight: 34,
    letterSpacing: 0.25,
  },
  headingFive: {
    fontSize: 24,
    lineHeight: 24,
  },
  headingSix: {
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0.15,
    fontWeight: '500',
  },
  overline: {
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    height: 56,
    paddingHorizontal: 0,
  },
  searchBarNavigationIcon: {
    color: 'black',
    size: 24,
  },
  searchBarcloseIcon: {
    color: 'black',
    size: 24,
  },
  searchInput: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    marginLeft: 8,
    height: 48,
  },
  subtitleOne: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.15,
  },
  subtitleTwo: {
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.1,
    fontWeight: '500',
  },
};
