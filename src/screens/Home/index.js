import React from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { signOut } from '../../store/userSlice'
import { useDispatch } from 'react-redux'
import { homeStyle } from '../../constants/style'

const Home = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loginUser = useSelector(state => state.user.loggedInUserData)

  console.log("loginuser", loginUser)

  const handleLogout = () => {
    dispatch(signOut());
  }

  return (
    <LinearGradient colors={['#F6F8FF', '#F4EEF5', '#EAEEFD', '#F6F8FF']} style={homeStyle.conatiner}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={homeStyle.scroll}>
        <Text style={homeStyle.title}>Welcome to Your Home Page</Text>
        {
          loginUser.map((user, index) => (
            <View key={index}>
              <Text style={homeStyle.detail}>Name: {user.firstName} {user.lastName}</Text>
              <Text style={homeStyle.detail}>Email: {user.email}</Text>
              <Text style={homeStyle.detail}>Gender: {user.gender}</Text>
              <Text style={homeStyle.detail}>Date of Birth: {user.dob}</Text>
              <Text style={homeStyle.detail}>Father's Name: {user.fatherName}</Text>
              <Text style={homeStyle.detail}>Mother's Name: {user.motherName}</Text>
              <Text style={homeStyle.detail}>Bank Name: {user.bankName}</Text>
              <Text style={homeStyle.detail}>Customer Name: {user.customerName}</Text>
              <Text style={homeStyle.detail}>Account number: {user.accountNumber}</Text>
              <Text style={homeStyle.detail}>IFSC Code: {user.isfcCode}</Text>
            </View>
          ))
        }

        <TouchableOpacity style={homeStyle.getStarted} onPress={() => handleLogout()}>
          <LinearGradient
            style={homeStyle.gradientButton}
            colors={['#366DE3', '#6B8AEE']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={homeStyle.buttonText}>Logout</Text>
          </LinearGradient>
        </TouchableOpacity>

      </ScrollView >
    </LinearGradient>
  )
}

export default Home
