import React, { useEffect, useState } from 'react';
import Show from '../Components/Show';

const Home = () => {
  const [movies, setMovies] = useState([])
  // console.log(movies)

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <div className=' align-items-center justify-content-center text-center d-flex align-content-stretch flex-wrap m-5 '>
        {
          movies.map(movie => <Show key={movie?.show?.id} movie={movie}> </Show>)
        }
      </div>
    </div>
  );
};

export default Home;