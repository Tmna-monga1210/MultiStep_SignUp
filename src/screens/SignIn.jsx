import React from 'react'
import { Text, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Image3 } from '../assets'
import Email from 'react-native-vector-icons/MaterialIcons'


const SignIn = () => {
  return (
    <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={styles.conatiner}>
      <Image source={Image3} style={styles.image} />
      <Text style={styles.text}>Welcome Back</Text>
      <Text style={styles.textTwo}>Go ahead and sign in. Get access to your incredible account!</Text>

      <View style={styles.email}>
        <Email name='mail-outline' />
        <TextInput
          placeholder='Email'
        />
      </View>

      <TextInput
        placeholder='Password'
        style={styles.password}
      />

      <TouchableOpacity style={styles.getStarted} onPress={() => getStarted()}>
        <LinearGradient style={styles.gradientButton} colors={['#366DE3', '#6B8AEE']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <Text style={styles.buttonText}>Sign In</Text>
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
    marginBottom: 30,
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
    letterSpacing: 0.2,
  },
  getStarted: {
    marginTop: 22,
    borderRadius: 10,
  },
  gradientButton: {
    borderRadius: 10,
    paddingHorizontal: 136,
    paddingVertical: 18,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  email: {
    paddingHorizontal: 132,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 15,
    borderColor: '#E5E8FC',
    borderWidth: 1.5,
    flexDirection: 'row',
  },
  password: {
    paddingHorizontal: 130,
    paddingVertical: 13,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 5,

  }
})

export default SignIn
