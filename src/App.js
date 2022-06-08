import './App.css';
import {useState, useEffect} from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
import Home from './Home';
import Fab from './Devfab';
import './Custom.css';
import Footer from './Footer';


const API_URL = 'http://www.omdbapi.com?apikey=4230fa46';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect (() => {
    searchMovies('')
  }, []);
  return (
    <>
   <div className="App">
     
     <h1>MovieHub</h1>

     <div className='sBox'>
       <div className='search'>
       <input 
        placeholder='Search for your desire movies'
        value={searchTerm}
        alt='search'
        onChange={(e) => setSearchTerm(e.target.value)}
       />
      <img 
        src={SearchIcon}
        alt='search'
        onClick={()=> searchMovies(searchTerm)}
      />
     </div>
     </div>
     {
       movies?.length > 0
       ? (
      <div className='container'>
       {
         movies.map((movie) => (
          <MovieCard movie= {movie}/>
         ))}
      </div>) : (
        <div className='empty'>
          <h2 className='inst'>Hello user! Search for your desired movie in above searchBox. </h2> 
        </div>
        
      )
     }
     </div>
     <Fab />
     <Home />
     <Footer />
     
     
     </>
     );
}

export default App;