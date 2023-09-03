import { createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

export const getPostList = createAsyncThunk("post/getPostList", async () => {
  const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //console.log("resp.data", resp.data);
  return resp.data;
});