import React from 'react'
import { View, Text } from 'react-native'
import { signUp2Style } from '../constants/style'

const Progress = ({currentStep}) => {
  return (
    <View style={signUp2Style.progress}>
      <View style={[signUp2Style.circles, currentStep >= 1 && signUp2Style.filledCircle]}>
        <Text style={[signUp2Style.step, currentStep >= 1 && signUp2Style.setStep]}>1</Text>
      </View>
      <View style={[signUp2Style.line, currentStep >= 2 && signUp2Style.filledLine]}>
      </View>
      <View style={[signUp2Style.circles, currentStep >= 2 && signUp2Style.filledCircle]}>
        <Text style={[signUp2Style.step, currentStep >= 2 && signUp2Style.setStep]}>2</Text>
      </View>
      <View style={[signUp2Style.line, currentStep >= 3 && signUp2Style.filledLine]}></View>
      <View style={[signUp2Style.circles, currentStep >= 3 && signUp2Style.filledCircle]}>
        <Text style={[signUp2Style.step, currentStep >= 3 && signUp2Style.setStep]}>3</Text>
      </View>
    </View>
  )
}

export default Progress
