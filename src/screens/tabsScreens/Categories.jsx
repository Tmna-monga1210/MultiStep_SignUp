import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import LeftScroll from '../../components/categoryPage/LeftScroll';
import RightScroll from '../../components/categoryPage/RightScroll';

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
