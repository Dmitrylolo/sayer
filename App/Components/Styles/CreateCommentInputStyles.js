import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  inputContainer: {
    flex: 7,
    paddingLeft: Metrics.baseMargin,
  },
  input: {
    backgroundColor: Colors.inputCommentBackground,
    borderRadius: 3,
    elevation: 1,
    paddingLeft: Metrics.doubleBaseMargin,
    fontSize: 18,
    color: 'black',
    borderColor: Colors.inputCommentBorder,
  },
  buttonContainer: {
    marginHorizontal: Metrics.doubleBaseMargin,
    flex: 1,
  },
});
