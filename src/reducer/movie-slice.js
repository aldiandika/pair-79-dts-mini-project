import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  movies: "movies",
};

export const movieAsync = createAsyncThunk("movie/fetchMovie", async () => {
  const response = await axios.get(`https://reqres.in/api/users/`);
  console.log(response.data);
  return response.data.data;
});

const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(movieAsync.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(movieAsync.pending, (state, action) => {
        console.log("loading");
      })
      .addCase(movieAsync.rejected, (state, action) => {
        console.log("fail to get user");
      });
  },
});

// Membuat selector untuk mengambil state
export const selectMovie = (state) => state.movie.movies;

export default MovieSlice.reducer;
