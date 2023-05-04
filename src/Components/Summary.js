import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from './BookingModal';

const Summary = () => {
  const { showId } = useParams()
  // console.log(showId)

  const [eachMovie, setEachMovie] = useState({})
  console.log(eachMovie)

  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then(res => res.json())
      .then(data => setEachMovie(data))
      .catch((err) => console.log(err))
  }, [])

  const scheduleDay = (arr) => {
    if (arr == 1) {
      return arr[0]
    } else {
      return arr.join(' || ')
    }
  }



  return (
    <div>
      <div className='m-5 d-lg-flex'>
        <div className="card mb-3 border-0" style={{ maxWidth: 840 }}>
          <div className="row g-0 ">
            <div className="col-md-4">
              <img src={eachMovie?.image?.medium} className="img-fluid rounded-start items-center " alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{eachMovie?.name}</h5>
                <p className="card-text">
                  {eachMovie?.summary}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Premiered : {eachMovie?.premiered}</small>
                </p>

                <div>
                  <BookingModal></BookingModal>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Book Ticket
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="card bg-light bg-gradient " style={{ width: "25rem" }}>
          <div className="card-body">
            <h5 className="card-title">Show Info</h5>
            <p className="card-text">
              {
                eachMovie?.network ? `Network : ${eachMovie?.network?.name}` : ''
              }
            </p>
            <p className="card-text">
              {
                eachMovie?.language ? `Language : ${eachMovie?.language}` : ''
              }
            </p>
            <p className="card-text">
              {
                eachMovie?.status ? `Status : ${eachMovie?.status}` : ''
              }
            </p>
            <p className="card-text">
              {
                eachMovie?.type ? `Show Type : ${eachMovie?.type}` : ''
              }
            </p>
            <p className="card-text">
              {
                eachMovie?.schedule ? `Schedule : ${scheduleDay(eachMovie?.schedule?.days)}  ${eachMovie?.schedule?.time} (${eachMovie?.runtime}min)` : ''
              }
            </p>
            <p className="card-text">
              {
                eachMovie?.network?.officialSite
                  ? `Official site : ${eachMovie?.network?.officialSite
                  }` : ''
              }
            </p>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Summary;