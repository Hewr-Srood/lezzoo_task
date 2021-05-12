import { StyleSheet, Dimensions } from 'react-native';
const InitStyles = StyleSheet.create({
  initScreen: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  initHeader: {
    fontSize: 20,
    marginTop: 10,
    // marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    height: Dimensions.get('screen').height * 0.75,

    alignItems: 'flex-end',
  },
});
export default InitStyles;
