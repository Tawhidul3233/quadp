import React from 'react';
import { Link } from 'react-router-dom';

const Show = ({ movie }) => {
  const { show } = movie;

  // console.log(movie)

  const printTags = (array) => {
    if (array.length === 1) {
      return array[0]
    } else {
      return array.join(' || ')
    }
  }


  return (
    <div className='p-2'>
      <div className="card" style={{ width: "18rem" }}>
        <img src={show?.image?.medium} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{show?.name}</h5>
          <p className="card-text">
            {
              printTags(show?.genres)
            }
          </p>
          <Link to={`/summary/${show?.id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Show;