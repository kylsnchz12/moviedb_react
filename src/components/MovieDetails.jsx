// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieDetails({ data, movieId }) {
    const movie = data.find((movie) => movie.id === movieId);


    return (
        <div>
        <h2>Movie Details</h2>
        <table>
            <thead>
            <tr>
                <th>Movie ID</th>
                <th>Movie Title</th>
                <th>Year Made</th>
                <th>Length</th>
                <th>Language</th>
                <th>Date of Release</th>
                <th>Country Released</th>
            </tr>
            </thead>
            <tbody>
            <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.length}</td>
                <td>{movie.language}</td>
                <td>{movie.releaseDate}</td>
                <td>{movie.country}</td>
            </tr>
            </tbody>
        </table>
        <button>Go Back</button>
        </div>
    );
}

MovieDetails.propTypes = {
    data: PropTypes.array.isRequired,
    movieId: PropTypes.number.isRequired,
    onGoBack: PropTypes.func.isRequired,
};