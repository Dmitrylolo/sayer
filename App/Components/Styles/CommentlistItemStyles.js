import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: Metrics.doubleBaseMargin,
    borderBottomWidth: 1,
    borderBottomColor: Colors.commentSeparator,
    paddingBottom: 40,
  },
  avatarContainer: {
    flex: 1,
    paddingTop: Metrics.smallMargin,
  },
  avatar: {
    backgroundColor: '#af7d93',
    width: 64,
    height: 64,
  },
  commentContainer: {
    flex: 3.3,
  },
  comment: {
    lineHeight: 25,
    fontSize: 16,
  },
});
