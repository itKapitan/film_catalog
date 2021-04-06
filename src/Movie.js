import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

function Movie({
  id,
  title,
  summary,
  cover,
  year,
  genres
}) {
  return (
    <div className="movie-item" id={id}>
      <div className="movie-img">
        <img src={cover} alt={title}/>
      </div>
      <h1 className="movie-title">{title} {year}</h1>
      <div className="movie-summary">
            {summary.slice(0, 100)}... 
      </div>
      <div className="movie-genres">
        {genres
          .slice(0, 4)
          .map(genre => {
            return <span className="movie-genres-item">{genre}</span>
          })}
      </div>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.array.isRequired
}

export default Movie