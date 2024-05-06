import React from 'react'
import {View , Text, StyleSheet} from 'react-native';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  }
})

export default Categories
