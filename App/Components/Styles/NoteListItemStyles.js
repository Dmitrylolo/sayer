import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.separator,
    width: Metrics.screenWidth,
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
  listItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  noteTextContainer: {
    width: '75%',
  },
  noteText: {
    fontSize: 22,
    color: Colors.noteText,
  },
});
