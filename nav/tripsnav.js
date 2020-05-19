import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import landingpageScreen from '../screens/landingpageScreen';



const Tripsnav = createStackNavigator({
    Landingpage: landingpageScreen
},{
    defaultNavigationOptions : {
        headerStyle: {
            backgroundColor:  Platform.OS === 'android' ? '#94cc3f' : '#d303fc',
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