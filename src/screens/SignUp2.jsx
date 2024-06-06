import React from 'react'
import { Text, View, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { user } from '../assets'
import Name from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup';
import { useRoute } from '@react-navigation/native'

const validationSchema = Yup.object().shape({
  fatherName: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Name can only contain small and capital letters without any spaces')
    .required('Name is required')
    .label('fatherName'),
  motherName: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Name can only contain small and capital letters without any spaces')
    .required('Name is required')
    .label('motherName'),
});

const SignUp2 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { personalInfo } = route.params

  const handlePrev = () => {
    navigation.navigate('signUp')
  }

  return (
    <Formik
      initialValues={{
        fatherName: 'Afgibnpjgr',
        motherName: 'Nlekvfllbv',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        const user = {
          ...personalInfo,
          ...values
        }
        // console.log("step 2",user)
        navigation.navigate('signUp3', user)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, touched, errors }) => (
        <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={styles.conatiner}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
            <Text style={styles.texts}>Family Info</Text>
            <Image source={user} style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }} />

            <View style={styles.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Father’s Name'
                style={styles.emailTextInput}
                onChangeText={handleChange('fatherName')}
                onBlur={handleBlur('fatherName')}
                value={values.fatherName}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.fatherName && errors.fatherName && (
                <Text style={styles.error}>{errors.fatherName}</Text>
              )}
            </View>

            <View style={styles.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Mother’s Name'
                style={styles.emailTextInput}
                onChangeText={handleChange('motherName')}
                onBlur={handleBlur('motherName')}
                value={values.motherName}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.motherName && errors.motherName && (
                <Text style={styles.error}>{errors.motherName}</Text>
              )}
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={styles.getStarted} onPress={() => handlePrev()}>
                <LinearGradient style={styles.gradientButton} colors={['#366DE3', '#6B8AEE']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                  <Text style={styles.buttonText}>Prev</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.getStarted} onPress={() => handleSubmit()}>
                <LinearGradient style={styles.gradientButton} colors={['#366DE3', '#6B8AEE']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
                  <Text style={styles.buttonText}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </ScrollView>
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
    width: '40%',
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
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

export default SignUp2
