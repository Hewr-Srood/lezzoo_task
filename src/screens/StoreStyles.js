import { StyleSheet, Dimensions } from 'react-native';
import colors from '../configs/colors';

const StoreStyles = StyleSheet.create({
  storeScreen: { paddingLeft: 20, paddingRight: 20 },
  wrapper: {
    height: Dimensions.get('screen').height * 0.75,
    justifyContent: 'space-around',
  },
  list: {
    height: Dimensions.get('screen').height * 0.7,
  },
  title: {
    alignSelf: 'baseline',
  },

  filterIconContainer: {
    width: 100,
    height: 50,
    marginRight: 10,
    backgroundColor: colors.grey,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default StoreStyles;
