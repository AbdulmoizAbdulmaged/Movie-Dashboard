//import { publicRequest } from "../userRequestMethods";
import { fetchMovieFailure, fetchMovieStart, fetchMovieSuccess } from "./movieRedux";

import data from "../data";


export const fetchMovies = async (dispatch) => {

  dispatch(fetchMovieStart());
  try{
   // const res = await publicRequest.get('/');
    dispatch(fetchMovieSuccess(data));

    }
  catch(err){
    console.error(err);
    dispatch(fetchMovieFailure());
  }

}

