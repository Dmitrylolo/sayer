import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    marginTop: Metrics.doubleBaseMargin,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '75%',
    fontSize: 20,
  },
});
