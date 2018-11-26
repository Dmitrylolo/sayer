import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    width: '80%',
    marginLeft: Metrics.doubleBaseMargin,
  },
  title: {
    color: Colors.headerTitleColor,
    fontSize: 24,
  },
});
