import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Star from 'react-native-vector-icons/FontAwesome';
import Arrow from 'react-native-vector-icons/AntDesign';
import Heart from 'react-native-vector-icons/EvilIcons';
import { ACdata } from '../../data/data';

const AppliancesItems = () => {
  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <Text style={styles.text}>Sort By <Arrow name='down' /></Text>
          <Text style={styles.text}>Filter</Text>
          <Text style={styles.text}>Compare</Text>
          <Text style={styles.text}>Capacity</Text>
          <Text style={styles.text}>Price</Text>
          <Text style={styles.text}>Discount</Text>
          <Text style={styles.text}>Brand</Text>
        </ScrollView>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {ACdata.map((item) => (
          <View style={styles.content} key={item.itemId}>
            <View style={styles.parent}>
              {item.bestseller ? (
                <Text style={styles.best}>{item.bestseller}</Text>
              ) : null}
              <View style={styles.heartContainer}>
                <Heart name='heart' size={30} />
              </View>
            </View>
            <View style={styles.image}>
              <Image source={item.image} style={{ height: 100, width: 100 }} />
              <View style={styles.data}>
                {item.sponsored ? (
                  <Text style={{ color: '#B8BBC0', fontSize: 13 }}>{item.sponsored}</Text>
                ) : null}
                <Text style={{ color: 'black' }}>
                  {item.itemName}
                </Text>
                <View style={{ flexDirection: 'row', paddingTop: 7 }}>
                  <Star name='star' size={15} style={{ color: '#078C03', marginRight: 2 }} />
                  <Star name='star' size={15} style={{ color: '#078C03', marginRight: 2 }} />
                  <Star name='star' size={15} style={{ color: '#078C03', marginRight: 2 }} />
                  <Star name='star' size={15} style={{ color: '#078C03', marginRight: 2 }} />
                  <Star name='star' size={15} style={{ color: '#E1E1E1', marginRight: 2 }} />
                  <Text style={{ marginRight: 2 }}>{item.rating}</Text>
                  {item.assured ? (
                    <Image source={item.assured} style={{ width: 60, height: 15, marginRight: 2 }} />
                  ) : null}
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 3, alignItems: 'center' }}>
                  <Arrow name="arrowdown" color={'#078C03'} size={20} />
                  <Text style={{ color: '#078C03', fontSize: 20, fontWeight: 'bold', marginRight: 4 }}>{item.percentage}</Text>
                  <Text style={{ color: '#A1A2A6', fontSize: 20, fontWeight: 'bold', marginRight: 4, textDecorationLine: 'line-through' }}>{item.pervPrice}</Text>
                  <Star name='rupee' size={16} style={{ color: 'black', paddingTop: 3, marginRight: 1 }} />
                  <Text style={{ color: '#111111', fontSize: 20, fontWeight: 'bold', marginRight: 3 }}>{item.newPrice}</Text>
                </View>
                {item.offers ? (
                  <Text style={{ color: '#078C03', fontSize: 12, paddingTop: 5 }}>{item.offers}</Text>
                ) : null}
                {item.discount ? (
                  <Text style={styles.bests}>{item.discount}</Text>
                ) : null}
                <Text style={{ color: 'black', fontSize: 12, paddingTop: 5 }}>{item.exchnage}</Text>
                <Text style={{ color: 'black', fontSize: 12, paddingTop: 5 }}>{item.delivery}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20 }}>
              <Text style={styles.feature}>Annual Power Usage: {item.power} W</Text>
              <Text style={styles.feature}>Room Size: {item.roomSize} sgft</Text>
            </View>
          </View>
        ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    flexDirection: 'row',
    alignItems: "flex-start",
  },
  text: {
    color: 'black',
    fontSize: 15,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 8,
  },
  best: {
    backgroundColor: "#03A696",
    color: "white",
    fontWeight: 'bold',
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 11.5,
  },
  bests:{
    marginTop: 5,
    marginRight: 48,
    backgroundColor: "#E8DDFF",
    color: "#7048C5",
    fontWeight: 'bold',
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 13,
  },
  content: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#A1A2A6',
    padding: 10,
  },
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    flexDirection: 'row',
  },
  data: {
    paddingLeft: 15,
    marginRight: 120,
  },
  feature: {
    borderColor: '#A1A2A6',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 11.5,
    marginLeft: 5,
    marginRight: 10,
    color: '#A1A2A6',
  },
  heartContainer: {
    marginLeft: 'auto', 
  },
})

export default AppliancesItems
