import { StyleSheet, Dimensions } from 'react-native';
import colors from '../configs/colors';

const HeaderStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    height: Dimensions.get('screen').height * 0.15,
    paddingTop: 10,
  },
  HeaderTextContainer: {
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkGrey,
  },

  headerSubText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey,
  },
  subtitle: {
    fontSize: 20,
  },
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bage: {
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1,
    borderRadius: 500,
  },
  bageText: {
    fontSize: 10,
    color: 'white',
  },
});
export default HeaderStyles;
