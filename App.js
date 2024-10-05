import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // vector icons for tabs
//import the views
import Explorescreen from './components/Explorescreen';
import ShopScreen from './components/Shopscreen';
import CartScreen from './components/Cartscreen';
import FavouritesScreen from './components/Favouritescreen';
import AccountScreen from './components/Accountscreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator   //tab navigation
        screenOptions={{
          tabBarActiveTintColor: 'green', // change the color ti green when active
          tabBarInactiveTintColor: 'gray', //  Change the color to grey in incative
        }}
      >
       
        <Tab.Screen 
          name="Shop"  
          component={ShopScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="basket-outline" color={color} size={size} />
            ),
          }} 
        />
         <Tab.Screen 
          name="Explore"  
          component={Explorescreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="search-outline" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Cart"  
          component={CartScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="cart-outline" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Favourites"  
          component={FavouritesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart-outline" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen 
          name="Account"  
          component={AccountScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" color={color} size={size} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
