import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  commentsContainer: {
    flex: 8,
  },
  createCommentContainer: {
    flex: 1,
    backgroundColor: Colors.createCommentBackground,
  },
  headerMargin: { marginLeft: Metrics.doubleBaseMargin },
  noCommentsContainer: {
    alignItems: 'center',
    marginTop: Metrics.doubleBaseMargin,
  },
  noCommentsText: { textAlign: 'center' },
});
