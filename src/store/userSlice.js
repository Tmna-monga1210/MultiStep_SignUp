import { createSlice, nanoid  } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'USERS',
  initialState:{
    data: []
  },
  reducers: {
    setUserData: (state, action) => {
      state.data.push(action.payload);
      // console.log(state.data)
    }
  }
})

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

