import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Started from './pages/Started';
import Main from './pages/Main';

const appRoutes = createSwitchNavigator(
  {
    Main: Main,
    Started: Started,
  },
  {
    initialRouteName: 'Started',
  },
);

export default createAppContainer(appRoutes);
