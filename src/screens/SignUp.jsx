import React, { useState } from 'react'
import { ScrollView, Image, Text, View, TextInput, TouchableOpacity } from 'react-native'
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
import { useSelector } from 'react-redux'
import { signUpStyle } from '../constants/style'
import Progress from '../components/Progress'
import Inputs from '../components/Inputs'


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const domainRegex = /\.(com|in)$/;

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


const SignUp = ({ route }) => {

  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(new Date())
  const [selectedRadio, setSelectedRadio] = useState()

  const newUserEmail = route?.params?.newUserEmail
  console.log(newUserEmail)
  const initialEmail = newUserEmail?.email ? newUserEmail?.email : ''
  console.log(initialEmail)

  const user = useSelector(state => state.user.data)

  const handleConfirm = (selectedDate, setFieldValue) => {
    setOpen(false);
    setDate(selectedDate);
    const formattedDate = selectedDate.toLocaleDateString();
    setFieldValue('dob', formattedDate);
  };

  const emailExists = (email) => {
    return user.find(users => users.email === email)
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[a-zA-Z]+$/, 'Name can only contain small and capital letters without any spaces')
      .min(3, 'Name must be at least 3 letters long')
      .required('Name is required')
      .label('Name'),
    email: Yup.string()
      .matches(emailRegex, 'Please enter a valid email')
      .matches(domainRegex, 'Email must end with .com or .in')
      .test('email-exists', 'User is already existing', (value) => !emailExists(value))
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

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        email: initialEmail,
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        navigation.navigate('signUp2', { personalInfo: values })
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, touched, errors }) => (
        <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={signUpStyle.conatiner}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={signUpStyle.scroll}>

            <Image source={Image2} style={signUpStyle.image} />
            <Text style={signUpStyle.text}>Create Account</Text>
            <Text style={signUpStyle.textTwo}>Go ahead and sign up, let everyone know how awesome you are!</Text>

            <Progress currentStep={currentStep} />

            <Text style={signUpStyle.texts}>Personal Info</Text>

            <View style={signUpStyle.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='First Name'
                style={signUpStyle.emailTextInput}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />
            </View>



            <View style={{ alignSelf: 'flex-start' }}>
              {touched.firstName && errors.firstName && (
                <Text style={signUpStyle.error}>{errors.firstName}</Text>
              )}
            </View>

            <View style={signUpStyle.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Last Name(optional)'
                style={signUpStyle.emailTextInput}
                onChangeText={handleChange('lastName')}
                // onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
            </View>

            <View style={signUpStyle.emailInput}>
              <Email name='mail-outline' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Email'
                style={signUpStyle.emailTextInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.email && errors.email && (
                <Text style={signUpStyle.error}>{errors.email}</Text>
              )}
            </View>

            <View style={signUpStyle.emailInput}>
              <Password name='lock' style={{ color: '#B5C2F5', marginRight: 10, fontWeight: 'bold' }} size={18} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Password'
                style={signUpStyle.emailTextInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}

              />
            </View>
            <View style={{ alignSelf: 'flex-start' }}>
              {touched.password && errors.password && (
                <Text style={signUpStyle.error}>{errors.password}</Text>
              )}
            </View>

            <View style={signUpStyle.emailInput}>
              <ConFirmPassword name='password' style={{ color: '#B5C2F5', marginRight: 10, fontWeight: 'bold' }} size={18} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Confirm Password'
                style={signUpStyle.emailTextInput}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={true}

              />
            </View>
            <View style={{ alignSelf: 'flex-start' }}>
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={signUpStyle.error}>{errors.confirmPassword}</Text>
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
                        <View style={signUpStyle.radio}>
                          {
                            selectedRadio === item.id ? <View style={signUpStyle.radioInner}></View> : null
                          }
                        </View>
                      </View>
                    </TouchableOpacity>
                    <Text style={signUpStyle.radioText} >{item.value}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.gender && errors.gender && (
                <Text style={signUpStyle.error}>{errors.gender}</Text>
              )}
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={signUpStyle.emailInputs}>
                <Calenders name='calendar' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
                <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
                <TextInput
                  placeholder='Date of Birth'
                  style={signUpStyle.emailTextInputs}
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
                maximumDate={new Date()}
                mode="date"
                onConfirm={(selectedDate) => handleConfirm(selectedDate, setFieldValue)}
                onCancel={() => setOpen(false)}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.dob && errors.dob && (
                <Text style={signUpStyle.error}>{errors.dob}</Text>
              )}
            </View>

            <TouchableOpacity style={signUpStyle.getStarted} onPress={() => handleSubmit()}>
              <LinearGradient
                style={signUpStyle.gradientButton}
                colors={['#366DE3', '#6B8AEE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={signUpStyle.buttonText}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView >
        </LinearGradient>
      )}
    </Formik>

  )
}

export default SignUp
