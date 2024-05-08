import React from 'react'
import ForYou from './ForYou'
import Fashion from './Fashion'
import { View } from 'react-native'

const RightScroll = ({selectedCategory}) => {
  const renderCategoryComponent = () => {
    switch (selectedCategory) {
      case 0:
        return <ForYou />;
      case 1:
        return <Fashion />;
      // Add other cases for different categories
      default:
        return null;
    }
  };

  return <View>{renderCategoryComponent()}</View>;

}
export default RightScroll
