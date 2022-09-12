import {Link} from "react-router-dom";

function MoviesList({movies}){

    const moviesElements = Object.keys(movies).map((movieID) => (
        <li key={movieID}>
          <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
        </li>
      ));

    return <ul>{moviesElements}</ul>;
}

export default MoviesList;