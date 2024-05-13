import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { categoryData } from '../../data/data';
import Arrow from 'react-native-vector-icons/AntDesign'


const ForYou = () => {
  const [expandedCategories, setExpandedCategories] = useState(false);

  // Function to toggle showing all items for a specific category
  const toggleCategoryExpansion = (categoryId) => {
    setExpandedCategories((prevExpanded) => ({
      ...prevExpanded,
      [categoryId]: !prevExpanded[categoryId],
    }));
  };

  return (
    <>
      {(categoryData.slice(0, 3)).map((category) => (
        <View style={styles.content} key={category.id}>
          <Text style={styles.store}>{category.title}</Text>
          <View style={styles.cardContent} key={category.id}>
            {(category.data).map((item, index) => (
              <TouchableOpacity key={item.dataId}>
                {
                  expandedCategories[category.id] || index < 7 ? (
                    <View style={styles.imageContainers} key={item.dataId}>
                      <>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.text}>{item.text}</Text>
                      </>
                    </View>
                  ) : null
                }
              </TouchableOpacity>
            ))}
            <View key={category.id}>
              {category.data.length > 7 && (
                <View key={category.id}>
                  <TouchableOpacity onPress={() => toggleCategoryExpansion(category.id)} key={category.id} >
                    <View style={styles.imageContainers}>
                      {expandedCategories[category.id] ?
                        <View key={category.id}>
                          <Arrow name='arrowup' size={35} color={'#0F52BA'} />
                          <Text style={styles.texts}>View Less</Text>
                        </View> :
                        <View key={category.id}>
                          <Arrow name='arrowdown' size={35} color={'#0F52BA'} />
                          <Text style={styles.texts} >View Less</Text>
                        </View>
                      }
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
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
  },
  texts: {
    position: 'absolute',
    bottom: -36,
    fontFamily: 'inter_regular, Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: 11,
    color: 'black',
  }

})
export default ForYou;
