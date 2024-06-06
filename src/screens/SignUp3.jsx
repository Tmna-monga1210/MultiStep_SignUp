import React from 'react'
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Name from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { setUserData } from '../store/userSlice'
import { useDispatch } from 'react-redux'

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
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  const user = route.params

  const handlePrev = () => {
    navigation.navigate('signIn')
  }

  return (
    <Formik
      initialValues={{
        bankName: 'lgkbmgfb',
        customerName: 'krgjfvf',
        accountNumber: '0987654321',
        reEnterAccountNumber: '0987654321',
        isfcCode: 'SBIN0AB0009',
      }}
      validationSchema={validationSchema}
      onSubmit={(values ,{resetForm}) => {
        const userData = {
          ...user,
          ...values
        }
        // console.log(userData)
        resetForm();
        dispatch(setUserData(userData))
        // navigation.navigate('home')
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={styles.conatiner}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
            <Text style={styles.texts}>Banking Information</Text>

            <View style={styles.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Bank Name'
                style={styles.emailTextInput}
                onChangeText={handleChange('bankName')}
                onBlur={handleBlur('bankName')}
                value={values.bankName}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.bankName && errors.bankName && (
                <Text style={styles.error}>{errors.bankName}</Text>
              )}
            </View>

            <View style={styles.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Customer Name'
                style={styles.emailTextInput}
                onChangeText={handleChange('customerName')}
                onBlur={handleBlur('customerName')}
                value={values.customerName}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.customerName && errors.customerName && (
                <Text style={styles.error}>{errors.customerName}</Text>
              )}
            </View>

            <View style={styles.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Account Number'
                style={styles.emailTextInput}
                onChangeText={handleChange('accountNumber')}
                onBlur={handleBlur('accountNumber')}
                value={values.accountNumber}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.accountNumber && errors.accountNumber && (
                <Text style={styles.error}>{errors.accountNumber}</Text>
              )}
            </View>

            <View style={styles.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Re-enter Account Number'
                style={styles.emailTextInput}
                onChangeText={handleChange('reEnterAccountNumber')}
                onBlur={handleBlur('reEnterAccountNumber')}
                value={values.reEnterAccountNumber}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.reEnterAccountNumber && errors.reEnterAccountNumber && (
                <Text style={styles.error}>{errors.reEnterAccountNumber}</Text>
              )}
            </View>

            <View style={styles.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='IFSC Code'
                style={styles.emailTextInput}
                onChangeText={handleChange('isfcCode')}
                onBlur={handleBlur('isfcCode')}
                value={values.isfcCode}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.isfcCode && errors.isfcCode && (
                <Text style={styles.error}>{errors.isfcCode}</Text>
              )}
            </View>

            <TouchableOpacity style={styles.getStarted} onPress={handleSubmit}>
              <LinearGradient style={styles.gradientButton} colors={['#366DE3', '#6B8AEE']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <Text style={styles.buttonText}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signIn} onPress={() => handlePrev()}>
              <LinearGradient colors={['#E2EAFC', '#E2E8FC']} style={styles.signInGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                <Text style={styles.signInText}>I already have an account</Text>
              </LinearGradient>
            </TouchableOpacity>

          </ScrollView>
        </LinearGradient>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  scroll: {
    alignItems: 'center',
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 40
  },
  conatiner: {
    flex: 1,
  },
  texts: {
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'serif',
    fontSize: 30,
    color: 'black',
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
  getStarted: {
    marginTop: 10,
  },
  gradientButton: {
    paddingVertical: 16,
    paddingHorizontal: 135,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signIn: {
    marginTop: 20,
    borderRadius: 10,
  },
  signInGradient: {
    borderRadius: 10,
    paddingHorizontal: 80,
    paddingVertical: 15,
    alignItems: 'center',
  },
  signInText: {
    color: 'black',
    fontSize: 15,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    paddingHorizontal: 27,
  },
})

export default SignUp3
