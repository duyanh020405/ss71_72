import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPost: any = createAsyncThunk(
  "posts/getAllPost",
  async () => {
    const response = await axios.get("http://localhost:8080/posts");
    return response.data;
  }
);
export const addNewPost: any = createAsyncThunk(
  "posts/addNewPost",
  async (user) => {
    await axios.post("http://localhost:8080/posts", user);
    const responseGet = await axios.get("http://localhost:8080/posts");
    return responseGet.data;
  }
)
export const changePost: any = createAsyncThunk(
  "posts/changePost",
  async (post:any) => {
    const response = await axios.patch(`http://localhost:8080/users/${post.id}`, post);
    return response.data;
  }
)

const postReducer = createSlice({
  name: "duyAnh",
  initialState: {
    posts: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(changePost.fulfilled,(state:any,action)=>{
        const index = state.posts.findIndex((post:any)=>{
          return post.id===action.payload.id
      })
      console.log(index)
      if(index !== -1){
          state.posts[index].check ="khong hoat dong"
      }

  })
  },
});
export default postReducer.reducer;
