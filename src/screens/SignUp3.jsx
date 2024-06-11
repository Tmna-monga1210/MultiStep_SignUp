import React, { useState } from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Name from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { setUserData } from '../store/userSlice'
import { useDispatch } from 'react-redux'
import { signUp3Style } from '../constants/style'
import Progress from '../components/Progress'
import { signIn } from '../store/userSlice'

const validationSchema = Yup.object().shape({
  bankName: Yup.string()
    .required('Bank Name is required'),
  customerName: Yup.string()
    .required('Customer Name is required'),
  accountNumber: Yup.string()
    .required('Account Number is required')
    .matches(/^[0-9]+$/, 'Account Number must be digits only')
    .min(10, 'Account Number must be at least 10 digits long'),
  reEnterAccountNumber: Yup.string()
    .oneOf([Yup.ref('accountNumber'), null], 'Account Numbers must match')
    .required('Please re-enter your Account Number'),
  isfcCode: Yup.string()
    .required('IFSC Code is required')
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, 'Invalid IFSC Code'),
});

const SignUp3 = () => {

  const [currentStep, setCurrentStep] = useState(3);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const user = route.params

  return (
    <Formik
      initialValues={{
        bankName: '',
        customerName: '',
        accountNumber: '',
        reEnterAccountNumber: '',
        isfcCode: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const userData = {
          ...user,
          ...values
        }
        resetForm();
        console.log(userData)
        dispatch(signIn([userData]))
        dispatch(setUserData(userData))
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={signUp3Style.conatiner}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={signUp3Style.scroll}>
            
            <Progress currentStep={currentStep} />

            <Text style={signUp3Style.texts}>Banking Information</Text>

            <View style={signUp3Style.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Bank Name'
                style={signUp3Style.emailTextInput}
                onChangeText={handleChange('bankName')}
                onBlur={handleBlur('bankName')}
                value={values.bankName}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.bankName && errors.bankName && (
                <Text style={signUp3Style.error}>{errors.bankName}</Text>
              )}
            </View>

            <View style={signUp3Style.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Customer Name'
                style={signUp3Style.emailTextInput}
                onChangeText={handleChange('customerName')}
                onBlur={handleBlur('customerName')}
                value={values.customerName}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.customerName && errors.customerName && (
                <Text style={signUp3Style.error}>{errors.customerName}</Text>
              )}
            </View>

            <View style={signUp3Style.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Account Number'
                style={signUp3Style.emailTextInput}
                onChangeText={handleChange('accountNumber')}
                onBlur={handleBlur('accountNumber')}
                value={values.accountNumber}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.accountNumber && errors.accountNumber && (
                <Text style={signUp3Style.error}>{errors.accountNumber}</Text>
              )}
            </View>

            <View style={signUp3Style.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Re-enter Account Number'
                style={signUp3Style.emailTextInput}
                onChangeText={handleChange('reEnterAccountNumber')}
                onBlur={handleBlur('reEnterAccountNumber')}
                value={values.reEnterAccountNumber}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.reEnterAccountNumber && errors.reEnterAccountNumber && (
                <Text style={signUp3Style.error}>{errors.reEnterAccountNumber}</Text>
              )}
            </View>

            <View style={signUp3Style.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='IFSC Code'
                style={signUp3Style.emailTextInput}
                onChangeText={handleChange('isfcCode')}
                onBlur={handleBlur('isfcCode')}
                value={values.isfcCode}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.isfcCode && errors.isfcCode && (
                <Text style={signUp3Style.error}>{errors.isfcCode}</Text>
              )}
            </View>
            <View style={{ flexDirection: 'row' }}>

              <TouchableOpacity style={signUp3Style.getStarted} onPress={() => navigation.navigate('signUp2')}>
                <LinearGradient
                  style={signUp3Style.gradientButton}
                  colors={['#366DE3', '#6B8AEE']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}>
                  <Text style={signUp3Style.buttonText}>Prev</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={signUp3Style.getStarted} onPress={handleSubmit}>
                <LinearGradient
                  style={signUp3Style.gradientButton}
                  colors={['#366DE3', '#6B8AEE']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}>
                  <Text style={signUp3Style.buttonText}>Submit</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View >
          </ScrollView>
        </LinearGradient>
      )}
    </Formik>
  )
}


export default SignUp3
