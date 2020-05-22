import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import landingpageScreen from '../screens/landingpageScreen';
import TripsScreen from '../screens/tripsScreen';
import SingletripScreen from '../screens/singletripScreen';
import Journeyscreen from '../screens/journeyScreen';



const Tripsnav = createStackNavigator({
    Landingpage: landingpageScreen,
    Trips: TripsScreen,
    Singletrip: SingletripScreen,
    Journey: Journeyscreen
},{
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor:  Platform.OS === 'android' ? /* '#94cc3f' */ '#00a6a6' : '#d303fc',
          },
          headerTintColor: 'white',
          headerTitleStyle: { 
          },
          headerTitleAlign: 'center'
         
    }
})

/* const MealsFavTabNavigator = createMaterialBottomTabNavigator({
    Meals: {
        screen: Mealsnav,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                    name="ios-star"
                    size={20}
                    ></Ionicons>
                )
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons
                    name="ios-star"
                    size={20}
                    ></Ionicons>
                )
            }
        }
    }
}) */


export default createAppContainer(Tripsnav);