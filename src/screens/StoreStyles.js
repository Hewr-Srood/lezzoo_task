import { StyleSheet, Dimensions } from 'react-native';
import colors from '../configs/colors';

const StoreStyles = StyleSheet.create({
  storeScreen: { paddingLeft: 20, paddingRight: 20 },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.grey,
  },
  wrapper: {
    height: Dimensions.get('screen').height * 0.75,
    justifyContent: 'space-around',
  },
  list: {
    height: Dimensions.get('screen').height * 0.7,
  },
  selector: {
    width: 200,
  },
});
export default StoreStyles;
