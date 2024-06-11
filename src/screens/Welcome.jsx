import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native';
import { Image1 } from '../assets';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { welcomeStyle } from '../constants/style';

const Welcome = () => {

  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={welcomeStyle.conatiner} start={{ x: 1, y: 0 }}>
      <Image source={Image1} style={welcomeStyle.image} />
      <Text style={welcomeStyle.text}>Welcome</Text>
      <Text style={welcomeStyle.textTwo}>We're glad you're here! Enjoy this free prototype made with Anima.
      </Text> 

      <TouchableOpacity style={welcomeStyle.getStarted} onPress={() => navigation.navigate('signUp')}>
        <LinearGradient style={welcomeStyle.gradientButton} colors={['#366DE3', '#6B8AEE']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <Text style={welcomeStyle.buttonText}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={welcomeStyle.signIn} onPress={() => navigation.navigate('signIn')}>
        <LinearGradient colors={['#E2EAFC', '#E2E8FC']} style={welcomeStyle.signInGradient}>
          <Text style={welcomeStyle.signInText}>Sign in</Text>
        </LinearGradient>
      </TouchableOpacity>
      
    </LinearGradient>

  )
}

export default Welcome;
