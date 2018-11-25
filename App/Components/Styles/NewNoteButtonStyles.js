import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    marginTop: Metrics.doubleBaseMargin,
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    backgroundColor: Colors.newNoteButtonColor,
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1.0,
    elevation: 33,
    alignSelf: 'center',
    padding: 20,
  },
  text: {
    fontSize: 48,
    color: Colors.newNoteButtonText,
    lineHeight: 56,
    fontWeight: 'bold',
  },
});
