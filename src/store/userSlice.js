import { createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'USERS',
  initialState:{
    data: [],
    isSignedIn : true,
    loggedInUserData : [],
  },
  reducers: {
    setUserData: (state, action) => {
      state.data.push(action.payload);
      state.isSignedIn = false
    },
    signOut: (state) => {
      state.isSignedIn = true;
      
    },
    signIn: (state, action) => {
      state.loggedInUserData = action.payload;
      state.isSignedIn = false;
    },
  }
})

export const { setUserData, signOut, signIn } = userSlice.actions;
export default userSlice.reducer;

