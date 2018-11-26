import { StyleSheet } from 'react-native';
import { Metrics } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  noNotesContainer: {
    alignItems: 'center',
    marginTop: Metrics.doubleBaseMargin,
  },
  noNotesText: { textAlign: 'center' },
});
