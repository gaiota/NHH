import { createAppContainer ,createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import styles from './Styles/NavigationStyles'
import HealthScreen from '../Containers/Health/HealthScreen'
import PeopleScreen from '../Containers/People/PeopleScreen'
import SyncScreen from '../Containers/Syn/SyncScreen'
import WarningScreen from '../Containers/Warning/WarningScreen'
import UserScreen from '../Containers/User/UserScreen'
import LoginScreen from '../Containers/Login/LoginScreen'
import RegisterScreen from '../Containers/Register/RegisterScreen'

// Manifest of possible screens
const PrimaryNav = createBottomTabNavigator({
  HealthScreen: { screen: HealthScreen },
  PeopleScreen: { screen: PeopleScreen },
  SyncScreen: { screen: SyncScreen },
  UserScreen: { screen: UserScreen },
  WarningScreen: { screen: WarningScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HealthScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

const stackNavigation = createStackNavigator(
  {
    RegisterScreen: { screen: RegisterScreen },
    LoginScreen: { screen: LoginScreen },
    PrimaryNav: { screen: PrimaryNav },
  }, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)



export default createAppContainer(stackNavigation)
