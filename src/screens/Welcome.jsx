import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet , Linking } from 'react-native';
import { Image1 } from '../assets';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
  const navigation = useNavigation();

  const getStarted = () =>{
    navigation.navigate('signUp')
  }

  const signIn = () =>{
    navigation.navigate('signIn')
  }

  return (

    <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD' , '#F6F8FF']} style={styles.conatiner} start={{x:1, y:0}}>
      <Image source={Image1} style={styles.image} />
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.textTwo}>We're glad you're here! Enjoy this free prototype made with Anima</Text>

      <TouchableOpacity style={styles.getStarted} onPress={() => getStarted()}>
        <LinearGradient style={styles.gradientButton} colors={['#366DE3', '#6B8AEE']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
          <Text style={styles.buttonText}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.signIn} onPress={() => signIn()}>
        <LinearGradient colors={['#E2EAFC', '#E2E8FC']} style={styles.signInGradient}>
          <Text style={styles.signInText}>Sign in</Text>
        </LinearGradient>
      </TouchableOpacity>

    </LinearGradient>

  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 5,
    marginBottom: 40,
  },
  text: {
    fontFamily: 'serif',
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  textTwo: {
    textAlign: 'center',
    lineHeight: 25,
    color: 'black',
    fontSize: 15,
    paddingHorizontal: 35,
    paddingVertical: 15,
    letterSpacing: 0.5,
  },
  getStarted: {
    marginTop: 22,
    borderRadius: 10,
  },
  gradientButton: {
    borderRadius: 10,
    paddingHorizontal: 120,
    paddingVertical: 18,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  signIn: {
    marginTop: 20,
    borderRadius: 10,
  },
  signInGradient:{
    borderRadius: 10,
    paddingHorizontal: 136,
    paddingVertical: 15,
    alignItems: 'center',
  },
  signIn: {
    marginTop: 20,
    borderRadius: 10,
  },
  signInText: {
    color: 'black',
    fontSize: 15,
  },

})

export default Welcome;
