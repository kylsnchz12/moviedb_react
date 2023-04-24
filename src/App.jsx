import './App.css'
import DataTable from './components/DataTable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';



const rawData = [
  {
      movieId: "989",
      movieTitle: "Maze Runner Death Cure",
      yearMade: 2015,
      lengthMovie: 128,
      language: "English",
      dateRelease: "9/12/2015",
      countryReleased: "UK",
      director: "Duffer Brothers",
      starring: "Newt",
      genre: "Sci-Fi",
      rating: "Rigthy Sock",
      score: "8 stars"
  },
  {
      movieId: "23",
      movieTitle: "Maze Runner Kill Order",
      yearMade: 2017,
      lengthMovie: 138,
      language: "English",
      dateRelease: "9/12/2017",
      countryReleased: "UK",
      director: "Rufo Brothers",
      starring: " Thomas Broodie Sangster",
      genre: "Sci-Fi",
      rating: "Rigthy Sock",
      score: "10 stars"
  }
]

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<DataTable data={rawData}/>} />
        <Route exact path='/movieDetails/:id' element={<MovieDetails data={rawData}/>} />
      </Routes>
    </Router>
  );

}

export default App
