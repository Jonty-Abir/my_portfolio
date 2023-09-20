import { findAllPost } from "@/helper/blog.helper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Iblog {
  isLoading: boolean;
  isError: boolean;
  blogs: [];
}

const initialState: Iblog = {
  isError: false,
  isLoading: false,
  blogs: [],
};

/*==============  ================*/

export const getAllBlogs = createAsyncThunk("all_blogs", async () => {
  const result = await findAllPost();
  return result;
});

const blogSlice = createSlice({
  name: "blog_slice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllBlogs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBlogs.rejected, (state) => {
      state.isError = true;
      state.blogs = [];
      state.isLoading = false;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, { payload }) => {
      state.blogs = payload;
      state.isLoading = false;
    });
  },
});

export default blogSlice.reducer;
