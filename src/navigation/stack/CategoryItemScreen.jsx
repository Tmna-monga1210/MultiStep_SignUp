import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryItem from '../../components/categoryItemPage/categoryItem';

const Stack = createNativeStackNavigator();

const CategoryItemScreen = () => {
  return (
    <>
    <Stack.Navigator>
      <Stack.Screen
        name='CategoryItem'
        component={CategoryItem}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
      
    </>
  )
}

export default CategoryItemScreen
