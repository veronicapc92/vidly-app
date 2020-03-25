import React, { Component } from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import { paginate } from '../utils/paginate';

class Movies extends Component {
    state = { 
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4
    };

    componentDidMount() {
        const genres = [{ name: 'All Genres', _id: ''}, ...getGenres()]

        this.setState({ movies: getMovies(), genres })
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    };

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page })
    };

    handleGenreFilter = genre => {
        this.setState( { filteredGenre: genre, currentPage: 1 });
    }

    handleSort = column => {
        console.log('Header clicked');
    }

    render() { 
        const { length: moviesCount } = this.state.movies;
        const { movies: allMovies , pageSize, currentPage, genres, filteredGenre } = this.state;

        if (moviesCount === 0) 
            return <p>There are no movies in the database.</p>;

        const filteredMovies = (filteredGenre && filteredGenre._id !== '') ? 
            allMovies.filter(movie => movie.genre.name === filteredGenre.name)
            : allMovies;

        const movies = paginate(filteredMovies, currentPage, pageSize);
            
        return ( 
                <div className="row">
                    <div className="col-3">
                        <ListGroup 
                            genres={genres}
                            filteredGenre={filteredGenre}
                            onGenreFilter={this.handleGenreFilter}/>
                    </div>
                    <div className="col">
                        <p>Showing {filteredMovies.length} movies in the database.</p>
                        <MoviesTable 
                            movies={movies}
                            onLike={this.handleLike}
                            onDelete={this.handleDelete}
                            onSort={this.handleSort}/>
                        <Pagination 
                            moviesCount={filteredMovies.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                    </div>
                </div>
         );
    }
}
 
export default Movies;