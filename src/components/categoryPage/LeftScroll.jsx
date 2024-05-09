import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ForYou, Fashion, Appliances, Mobiles, Home, Furniture, PersonalCare, ToysBaby, Medicines, Sports } from '../../assets';
import RightScroll from './RightScroll';

const LeftScroll = () => {
  const categories = [
    { id: 0, imageSource: ForYou, categoryName: 'For You' },
    { id: 1, imageSource: Fashion, categoryName: 'Fashion' },
    { id: 2, imageSource: Appliances, categoryName: 'Appliances' },
    { id: 3, imageSource: Mobiles, categoryName: 'Mobiles' },
    { id: 4, imageSource: Home, categoryName: 'Home' },
    { id: 5, imageSource: Furniture, categoryName: 'Furniture' },
    { id: 6, imageSource: PersonalCare, categoryName: 'Personal Care' },
    { id: 7, imageSource: ToysBaby, categoryName: 'Toys & Baby' },
    { id: 8, imageSource: Medicines, categoryName: 'Medicines' },
    { id: 9, imageSource: Sports, categoryName: 'Sports Hub' },
  ];
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    handleCategoryClick(0);
  }, [])

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <>
      <ScrollView style={styles.scrollOne} showsVerticalScrollIndicator={false}>
        <View>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[styles.card, selectedCategory === category.id && styles.clickedCard]}
              onPress={() => handleCategoryClick(category.id)}
            >
              <View style={[styles.imageContainer, selectedCategory === category.id && styles.clickedImageContainer]}>
                <Image source={category.imageSource} style={[styles.image, selectedCategory === category.id && styles.clickedImage]} />
              </View>
              <Text style={[styles.font, selectedCategory === category.id && styles.clickedText]}>
                {category.categoryName}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <ScrollView style={styles.scrollTwo} showsVerticalScrollIndicator={false}>
        <RightScroll selectedCategory={selectedCategory} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollOne: {
    width: '25%',
    backgroundColor: '#E6ECF5',
  },
  scrollTwo: {
    width: '75%',
    backgroundColor: 'white',
  },
  card: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#D3D3D3',
    paddingTop: 6,
    paddingBottom: 6,
    marginRight: 10,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickedCard: {
    marginRight: 0,
    marginLeft: 0,
    backgroundColor: 'white',
  },
  font: {
    fontFamily: 'inter_regular,fallback-inter_regular,Arial,sans-serif',
    fontWeight: 'bold',
    fontSize: 11,
  },
  image: {
    width: 50,
    height: 50,
  },
  clickedImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  clickedText: {
    color: '#0F52BA',
    fontSize: 13,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#E6ECF5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clickedImageContainer: {
    backgroundColor: '#E6ECF5',
  },
  // firstCard: {
  //   borderBottomRightRadius: 40,
  //   borderColor: 'black'
  // },
  // lastCard: {
  //   borderTopRightRadius: 40,
  //   borderColor: 'black'
  // }
})

export default LeftScroll


// const isFirstCategory = index === 0
// const isLastCategory = index === Object.keys(imageSource).length - 1;

// console.log(isFirstCategory)
// console.log(isLastCategory)

// const cardStyle = [
//   styles.card,
//   isSelected && styles.clickedCard,
//   isFirstCategory && styles.firstCard, // Add style for first category
//   isLastCategory && styles.lastCard, // Add style for last category
// ];

// const imageContainerStyle = [
//   styles.imageContainer,
//   isSelected && styles.clickedImageContainer,
// ];

// const textStyle = [styles.font, isSelected && styles.clickedText];

// return (
//   <View style={cardStyle}>
//     <TouchableOpacity key={index} onPress={() => handleCategoryClick(index)}>
//       <View style={imageContainerStyle}>
//         <Image source={imageSource} style={styles.image} />
//       </View>
//     </TouchableOpacity>
//     <Text style={textStyle}>{categoryName}</Text>
//   </View>
// );