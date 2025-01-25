import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({

name: "movie",
initialState: {
movies: [],
isfetching: false,
error: false,
},

reducers: {
fetchMovieStart: (state) => { 
  state.isfetching = true; },
fetchMovieSuccess: (state, action) => { 
  state.movies = action.payload; 
  state.isfetching = false; 
  state.error = false; },
fetchMovieFailure: (state) => { 
  state.isfetching = false; 
  state.error = true; },

},


});

export const { fetchMovieStart, fetchMovieSuccess, fetchMovieFailure } = movieSlice.actions;
export default movieSlice.reducer;