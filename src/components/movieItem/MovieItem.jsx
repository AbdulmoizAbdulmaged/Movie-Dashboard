import './movieItem.css'

import PropTypes from 'prop-types';


function MovieItem({ movie }) {
  return (
    <div className="movieItem flex flex-col items-start justify-start m-4 p-4 border border-gray-300 rounded-lg bg-white w-full h-auto">
    <h4 className="text-lg font-semibold mb-2">{movie.title}</h4>
    <p className="text-sm text-600 mb-1"><strong>Year:</strong> {movie.year}</p>
    <p className="text-sm text-600 mb-1"><strong>Genre:</strong> {movie.genre.join(', ')}</p>
    <p className="text-sm text-600 mb-1"><strong>Country:</strong> {movie.country.join(', ')}</p>
    <p className="text-sm text-600 mb-1"><strong>IMDB Rating:</strong> {movie.imdb_rating}</p>
    <p className="text-sm text-600 mb-1"><strong>Oscar Nominations:</strong> {movie.oscar_nominations}</p>
    <p className="text-sm text-600 mb-1"><strong>Oscar Wins:</strong> {movie.oscar_winning}</p>
    <p className="text-sm text-600 mb-1"><strong>Cast:</strong> {movie.cast.join(', ')}</p>
    <p className="text-sm text-600 mb-1"><strong>Language:</strong> {movie.language.join(', ')}</p>
    <p className="text-sm text-600 mb-1"><strong>Oscar Nominations List:</strong> {movie.oscar_nominations_list.join(', ')}</p>
    <p className="text-sm text-600 mb-1"><strong>Oscar Winning List:</strong> {movie.oscar_winning_list.join(', ')}</p>
  </div>
   
  
  )
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    imdb_rating: PropTypes.number.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
    country: PropTypes.arrayOf(PropTypes.string).isRequired,
    oscar_nominations: PropTypes.number.isRequired,
    oscar_winning: PropTypes.number.isRequired,
    cast: PropTypes.arrayOf(PropTypes.string).isRequired,
    language: PropTypes.arrayOf(PropTypes.string).isRequired,
    oscar_nominations_list: PropTypes.arrayOf(PropTypes.string).isRequired,
    oscar_winning_list: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}



export default MovieItem

