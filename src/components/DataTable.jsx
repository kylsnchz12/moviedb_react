import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function DataTable({data}){
    let navigate = useNavigate();
    return (
        <>
            <h1>Movies R Us Movie Database</h1>
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
                {data.map((rowData) => (
                    <tr key={rowData.movieId}>
                    <td>{rowData.movieId}</td>
                    <td>{rowData.movieTitle}</td>
                    <td>{rowData.yearMade}</td>
                    <td>{rowData.lengthMovie}</td>
                    <td>{rowData.language}</td>
                    <td>{rowData.dateRelease}</td>
                    <td>{rowData.countryReleased}</td>
                    <td>
                        <button onClick={() => {
                            navigate(`/movieDetails/${rowData.movieId}`)
                        }}>
                        More Details
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

DataTable.propTypes = {
    data: PropTypes.array.isRequired,
};