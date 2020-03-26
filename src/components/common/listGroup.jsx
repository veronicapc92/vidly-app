import React from "react";

const ListGroup = ({
  genres,
  textProperty,
  valueProperty,
  filteredGenre,
  onGenreFilter
}) => {
  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          key={genre[valueProperty]}
          className={
            genre === filteredGenre
              ? "list-group-item btn active"
              : "list-group-item btn"
          }
          onClick={() => onGenreFilter(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
