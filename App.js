import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorite-context';
import { Provider } from 'react-redux'
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function TabNavigation() {
  return <Tab.Navigator screenOptions={{
    contentStyle: { backgroundColor: '#3f2f25' }
  }}>
    <Tab.Screen
      name='Categories'
      component={CategoriesScreen}
      options=
      {{
        tabBarIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
      }}
    />
    <Tab.Screen name='Favorite'
      component={FavoriteScreen}
      options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="star" color={color} size={size} />) }} />
  </Tab.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            // contentStyle: { backgroundColor: '#3f2f25' }
          }}
          >
            <Tab.Screen
              name='MealsCategories'
              component={TabNavigation}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}
              options={{ contentStyle: { backgroundColor: '#3f2f25' } }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
