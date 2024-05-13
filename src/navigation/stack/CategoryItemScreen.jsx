import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryItem from '../../components/categoryItemPage/CategoryItem';
import Categories from '../../screens/tabsScreens/Categories';

const Stack = createNativeStackNavigator();

const CategoryItemScreen = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name='CategoriesPage'
          component={Categories}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name='CategoryItem'
          component={CategoryItem}
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>

  )
}

export default CategoryItemScreen
