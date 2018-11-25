import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    width: Metrics.roundedCommentsDiameter,
    height: Metrics.roundedCommentsDiameter,
    borderRadius: Metrics.roundedCommentsDiameter / 2,
    backgroundColor: Colors.roundedComments,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  amount: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
});
