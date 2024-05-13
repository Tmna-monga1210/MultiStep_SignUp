import React from 'react'
import { View, StyleSheet } from 'react-native';
import LeftScroll from '../../components/categoryPage/LeftScroll';

const Categories = () => {
  return (
    <View style={styles.container}>
      <LeftScroll />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row'
  }
})

export default Categories
