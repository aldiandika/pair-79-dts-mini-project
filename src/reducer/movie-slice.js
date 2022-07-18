import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  movies: [],
};

// Membuat extra action untuk fetch data
export const movieAsync = createAsyncThunk("movie/fetchMovie", async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=b05b0bef835101289e13d0c705ae7c35`
  );
  console.log(response.data.results);
  return response.data;
});

const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(movieAsync.fulfilled, (state, action) => {
        state.movies = action.payload.results;
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
