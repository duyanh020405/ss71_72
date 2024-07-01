import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPost:any = createAsyncThunk(
  "posts/getAllPost",
  async () => {
    const response = await axios.get("http://localhost:8080/posts");
    return response.data;
  }
);

export const addNewPost:any = createAsyncThunk(
  "posts/addNewPost",
  async (user) => {
    await axios.post("http://localhost:8080/posts", user);
    const responseGet = await axios.get("http://localhost:8080/posts");
    return responseGet.data;
  }
);

export const changePost:any = createAsyncThunk(
  "posts/changePost",
  async (post:any) => {
    const response= await axios.put(`http://localhost:8080/posts/${post.id}`, post);
    console.log(response.data.id);
    
    return response.data;
  }
);
export const deletePost:any = createAsyncThunk(
  "posts/deletePostPost",
  async (id:number) => {
    console.log(id)
    const response = await axios.delete(`http://localhost:8080/posts/${id}`);
    return id
  }
);

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
      .addCase(changePost.fulfilled, (state:any, action) => {
        const index = state.posts.findIndex((item:any) => item.id === action.payload.id);
        console.log(index); 
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(deletePost.fulfilled,(state:any,action:any)=>{
        state.posts = state.posts.filter((post:any) => post.id !== action.payload);
    })
  },
});
export default postReducer.reducer;
