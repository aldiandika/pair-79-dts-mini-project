import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  movies: [],
  topMovies: [],
};

// Membuat extra action untuk fetch data
// Popular
export const movieAsync = createAsyncThunk("movie/fetchMovie", async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=b05b0bef835101289e13d0c705ae7c35`
  );
  return response.data;
});

// Top rated
export const topMovieAsync = createAsyncThunk(
  "movie/fetchPopMovie",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=b05b0bef835101289e13d0c705ae7c35`
    );
    console.log(response.data.results);
    return response.data;
  }
);

const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(movieAsync.fulfilled, (state, action) => {
        state.movies = action.payload.results;
        state.loading = false;
      })
      .addCase(movieAsync.pending, (state, action) => {
        console.log("loading");
        state.loading = true;
      })
      .addCase(movieAsync.rejected, (state, action) => {
        console.log("fail to get movies");
      })
      .addCase(topMovieAsync.fulfilled, (state, action) => {
        state.topMovies = action.payload.results;
        state.loading = false;
      })
      .addCase(topMovieAsync.pending, (state, action) => {
        console.log("loading");
        state.loading = true;
      })
      .addCase(topMovieAsync.rejected, (state, action) => {
        console.log("fail to get popular movies");
      });
  },
});

// Membuat selector untuk mengambil state
export const selectMovie = (state) => state.movie.movies;
export const selectTopMovie = (state) => state.movie.topMovies;
export const selectLoadingState = (state) => state.movie.loading;

export default MovieSlice.reducer;
