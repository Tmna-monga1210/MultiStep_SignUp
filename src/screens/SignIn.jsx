import React from 'react'
import { Text, Image, TextInput, TouchableOpacity, View, ScrollView, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Image3 } from '../assets'
import Email from 'react-native-vector-icons/MaterialIcons'
import Password from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { signIn } from '../store/userSlice'
import { useDispatch } from 'react-redux'
import { signInStyle } from '../constants/style'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const SignIn = () => {

  const user = useSelector(state => state.user.data)
  console.log("SignIn", user)

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSignIn = (values, setFieldError) => {

    const userExists = user.filter(users => users.email === values.email)

    if (userExists.length > 0) {
      const existingPassword =  userExists[0].password
      if (existingPassword === values.password) {
        dispatch(signIn(userExists));
      } else {
        setFieldError('password', 'Wrong password');
      }
    } else {
      console.log("no")
      Alert.alert(
        'User does not exist',
        'Please create an account to move further',
        [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
          { text: 'OK', onPress: () => navigation.navigate('signUp' , { newUserEmail : values} ) },
        ],
        { cancelable: false }
      );
    }
  }

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setFieldError }) => {
        console.log(values)
        handleSignIn(values, setFieldError)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={signInStyle.conatiner}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={signInStyle.scroll}>
            <Image source={Image3} style={signInStyle.image} />
            <Text style={signInStyle.text}>Welcome Back</Text>
            <Text style={signInStyle.textTwo}>Go ahead and sign in. Get access to your incredible account!</Text>

            <View style={signInStyle.emailInput}>
              <Email name='mail-outline' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Email'
                style={signInStyle.emailTextInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.email && errors.email && (
                <Text style={signInStyle.error}>{errors.email}</Text>
              )}
            </View>

            <View style={signInStyle.emailInput}>
              <Password name='lock' style={{ color: '#B5C2F5', marginRight: 10, fontWeight: 'bold' }} size={18} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Password'
                style={signInStyle.emailTextInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.password && errors.password && (
                <Text style={signInStyle.error}>{errors.password}</Text>
              )}
            </View>

            <TouchableOpacity style={signInStyle.getStarted} onPress={() => handleSubmit()}>
              <LinearGradient 
                style={signInStyle.gradientButton} 
                colors={['#366DE3', '#6B8AEE']} 
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 1 }}
              >
                <Text style={signInStyle.buttonText}>Sign In</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={signInStyle.signIn} onPress={() => navigation.navigate('signUp')} >
              <LinearGradient colors={['#E2EAFC', '#E2E8FC']} style={signInStyle.signInGradient}>
                <Text style={signInStyle.signInText}>Create New Account</Text>
              </LinearGradient>
            </TouchableOpacity>

          </ScrollView >
        </LinearGradient>
      )}
    </Formik>

  )
}

export default SignIn
