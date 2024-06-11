import React from 'react'
import { View, Text } from 'react-native'
import { signUpStyle } from '../constants/style'

const Inputs = ({iconName,iconSize, placeholder, handleChange, handleBlur, value }) => {
  return (
    <View style={signUpStyle.emailInput}>
      <Name name={iconName} style={{ color: '#B5C2F5', marginRight: 10 }} size={iconSize} />
      <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
      <TextInput
        placeholder= {placeholder}
        style={signUpStyle.emailTextInput}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={value}
      />
    </View>
  )
}

export default Inputs
