import React from 'react'
import { Text, Image, TouchableOpacity, Alert, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../components/Home';
import Categories from '../../components/Categories';
import Notifications from '../../components/Notifications';
import Account from '../../components/Account';
import Cart from '../../components/Cart';
import Icons from 'react-native-vector-icons/Feather';
import SearchIcon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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
                fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif' , fontWeight: 'bold'
              }}>Home</Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Icons name="home" size={24} color={focused ? '#1e8fff' : '#141414'} />
            )
          }} />
        <Tab.Screen
          name='Categories'
          component={Categories}
          options={{
            title: 'All Categories',
            headerTitleStyle: {
              fontSize: 18,
            },
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 10 }}>
                <TouchableOpacity onPress={() => {Alert.alert('Search')}}>
                  <SearchIcon
                    name="search"
                    size={18}
                    style={{ color: 'black', marginRight: 20, marginTop: 3 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {Alert.alert('Mic')}}>
                  <Icon
                    name="microphone"
                    size={25}
                    style={{ color: 'black' }}
                  />
                </TouchableOpacity>
              </View>
            ),
            tabBarLabel: ({ focused }) => (
              <Text style={{
                color: focused ? '#1e8fff' : '#141414', fontSize: 10, marginTop: -6,
                fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif' ,fontWeight: 'bold'
              }}>Categories</Text>
            ),
            tabBarIcon: ({ focused }) => (
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
                fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif' , fontWeight: 'bold'
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
                fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif' , fontWeight: 'bold'
              }}>Account</Text>
            ),
            tabBarIcon: ({ focused }) => (
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
                fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif' , fontWeight: 'bold'
              }}>Cart</Text>
            ),
            tabBarIcon: ({ focused }) => (
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
