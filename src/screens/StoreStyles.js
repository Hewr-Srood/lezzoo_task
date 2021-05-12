import { StyleSheet } from 'react-native';
import colors from '../configs/colors';

const StoreStyles = StyleSheet.create({
  storeScreen: { paddingLeft: 20, paddingRight: 20 },
  title: {
    alignSelf: 'baseline',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
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
