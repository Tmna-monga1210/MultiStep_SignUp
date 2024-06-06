import React, { useState } from 'react'
import { StyleSheet, ScrollView, Image, Text, View, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Image2 } from '../assets'
import Email from 'react-native-vector-icons/MaterialIcons'
import DatePicker from 'react-native-date-picker'
import Name from 'react-native-vector-icons/Octicons'
import Password from 'react-native-vector-icons/SimpleLineIcons'
import ConFirmPassword from 'react-native-vector-icons/MaterialIcons'
import Calender from 'react-native-vector-icons/AntDesign'
import Calenders from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const domainRegex = /\.(com|in)$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Name can only contain small and capital letters without any spaces')
    .required('Name is required')
    .label('Name'),
  email: Yup.string()
    .matches(emailRegex, 'Please enter a valid email')
    .matches(domainRegex, 'Email must end with .com or .in')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(/[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/, 'Password must have a special character')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
  gender: Yup.string().required('An option is required'),
  dob: Yup.string().required('Date of Birth is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is Required')
    .label('Confirm Password')
});

const gender = [
  {
    id: 1,
    value: 'Male'
  },
  {
    id: 2,
    value: 'Female'
  },
  {
    id: 3,
    value: 'Other'
  },
]


const SignUp = () => {

  const navigation = useNavigation();

  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(new Date())

  const [selectedRadio, setSelectedRadio] = useState()

  const handleConfirm = (selectedDate, setFieldValue) => {
    setOpen(false);
    setDate(selectedDate);
    const formattedDate = selectedDate.toLocaleDateString();
    setFieldValue('dob', formattedDate);
  };

  return (
    <Formik
      initialValues={{
        firstName: 'abcde',
        lastName: 'abcde',
        gender: '',
        dob: '',
        email: 'abc@gmail.com',
        password: 'Aaaaaaa1@',
        confirmPassword: 'Aaaaaaa1@',

      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        // console.log(values)
        navigation.navigate('signUp2' , {personalInfo : values})
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, touched, errors }) => (
        <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={styles.conatiner}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>

            <Image source={Image2} style={styles.image} />
            <Text style={styles.text}>Create Account</Text>
            <Text style={styles.textTwo}>Go ahead and sign up, let everyone know how awesome you are!</Text>
            <Text style={styles.texts}>Personal Info</Text>

            <View style={styles.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='First Name'
                style={styles.emailTextInput}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.firstName && errors.firstName && (
                <Text style={styles.error}>{errors.firstName}</Text>
              )}
            </View>

            <View style={styles.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Last Name'
                style={styles.emailTextInput}
                onChangeText={handleChange('lastName')}
                // onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
            </View>

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

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.email && errors.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}
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
              />
            </View>
            <View style={{ alignSelf: 'flex-start' }}>
              {touched.password && errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
            </View>

            <View style={styles.emailInput}>
              <ConFirmPassword name='password' style={{ color: '#B5C2F5', marginRight: 10, fontWeight: 'bold' }} size={18} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Confirm Password'
                style={styles.emailTextInput}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />
            </View>
            <View style={{ alignSelf: 'flex-start' }}>
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}
            </View>

            <View style={{ marginLeft: -100 }}>
              <Text style={{ fontSize: 15, marginTop: 5, fontFamily: 'serif', color: 'black' }}>Gender</Text>
              <View style={{ flexDirection: 'row' }}>
                {gender.map((item, index) => (
                  <View style={{ flexDirection: 'row' }} key={index}>
                    <TouchableOpacity onPress={() => {
                      setSelectedRadio(item.id);
                      setFieldValue('gender', item.value); // Update Formik value
                    }}>
                      <View style={{ flexDirection: 'row', margin: 10, marginRight: 4 }}>
                        <View style={styles.radio}>
                          {
                            selectedRadio === item.id ? <View style={styles.radioInner}></View> : null
                          }
                        </View>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.radioText} >{item.value}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.gender && errors.gender && (
                <Text style={styles.error}>{errors.gender}</Text>
              )}
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.emailInputs}>
                <Calenders name='calendar' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
                <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
                <TextInput
                  placeholder='Date of Birth'
                  style={styles.emailTextInputs}
                  value={values.dob}
                  editable={false}

                />
              </View>
              <TouchableOpacity onPress={() => setOpen(true)}>
                <Calender name="calendar" size={20} style={{ color: "#91A1E1", marginLeft: -60 }} />
              </TouchableOpacity>
              <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                onConfirm={(selectedDate) => handleConfirm(selectedDate, setFieldValue)}
                onCancel={() => setOpen(false)}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.dob && errors.dob && (
                <Text style={styles.error}>{errors.dob}</Text>
              )}
            </View>

            <TouchableOpacity style={styles.getStarted} onPress={() => handleSubmit()}>
              <LinearGradient style={styles.gradientButton} colors={['#366DE3', '#6B8AEE']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <Text style={styles.buttonText}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>

          </ScrollView >
        </LinearGradient>
      )}
    </Formik>

  )
}
const styles = StyleSheet.create({
  scroll:{
    alignItems: 'center',
    justifyContent: "center", 
    paddingTop: 40, 
    paddingBottom: 40
  },
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
  texts: {
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'serif',
    fontSize: 30,
    color: 'black',
  },
  textTwo: {
    textAlign: 'center',
    lineHeight: 25,
    color: 'black',
    fontSize: 15,
    paddingHorizontal: 35,
    paddingVertical: 15,
    letterSpacing: 0.3,
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
  emailInputs: {
    paddingLeft: 15,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    paddingVertical: 4,
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
  radioText: {
    fontSize: 15,
    marginTop: 10,
  },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderRadius: 50,
    // borderColor: '#B5C2F5',
    // backgroundColor: '#B5C2F5'
    borderColor: '#366DE3',
    backgroundColor: '#366DE3'
  },
  emailTextInputs: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 8,
  },
  getStarted: {
    width: '40%',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 20,
  },
  gradientButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    paddingHorizontal: 27,
  },
})

export default SignUp
