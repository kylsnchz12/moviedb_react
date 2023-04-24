
const rawData = [
    {
        movieId: "989",
        movieTitle: "Maze Runner Death Cure",
        yearMade: 2015,
        lengthMovie: 128,
        language: "English",
        dateRelease: "9/12/2015",
        countryReleased: "UK",
    },
    {
        movieId: "23",
        movieTitle: "Maze Runner Kill Order",
        yearMade: 2015,
        lengthMovie: 128,
        language: "English",
        dateRelease: "9/12/2015",
        countryReleased: "UK",
    }
]

export default function DataTable(){
    return(
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
                {rawData.map( rowData => (
                    <tr key={rowData.movieId}>
                        <td>{rowData.movieId}</td>
                        <td>{rowData.movieTitle}</td>
                        <td>{rowData.yearMade}</td>
                        <td>{rowData.lengthMovie}</td>
                        <td>{rowData.language}</td>
                        <td>{rowData.dateRelease}</td>
                        <td>{rowData.countryReleased}</td>
                        <td>
                            <button>More Details</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}