import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { App1 } from '../../assets';
import { categoryData } from '../../data/data';
import Icon from 'react-native-vector-icons/AntDesign'

const Appliances = ({navigation}) => {

  const toNewScreen = (id) =>{
    console.log(id)
    // navigation.navigate('CategoryItem');
  }

  return (
    <>
      <View>
        <Image source={App1} style={{ height: 100, width: 290 }} />
      </View>
      {(categoryData.slice(6, 10)).map((item) => (
        <View style={styles.content} key={item.id}>
          <View style={styles.space}>
            <Text style={styles.store} key={item.id} >{item.title}</Text>
            <TouchableOpacity onPress={() => { Alert.alert('Clicked') }}>
              <Icon name='rightcircle' color={'#0F52BA'} size={25} />
            </TouchableOpacity>
          </View>

          <View style={styles.cardContent}>
            {(item.data).map((item) => (
              <TouchableOpacity onPress={() => {toNewScreen(item.dataId)}}>
                <View style={styles.imageContainers} key={item.dataId}>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.text}>{item.text}</Text>
                </View>
              </TouchableOpacity>
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
  space: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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

export default Appliances
