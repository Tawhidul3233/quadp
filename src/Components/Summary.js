import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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

                  <button onClick={() => setShowForm(true)} type="button" class="btn btn-info">
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


      <div className='w-50 mx-auto mb-5'>
        {
          showForm && <form className=' border p-4'>
            <div className="mb-3">
              <label htmlFor="movieName" className="form-label">
                Movie Name
              </label>
              <input
                type="text"
                value={eachMovie?.name}
                readOnly
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />

            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Status
              </label>
              <input
                value={eachMovie?.status}
                type="text"
                readOnly
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Schedule
              </label>
              <input
                value={
                  eachMovie?.schedule ? `Schedule : ${scheduleDay(eachMovie?.schedule?.days)}  ${eachMovie?.schedule?.time} (${eachMovie?.runtime}min)` : ''
                }
                type="text"
                readOnly
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Your name
              </label>
              <input
                placeholder='Enter your address'
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Your address
              </label>
              <input
                placeholder='Enter your address'
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button  type="submit" className="btn btn-primary ">
              Submit Booking
            </button>
            <button onClick={() => setShowForm(false)} type="submit" className="btn btn-secondary m-2  ">
              close
            </button>
          </form>

        }
      </div>


    </div>
  );
};

export default Summary;