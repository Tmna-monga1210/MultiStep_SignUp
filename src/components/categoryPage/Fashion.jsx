import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { categoryData } from '../../data/data';


const Fashion = () => {
  return (
    <>
      {(categoryData.slice(1,3)).map((item) => (
        <View style={styles.content} key={item.id}>
          <Text style={styles.store} key={item.id} >{item.title}</Text>

          <View style={styles.cardContent}>
            {(item.data).map((item) => (
              <View style={styles.imageContainers} key={item.dataId}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  store: {
    fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif',
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
    paddingBottom: 18,
  },
  content: {
    margin: 18,
  },
  cardContent: {
    flexDirection: 'row',
    flexWrap: "wrap",
  },
  imageContainers: {
    width: 68,
    height: 68,
    borderRadius: 40,
    backgroundColor: '#E6ECF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginRight: 10,
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  text: {
    position: 'absolute',
    bottom: -20,
    fontFamily: 'inter_regular, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 11,
    color: 'black',
  }

})

export default Fashion
