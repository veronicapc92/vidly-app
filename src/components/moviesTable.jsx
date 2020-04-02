import React, { Component } from "react";
import auth from "../services/authService";
import Table from "./common/table";
import Like from "./common/like";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onLike={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ];

  displayDelete() {
    const user = auth.getCurrentUser();

    if (user && user.isAdmin) return this.columns;
    else return this.columns.filter(column => column.key !== "delete");
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;
    const filteredColumns = this.displayDelete();

    return (
      <Table
        columns={filteredColumns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
