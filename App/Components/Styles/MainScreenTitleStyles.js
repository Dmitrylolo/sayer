import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: Metrics.titleMargin,
  },
  mainText: {
    fontSize: 32,
    color: Colors.headerTitleColor,
    fontWeight: 'bold',
    letterSpacing: 1.1,
  },
  secondaryText: {
    fontSize: 16,
    color: Colors.headerTitleColor,
  },
});
