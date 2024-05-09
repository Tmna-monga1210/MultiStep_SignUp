import React from 'react'
import ForYou from './ForYou'
import Fashion from './Fashion'
import Appliances from './Appliances'
import Mobiles from './Mobiles'
import { View } from 'react-native'

const RightScroll = ({selectedCategory}) => {
  console.log(selectedCategory)
  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case 0:
        return <ForYou />;
      case 1:
        return <Fashion />;
      case 2:
        return <Appliances/>
      // case 3:
      //   return <Mobiles/>
      default:
        return null;
    }
  };

  return <View>{renderCategoryComponent()}</View>;
}
export default RightScroll
