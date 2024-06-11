import { StyleSheet } from "react-native";

export const welcomeStyle = StyleSheet.create({
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
    signInGradient: {
      borderRadius: 10,
      paddingHorizontal: 136,
      paddingVertical: 15,
      alignItems: 'center',
    },
    signInText: {
      color: 'black',
      fontSize: 15,
    },
    anima:{
      textDecorationLine : 'underline' ,
      color: 'black'
    }
})

export const signUpStyle = StyleSheet.create({
  progress:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
    marginTop: 20, 
    marginBottom: 20
  },
  scroll: {
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
  circles: {
    margin: 4,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    color: 'black'
  },
  setStep:{
    color: 'white',
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
  filledCircle: {
    borderColor: '#366DE3',
    backgroundColor: '#366DE3',
  },
  line: {
    height: 1,
    width: 60,
    backgroundColor: 'black',
  },
  filledLine: {
    backgroundColor: 'blue', 
  },

})

export const signUp2Style = StyleSheet.create({
  progress:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
    marginTop: 20, 
    marginBottom: 20
  },
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
    marginBottom: 40,
    fontFamily: 'serif',
    fontSize: 30,
    color: 'black',
  },
  document: {
    paddingLeft: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    borderColor: '#E5E8FC',
    borderWidth: 1.5,
    alignItems: 'center',
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
  documentField: {
    color: 'black',
    flex: 1,
    fontSize: 16,
    marginLeft: 5,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    // paddingTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    color: 'black',
    fontFamily: 'serif',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20,
  },
  modalOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  getStartedModal: {
    width: '40%',
    alignSelf: 'flex-start',
    marginTop: 15,
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 15,
  },
  gradientButtonModal: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 18,
    alignItems: 'center',
  },
  buttonTextModal: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  upload: {
    fontFamily: 'serif',
    marginTop: 0,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
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
  circles: {
    margin: 4,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    color: 'black'
  },
  setStep: {
    color: 'white',
  },
  filledCircle: {
    borderColor: '#366DE3',
    backgroundColor: '#366DE3',
  },
  line: {
    height: 1,
    width: 60,
    backgroundColor: 'black',
  },
  filledLine: {
    backgroundColor: 'blue',
  },

 })

 export const signUp3Style = StyleSheet.create({
  progress:{
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
    marginTop: 20, 
    marginBottom: 20
  },
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
  circles: {
    margin: 4,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    color: 'black'
  },
  setStep:{
    color: 'white',
  },
  filledCircle: {
    borderColor: '#366DE3',
    backgroundColor: '#366DE3', 
  },
  line: {
    height: 1,
    width: 60,
    backgroundColor: 'black',
  },
  filledLine: {
    backgroundColor: 'blue', 
  },
})

export const signInStyle = StyleSheet.create({
  scroll: {
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
    paddingHorizontal: 150,
    paddingVertical: 17,
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
    paddingHorizontal: 105,
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

export const homeStyle = StyleSheet.create({
  scroll: {
    alignItems: 'center',
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 40
  },
  conatiner: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    alignSelf: 'flex-start',
    fontSize: 18,
    marginLeft: 25,
    marginBottom: 10,
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
})

