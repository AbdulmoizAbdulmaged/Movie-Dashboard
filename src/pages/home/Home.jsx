import "./home.css";
import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/apiCalls";

import BarChartComponent from "../../components/barChart/BarChartComponent";
import CountryPieChart from "../../components/countryPieChart/CountryPieChart";
import LanguagesPieChart from "../../components/languagesPieChart/LanguagesPieChart";
import MoviesList from "../../components/moviesList/MoviesList";



function Home() {
  const dispatch = useDispatch();
 

   useEffect(() => {

    fetchMovies(dispatch);
   }, [dispatch]);

  

  return (
    <div className="home  box-border">
      <div className="chart-box chart grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">  
      <BarChartComponent  data = {useSelector((state) => state.movie.movies)} />
      <CountryPieChart data={useSelector((state) => state.movie.movies)} />
      <LanguagesPieChart data={useSelector((state) => state.movie.movies)} /> 
      </div>
      <div className="movies">
        <MoviesList />
      </div>
    </div>
  )
}

export default Home
