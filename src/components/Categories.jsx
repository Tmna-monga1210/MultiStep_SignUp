import React, { useEffect , useState} from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import LeftScroll from './ScrollView/LeftScroll';
import RightScroll from './ScrollView/RightScroll';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategorySelection = (categoryIndex) => {
    setSelectedCategory(categoryIndex);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollOne} showsVerticalScrollIndicator={false}>
        <LeftScroll onSelectCategory={handleCategorySelection} />
      </ScrollView>
      <ScrollView style={styles.scrollTwo} showsVerticalScrollIndicator={false}>
        <RightScroll selectedCategory={selectedCategory}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  scrollOne: {
    width: '25%',
    backgroundColor: '#E6ECF5',
  },
  scrollTwo: {
    width: '75%',
    backgroundColor: 'white',
  },
})

export default Categories
