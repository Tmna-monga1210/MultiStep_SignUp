import React, { useState } from 'react'
import { Text, Image, StyleSheet, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Image3 } from '../assets'
import Email from 'react-native-vector-icons/MaterialIcons'
import Password from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignIn = () => {
  const user = useSelector(state => state.data)
  console.log("SignIn", user)

  const navigation = useNavigation();

  const handleSignIn = (values) => {
    const userExists = user.find(users => users.email === values.email && users.password === values.password)

    if (userExists) {
      console.log("user mil gya");
      // dispatch(loginUser(values.email, values.password))
      // Navigate to the next screen or display a success message
      navigation.navigate('home')
    } else {
      alert('Invalid email or password');
    }
  }

  const handleSignUp = () => {
    navigation.navigate('signUp')
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values)
        handleSignIn(values)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={styles.conatiner}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', justifyContent: "center", paddingTop: 40, paddingBottom: 40 }}>
            <Image source={Image3} style={styles.image} />
            <Text style={styles.text}>Welcome Back</Text>
            <Text style={styles.textTwo}>Go ahead and sign in. Get access to your incredible account!</Text>

            <View style={styles.emailInput}>
              <Email name='mail-outline' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Email'
                style={styles.emailTextInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View style={styles.emailInput}>
              <Password name='lock' style={{ color: '#B5C2F5', marginRight: 10, fontWeight: 'bold' }} size={18} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Password'
                style={styles.emailTextInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                // secureTextEntry={true}
              />
            </View>

            <TouchableOpacity style={styles.getStarted} onPress={() => handleSubmit()}>
              <LinearGradient style={styles.gradientButton} colors={['#366DE3', '#6B8AEE']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <Text style={styles.buttonText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signIn} onPress={() => handleSignUp()} >
              <LinearGradient colors={['#E2EAFC', '#E2E8FC']} style={styles.signInGradient}>
                <Text style={styles.signInText}>Create New Account</Text>
              </LinearGradient>
            </TouchableOpacity>

          </ScrollView >
        </LinearGradient>
      )}
    </Formik>

  )
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
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
    marginTop: 12,
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
  emailInput: {
    paddingLeft: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    paddingVertical: 3,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderColor: '#E5E8FC',
    borderWidth: 1.5,
    alignItems: 'center',
  },
  emailTextInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
  },
  signIn: {
    marginTop: 15,
    borderRadius: 10,
  },
  signInGradient: {
    borderRadius: 10,
    paddingHorizontal: 93,
    paddingVertical: 15,
    alignItems: 'center',
  },
  signInText: {
    color: 'black',
    fontSize: 15,
  },
})

export default SignIn
