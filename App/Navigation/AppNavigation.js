import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from '../Containers/MainScreen';
import CreateNoteScreen from '../Containers/CreateNoteScreen';
import NoteDetailsScreen from '../Containers/NoteDetailsScreen';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    Main: { screen: MainScreen },
    CreateNote: { screen: CreateNoteScreen },
    NoteDetails: { screen: NoteDetailsScreen },
  },
  {
    // Default config for all screens
    headerMode: 'screen',
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: styles.header,
    },
  }
);

export default createAppContainer(PrimaryNav);
