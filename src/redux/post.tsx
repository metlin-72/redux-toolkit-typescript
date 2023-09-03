import {createSlice} from "@reduxjs/toolkit";
import {getPostList} from "./../component/asyncThunk/PostListAction";

export type postType = {
  id: number;
  title: string;
  body: string;
};

export interface postState {
  value: postType[];
  count: number;
}

const initialState: postState = {
  value: [],
  count: 0,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostList.pending, (state, action) => {
        console.log('pending state.value',state.value)
        console.log('pending state.status',state.count)
        console.log('pending action.payload',action.payload)
      })
      .addCase(getPostList.fulfilled, (state, action) => {
        state.value = [...state.value, ...action.payload];
        console.log('fulfilled state.value',state.value)
        console.log('fulfilled state.status',state.count)
        console.log('fulfilled action.payload',action.payload)
      })
      .addCase(getPostList.rejected, (state, action) => {
        console.log('state.value',state.value)
        console.log('state.status',state.count)
        console.log('action.payload',action.payload)
      });
  },
});

export default postSlice.reducer;
