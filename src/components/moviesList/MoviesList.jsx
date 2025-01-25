
import { useSelector } from "react-redux"
import MovieItem from "../movieItem/MovieItem";
import './movieList.css'
import { useState } from "react";


function MoviesList() {
  const movies = useSelector((state) => state.movie.movies);
  const [filter, setFilter] = useState({
    title: '',
    genre: '',
    year: '',
    language: '',
    country: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      (filter.title === '' || movie.title.toLowerCase().includes(filter.title.toLowerCase())) &&
      (filter.genre === '' || movie.genre.some((g) => g.toLowerCase().includes(filter.genre.toLowerCase()))) &&
      (filter.year === '' || movie.year.includes(filter.year))&&
      (filter.language === '' || movie.language.some((l)=>l.toLowerCase().includes(filter.language.toLocaleLowerCase()))) &&
      (filter.country === '' || movie.country.some((c)=>c.toLowerCase().includes(filter.country.toLocaleLowerCase())))
    );
  });
  return (
    <div className="container-chart">
      <h1 className="text-center text-3xl font-bold mt-4 mb-5">Movies List</h1>  
      <div className="filter-container mb-4 gap-2">
      <input
          type="text"
          name="title"
          placeholder="Filter by title"
          value={filter.title}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded mr-2 mb-2"
        />
        <input
          type="text"
          name="genre"
          placeholder="Filter by genre"
          value={filter.genre}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded mr-2 mb-2"
        />
        <input
          type="text"
          name="language"
          placeholder="Filter by language"
          value={filter.language}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded mr-2 mb-2"
        />
        <input
          type="text"
          name="country"
          placeholder="Filter by country"
          value={filter.country}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded mr-2 mb-2"
        />
         <input
          type="text"
          name="year"
          placeholder="Filter by year"
          value={filter.year}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded mb-2"
        />
      </div>
    <div className="container-chart grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredMovies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
   
    </div>
    </div>
  )
}

export default MoviesList
