import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

export default function MovieDetails({data}) {
    let { id } = useParams();
    const movie = data.find((movie) => movie.movieId === id);
    let navigate = useNavigate();
    return (
        <div>
        <h2>Movie Information</h2>
        <div>
            <ul>
                <li>Movie Title: {movie.movieTitle}</li>
                <li>Year: {movie.yearMade}</li>
                <li>Running Time: {movie.lengthMovie}</li>
                <li>Directed By: {movie.director}</li>
                <li>Starring: {movie.starring}</li>
                <li>Genre: {movie.genre}</li>
                <li>Rating: {movie.rating}</li>
                <li>Score: {movie.score}</li>
            </ul>
        </div>
        <button onClick={() => {
            navigate("/")
        }}>Go Back</button>
        </div>
    );
}

MovieDetails.propTypes = {
    data: PropTypes.array.isRequired,
};