import {createSlice} from "@reduxjs/toolkit";

interface userType {
  name: string;
  age: number;
  email: string;
  mobile: string;
}

const initialStateValue: userType = {
  name: "",
  age: 0,
  email: "",
  mobile: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {value: initialStateValue},
  reducers: {
    login: (state, action)=> {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    } 
  }
});

export const {login, logout} = userSlice.actions
export default userSlice.reducer