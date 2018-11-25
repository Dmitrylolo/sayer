import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    width: Metrics.roundButtonDiameter,
    height: Metrics.roundButtonDiameter,
    borderRadius: Metrics.roundButtonDiameter / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.roundButtonDefaultColor,
  },
  content: {
    color: Colors.roundButtonContentColor,
    fontSize: Metrics.roundButtonContentSize,
  },
});
