import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
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
    elevation: 3,
  },
  text: { height: 32, width: 32, fontSize: 25 },
});
