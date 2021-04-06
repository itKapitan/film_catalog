import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Movies from './Movie'
import './App.css'

class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async() => {
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json')
    this.setState({movies, isLoading: false})
  }
  componentDidMount() {
    this.getMovies()
  }

  render() {
    const {isLoading, movies} = this.state
    return (
      <section className="movies">
        {isLoading
          ? ( <div className="loader">загрузка...</div> )
          : (
            movies.map(movie => {
              return (<Movies
                id={movie.id}
                title={movie.title}
                summary={movie.summary}
                cover={movie.large_cover_image}
                year={movie.year}
                genres={movie.genres}/>)
            })
          )}
      </section>
    )
  }
}

export default App