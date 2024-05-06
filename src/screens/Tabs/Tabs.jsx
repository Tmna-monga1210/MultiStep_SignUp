import React from 'react'
import { Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../components/Home';
import Categories from '../../components/Categories';
import Notifications from '../../components/Notifications';
import Account from '../../components/Account';
import Cart from '../../components/Cart';
import Icons from 'react-native-vector-icons/Feather';
import { BottomTabIcons, CartIcon, NotificationIcon, CategoriesIcon } from '../../assets';

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            headerTitleAlign: 'center',
            title: "Home",
            tabBarLabel: ({ focused }) => (
              <Text style={{
                color: focused ? '#1e8fff' : '#141414', fontSize: 10, marginTop: -6,
                fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif'
              }}>Home</Text>
            ),
            tabBarIcon: ({ color, size, focused }) => (
              <Icons name="home" size={24} color={focused ? '#1e8fff' : '#141414'} />
            )
          }} />
        <Tab.Screen
          name='Categories'
          component={Categories}
          options={{
            title: 'All Categories',
            headerTitleAlign: 'center',
            tabBarLabel: ({ focused }) => (
              <Text style={{
                color: focused ? '#1e8fff' : '#141414', fontSize: 10, marginTop: -6,
                fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif'
              }}>Categories</Text>
            ),
            tabBarIcon: ({ focused, size }) => (
              <Image
                source={CategoriesIcon}
                style={{ width: 23, height: 23, tintColor: focused ? '#1e8fff' : '#141414' }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: 'Notifications',
            headerTitleAlign: 'center',
            tabBarLabel: ({ focused }) => (
              <Text style={{
                color: focused ? '#1e8fff' : '#141414', fontSize: 10, marginTop: -6,
                fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif'
              }}>Notifications</Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Image
                source={NotificationIcon}
                style={{ width: 25, height: 25, tintColor: focused ? '#1e8fff' : '#141414' }}
              />
            ),
          }} />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            title: 'Account',
            headerTitleAlign: 'center',
            tabBarLabel: ({ focused }) => (
              <Text style={{
                color: focused ? '#1e8fff' : '#141414', fontSize: 10, marginTop: -6,
                fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif'
              }}>Account</Text>
            ),
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={BottomTabIcons}
                style={{ width: 25, height: 25, tintColor: focused ? '#1e8fff' : '#141414' }}
              />
            ),
          }} />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Cart',
            headerTitleAlign: 'center',
            tabBarLabel: ({ focused }) => (
              <Text style={{
                color: focused ? '#1e8fff' : '#141414', fontSize: 10, marginTop: -6,
                fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif'
              }}>Cart</Text>
            ),
            tabBarIcon: ({ color, size, focused }) => (
              <Image
                source={CartIcon}
                style={{ width: 27, height: 27, tintColor: focused ? '#1e8fff' : '#141414' }}
              />
            ),
          }} />
      </Tab.Navigator>
    </>
  )
}

export default Tabs
