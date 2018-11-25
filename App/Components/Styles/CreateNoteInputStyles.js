import { StyleSheet } from 'react-native';
import { Metrics } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: Metrics.baseMargin,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: '80%',
  },
});
