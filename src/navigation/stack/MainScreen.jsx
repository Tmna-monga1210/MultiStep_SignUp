import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from '../tabs/MainTabs';
import CategoryItem from '../../components/categoryItemPage/CategoryItem';
import { TouchableOpacity, View, Image, TextInput, StyleSheet } from 'react-native';
import Arrow from 'react-native-vector-icons/AntDesign';
import { CartIcon } from '../../assets';
import { Badge } from 'react-native-elements';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <>
      <Stack.Navigator >
        <Stack.Screen
          name='HomeScreen'
          component={MainTabs}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen
          name='CategoryItem'
          component={CategoryItem}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#D8E7FE', // Set your desired header color here
            },
            headerRight: () => (
              <View>
                <TouchableOpacity>
                  <Image
                    source={CartIcon}
                    style={{ width: 25, height: 25, tintColor: 'black' }}
                  />
                  <Badge value = '3'
                    badgeStyle={{ backgroundColor: 'red', position: 'absolute', top: -32, right: -4 }}
                    textStyle={{ color: 'white', fontSize: 12 }}
                    />
                </TouchableOpacity>
              </View>
            ),
            headerTitle: () => (
              <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                  <Arrow name="search1" size={20} style={styles.searchIcon} />
                  <TextInput
                    placeholder="Search for products"
                    placeholderTextColor= 'grey'
                    style={styles.searchInput}
                  />
                </View>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </>
  )
}


const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 110,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e8fff',
    borderRadius: 50,
    backgroundColor: 'white',
    paddingLeft: 8,
  },
  searchIcon: {
    color: 'grey',
  },
  searchInput: {
    flex: 1,
    height: 38,
    fontSize: 15,
    color: 'grey',
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

export default MainScreen
