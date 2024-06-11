import React, { useState } from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity, Modal, Alert, PermissionsAndroid } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Name from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as Yup from 'yup';
import * as ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import { useRoute } from '@react-navigation/native'
import Upload from 'react-native-vector-icons/FontAwesome';
import { signUp2Style } from '../constants/style'
import Progress from '../components/Progress'

const validationSchema = Yup.object().shape({
  fatherName: Yup.string()
    .matches(/^[a-zA-Z]/, 'Name can only contain small and capital letters')
    .min(3, 'Name must be at least 3 letters long')
    .required(`Father's Name is required`)
    .label('fatherName'),
  motherName: Yup.string()
    .matches(/^[a-zA-Z]/, 'Name can only contain small and capital letters')
    .min(3, 'Name must be at least 3 letters long')
    .required(`Mother's Name is required`)
    .label('motherName'),
  uploadId: Yup.string().required('ID is required'),
});

const SignUp2 = () => {

  const [currentStep, setCurrentStep] = useState(2);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedIDType, setSelectedIDType] = useState('');
  const IDOptions = ['Driving License', 'Aadhaar Card', 'Passport'];

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "This app needs access to your camera " +
            "so you can take photos.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const handleTakePhoto = async (setFieldValue, setFieldTouched, setFieldError) => {
    if (!selectedIDType) {
      Alert.alert('Error', 'Please select an ID option first.');
      return;
    }
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      Alert.alert('Error', 'Camera permission is required to take a photo.');
      return;
    }
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    ImagePicker.launchCamera(options, (response) => {
      console.log('ImagePicker response: ', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorCode) {
        console.log('Camera Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const imageUri = response.assets[0].fileName;
        console.log("imaga ayi")
        setModalVisible(false);
        setSelectedImage(imageUri);
        console.log("path = ", imageUri);
        setFieldValue('uploadId', imageUri);
        setFieldTouched('uploadId', true);
        setFieldError('uploadId', '');
      } else {
        console.log('Unexpected response from ImagePicker: ', response);
      }
    });
  };

  const handlePickFile = async (setFieldValue, setFieldTouched, setFieldError) => {
    if (!selectedIDType) {
      Alert.alert('Error', 'Please select an ID option first.');
      return;
    }
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      setModalVisible(false);
      setSelectedFile(res);
      setFieldValue('uploadId', res[0].name);
      setFieldTouched('uploadId', true);
      setFieldError('uploadId', '');
      console.log(res)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.log('DocumentPicker Error: ', err);
      }
    }
  }

  const navigation = useNavigation();
  const route = useRoute();
  const { personalInfo } = route.params || { personalInfo: {} };

  const renderIDUploadModal = (setFieldValue, setFieldTouched, setFieldError) => (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={signUp2Style.modalContainer}>
        <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={signUp2Style.modalContent}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={{ position: 'absolute', right: 20, top: 5 }}>
            <Text style={{ fontSize: 25, color: 'black' }}>x</Text>
          </TouchableOpacity>
          <Text style={signUp2Style.modalTitle}>Select ID to Upload</Text>
          {IDOptions.map((option, index) => (
            <View style={signUp2Style.modalOption} key={index}>
              <Text style={{ color: 'black', fontSize: 15 }}>{option}</Text>
              <TouchableOpacity onPress={() => setSelectedIDType(option)}>
                <View style={signUp2Style.radio}>
                  {
                    selectedIDType === option ? <View style={signUp2Style.radioInner}></View> : null
                  }
                </View>
              </TouchableOpacity>
            </View>
          ))}

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={signUp2Style.getStartedModal}
              onPress={() => handleTakePhoto(setFieldValue, setFieldTouched, setFieldError)}>
              <LinearGradient colors={['#366DE3', '#6B8AEE']} style={signUp2Style.gradientButtonModal}>
                <Text style={signUp2Style.buttonTextModal}>Take Photo</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={signUp2Style.getStartedModal}
              onPress={() => handlePickFile(setFieldValue, setFieldTouched, setFieldError)}
            >
              <LinearGradient colors={['#366DE3', '#6B8AEE']} style={signUp2Style.gradientButtonModal}>
                <Text style={signUp2Style.buttonTextModal}>Pick PDF</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </Modal >
  );

  return (
    <Formik
      initialValues={{
        fatherName: '',
        motherName: '',
        uploadId: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        const user = {
          ...personalInfo,
          ...values,
          selectedIDType,
          selectedImage,
          selectedFile,
        }
        navigation.navigate('signUp3', user)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, touched, errors, setFieldTouched, setFieldError }) => (
        <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={signUp2Style.conatiner}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={signUp2Style.scroll}>

            <Progress currentStep={currentStep} />

            <Text style={signUp2Style.texts}>Family Info</Text>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Upload name='cloud-upload' style={{ color: '#366DE3', marginRight: 10 }} size={75}
                onChangeText={handleChange('uploadId')}
                onBlur={handleBlur('uploadId')}
                value={values.uploadId}
              />
            </TouchableOpacity>
            <Text style={signUp2Style.upload}>Upload ID</Text>

            <View >
              {touched.uploadId && errors.uploadId &&
                <Text style={signUp2Style.error}>{errors.uploadId}</Text>
              }
            </View>

            {selectedImage && (
              <View style={signUp2Style.document}>
                <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
                <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
                <Text style={signUp2Style.documentField}>{selectedImage}</Text>
              </View>
            )}

            {selectedFile && (
              <View style={signUp2Style.document}>
                <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
                <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
                <Text style={signUp2Style.documentField}>{selectedFile[0].name}</Text>
              </View>
            )}

            <View style={signUp2Style.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Father’s Name'
                style={signUp2Style.emailTextInput}
                onChangeText={handleChange('fatherName')}
                onBlur={handleBlur('fatherName')}
                value={values.fatherName}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.fatherName && errors.fatherName && (
                <Text style={signUp2Style.error}>{errors.fatherName}</Text>
              )}
            </View>

            <View style={signUp2Style.emailInput}>
              <Name name='person' style={{ color: '#B5C2F5', marginRight: 10 }} size={20} />
              <Text style={{ fontSize: 25, color: '#E5E8FC', marginTop: -5 }}>|</Text>
              <TextInput
                placeholder='Mother’s Name'
                style={signUp2Style.emailTextInput}
                onChangeText={handleChange('motherName')}
                onBlur={handleBlur('motherName')}
                value={values.motherName}
              />
            </View>

            <View style={{ alignSelf: 'flex-start' }}>
              {touched.motherName && errors.motherName && (
                <Text style={signUp2Style.error}>{errors.motherName}</Text>
              )}
            </View>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={signUp2Style.getStarted} onPress={() => navigation.navigate('signUp')}>
                <LinearGradient
                  style={signUp2Style.gradientButton}
                  colors={['#366DE3', '#6B8AEE']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={signUp2Style.buttonText}>Prev</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={signUp2Style.getStarted} onPress={() => handleSubmit()}>
                <LinearGradient
                  style={signUp2Style.gradientButton}
                  colors={['#366DE3', '#6B8AEE']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={signUp2Style.buttonText}>Next</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

          </ScrollView>
          {renderIDUploadModal(setFieldValue, setFieldTouched, setFieldError)}
        </LinearGradient>
      )}
    </Formik>
  )
}


export default SignUp2
